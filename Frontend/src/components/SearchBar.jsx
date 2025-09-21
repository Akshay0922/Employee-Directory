// React Imports
import { useState } from "react";

// Icons
import { FiSearch, FiX } from "react-icons/fi";

// Component-specific CSS
import "../assets/styles/search-bar.css";

/**
 * SearchBar Component
 * 
 * Renders a collapsible search input for the Employee Directory.
 * Users can search by employee name or department.
 * Includes clear and toggle functionality with responsive animation.
 * 
 * @param {string} searchQuery - Current search input value
 * @param {function} setSearchQuery - Setter function to update search input
 */
const SearchBar = ({ searchQuery, setSearchQuery }) => {
  // State to track whether the search input is expanded
  const [expanded, setExpanded] = useState(false);

  /**
   * Handles changes in the search input field
   * @param {Object} e - Event object from input
   */
  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  /**
   * Clears the current search input
   */
  const clearSearch = () => {
    setSearchQuery("");
  };

  /**
   * Toggles the expansion/collapse of the search input
   * Clears search input when collapsing
   */
  const toggleSearch = () => {
    setExpanded(!expanded);
    if (expanded) setSearchQuery("");
  };

  return (
    <div className="search-wrapper">
      {/* Sliding search input */}
      <div className={`search-slide ${expanded ? "open" : ""}`}>
        <input
          type="text"
          name="search"
          placeholder="Search by name or department..."
          className="search-input"
          value={searchQuery}
          onChange={handleChange}
          autoFocus={expanded} // Focus input when expanded
        />

        {/* Clear button appears when there is a search query */}
        {searchQuery && (
          <button className="clear-btn" onClick={clearSearch}>
            <FiX size={18} />
          </button>
        )}
      </div>

      {/* Search Icon Button to toggle input */}
      <div className="search-icon-circle" onClick={toggleSearch}>
        <FiSearch size={18} />
      </div>
    </div>
  );
};

export default SearchBar;