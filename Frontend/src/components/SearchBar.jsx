const SearchBar = ({ searchQuery, setSearchQuery }) => {
  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="search-bar-container">
      <input
        type="text"
        name="search"
        placeholder="Search by name or department..."
        className="search-bar"
        value={searchQuery}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBar;