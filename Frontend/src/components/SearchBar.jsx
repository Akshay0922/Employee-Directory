import { useState } from "react";
import { FiSearch, FiX } from "react-icons/fi";
import "../assets/styles/search-bar.css";

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const clearSearch = () => {
    setSearchQuery("");
  };

  const toggleSearch = () => {
    setExpanded(!expanded);
    if (expanded) setSearchQuery("");
  };

  return (
    <div className="search-wrapper">
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

        {searchQuery && (
          <button className="clear-btn" onClick={clearSearch}>
            <FiX size={18} />
          </button>
        )}
      </div>

      <div className="search-icon-circle" onClick={toggleSearch}>
        <FiSearch size={18} />
      </div>
    </div>
  );
};

export default SearchBar;