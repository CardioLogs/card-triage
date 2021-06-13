import "./SearchBar.css";

function SearchBar() {
  return (
    <div className="search-bar">
      <div class="input-group rounded">
        <input
          type="search"
          className="form-control rounded"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="search-addon"
        />
        <span class="input-group-text border-0" id="search-addon">
          <i class="bi bi-search"></i>
        </span>
      </div>
    </div>
  );
}

export default SearchBar;
