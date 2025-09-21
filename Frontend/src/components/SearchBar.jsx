// Icons
import { FiSearch, FiX } from "react-icons/fi";

// Component-specific CSS
import "../assets/styles/search-bar.css";

/**
 * SearchBar Component
 *
 * A collapsible search input for the Employee Directory.
 * - Allows users to search employees by name or department.
 * - Provides clear (reset) and toggle functionality.
 * - Expands/collapses smoothly with responsive animation.
 *
 * @component
 * @param {string}   searchQuery    - Current search input value.
 * @param {function} setSearchQuery - Setter function to update search input.
 * @param {boolean}  expanded       - Flag to control whether search is expanded.
 * @param {function} setExpanded    - Setter function to toggle expansion state.
 */
const SearchBar = ({ searchQuery, setSearchQuery, expanded, setExpanded }) => {

  /**
   * Handles changes in the search input field.
   * Updates the parent component's searchQuery state.
   *
   * @param {Object} e - Input change event object.
   */
  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  /**
   * Clears the current search input value.
   * Resets the search state in the parent component.
   */
  const clearSearch = () => {
    setSearchQuery("");
  };

  /**
   * Toggles the search input between expanded and collapsed states.
   * - Expands when closed.
   * - Collapses and clears input when already expanded.
   */
  const toggleSearch = () => {
    setExpanded(!expanded);

    if (expanded) {
      // Clear search input when collapsing
      setSearchQuery("");
    }
  };

  return (
    <div className="search-wrapper">
      {/* Sliding search input field */}
      <div className={`search-slide ${expanded ? "open" : ""}`}>
        <input
          type="text"
          name="search"
          placeholder="Search by name or department..."
          className="search-input"
          value={searchQuery}
          onChange={handleChange}
          autoFocus={expanded} // Automatically focus when expanded
        />

        {/* Show clear button only when a search query exists */}
        {searchQuery && (
          <button className="clear-btn" onClick={clearSearch}>
            <FiX size={18} />
          </button>
        )}
      </div>

      {/* Search icon button to expand/collapse the input */}
      <div className="search-icon-circle" onClick={toggleSearch}>
        <FiSearch size={18} />
      </div>
    </div>
  );
};

export default SearchBar;