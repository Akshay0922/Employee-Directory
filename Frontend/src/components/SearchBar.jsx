// Importing Hooks
import { useState, useRef } from "react";

import { toast } from "react-toastify";

// Importing react icons
import { FiSearch, FiX, FiMic } from "react-icons/fi";

// Component-specific css
import '../assets/styles/search-bar.css';

/**
 * SearchBar Component
 * Renders a search input with optional voice recognition.
 * Supports typing search queries, clearing input, expanding/collapsing, and voice input using Web Speech API.
 *
 * @param {string} searchQuery - Current search input value.
 * @param {function} setSearchQuery - Setter to update search input value.
 * @param {boolean} expanded - Whether the search input is expanded.
 * @param {function} setExpanded - Setter to toggle the expanded state.
 */
const SearchBar = ({ searchQuery, setSearchQuery, expanded, setExpanded }) => {
  // Local state to track if voice recognition is active
  const [listening, setListening] = useState(false);

  // Ref to store the SpeechRecognition instance
  const recognitionRef = useRef(null);

  // Browser-specific SpeechRecognition API
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  // Optional audio feedback for start and stop
  const startBeep = typeof Audio !== "undefined" ? new Audio(
    "https://actions.google.com/sounds/v1/alarms/beep_short.ogg"
  ) : null;

  const stopBeep = typeof Audio !== "undefined" ? new Audio(
    "https://actions.google.com/sounds/v1/cartoon/wood_plank_flicks.ogg"
  ) : null;

  /** Handle input change */
  const handleChange = (e) => setSearchQuery(e.target.value);

  /** Toggle the search bar expansion */
  const toggleSearch = () => {
    setExpanded(!expanded);
    if (expanded) setSearchQuery(""); // Clear search on collapse
  };

  /**
   * Toggle voice recognition
   * Starts or stops listening and updates the search query with spoken input.
   */
  const handleVoiceToggle = () => {
    if (!SpeechRecognition) {
      alert("Speech recognition is not supported in this browser.");
      return;
    }

    // Initialize recognition if not already
    if (!recognitionRef.current) {
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = false;
      recognitionRef.current.lang = "en-US";
      recognitionRef.current.interimResults = false;

      // Capture speech results
      recognitionRef.current.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setSearchQuery(transcript);
        console.log("Searching for:", transcript);
      };

      // Handle errors
      recognitionRef.current.onerror = (err) => {
        console.error("Speech recognition error:", err);
        stopMic(true);
      };

      // Stop listening when recognition ends
      recognitionRef.current.onend = () => {
        setListening(false);
      };
    }

    if (!listening) {
      startBeep?.play();
      try {
        recognitionRef.current?.start();
        setListening(true);
      } catch (e) {
        console.warn("Could not start mic:", e);
      }
    } else {
      stopMic();
    }
  };

  /**
   * Stop voice recognition
   * @param {boolean} silent - If true, suppress stop sound
   * @param {boolean} forceBeep - If true, play stop sound even if silent
   */
  const stopMic = (silent = false, forceBeep = false) => {
    try {
      recognitionRef.current?.stop();
    } catch {
      console.warn("Mic already stopped");
    }
    setListening(false);
    if (!silent || forceBeep) stopBeep?.play();
  };

  /** Clear current search input */
  const clearSearch = () => {
    setSearchQuery("");
    toast.info("Search cleared!");
  }

  return (
    <div className="search-wrapper">

      {/* Expandable Search Input */}
      <div className={`search-slide ${expanded ? "open" : ""}`}>
        <input
          type="text"
          name="search"
          placeholder="Search by name or department..."
          className="search-input"
          value={searchQuery}
          onChange={handleChange}
          autoFocus={expanded}
        />

        {/* Voice / Clear Button */}
        <button
          className="voice-btn"
          onClick={searchQuery ? clearSearch : handleVoiceToggle}
          style={{ color: listening ? "red" : "inherit" }}
        >
          {searchQuery ? <FiX size={18} /> : <FiMic size={18} />}
        </button>
      </div>

      {/* Search Icon to Expand/Collapse */}
      <div className="search-icon-circle" onClick={toggleSearch}>
        <FiSearch size={18} />
      </div>

      {/* Voice Listening Popup */}
      {listening && (
        <div className="listening-popup fade-in">
          <div className="mic-anim">
            <FiMic size={40} />
            <span className="wave"></span>
          </div>
          <p>Listening...</p>
          <button className="close-popup" onClick={() => stopMic(false, true)}>
            <FiX size={20} />
          </button>
        </div>
      )}
    </div>
  );
};

export default SearchBar;