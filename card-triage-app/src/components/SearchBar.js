import "./SearchBar.css";

function SearchBar() {

    const SearchinputHandler = () => {
        console.log("search")
    }

  return (
    <div className="search-bar">
      <div className="input-group rounded">
        <input
          type="search"
          className="form-control rounded"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="search-addon"
          onInput={SearchinputHandler}
        />
        <span className="input-group-text border-0" id="search-addon">
          <i className="bi bi-search"></i>
        </span>
      </div>
    </div>
  )}

export default SearchBar;
