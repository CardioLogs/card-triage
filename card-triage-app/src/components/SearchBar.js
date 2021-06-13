import "./SearchBar.css";

function SearchBar(props) {

  const SearchInputHandler = (event) => {
    const input = event.target.value;

    fetch("http://localhost:3001/cards")
      .then((res) => res.json())
      .then((data) => {
        if (input && input.length > 0) {
          const lowinput = input.toLowerCase();
          let filteredCards =
            data.filter((card) => {
              return card.patient_name.toLowerCase().includes(lowinput);
            }) || [];
          props.setAllCards(filteredCards)
        } else {
          props.setAllCards(data)
        }
      })
      .catch(console.log);
  };

  return (
    <div className="search-bar">
      <div className="input-group rounded">
        <input
          id="#search"
          type="search"
          className="form-control rounded"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="search-addon"
          onChange={SearchInputHandler}
        />
        <span
          className="input-group-text border-0"
          id="search-addon"
        >
          <i className="bi bi-search"></i>
        </span>
      </div>
    </div>
  );
}

export default SearchBar;
