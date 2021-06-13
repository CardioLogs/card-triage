import "./SearchBar.css";

function SearchBar(props) {

    const SearchInputHandler = (event) => {
        const input = event.target.value.toLowerCase()
        console.log(event)

        // fetch('http://localhost:3001/cards')
        // .then(res => res.json())
        // .then((data) => {
        //   let filteredCards = data.filter((card) => {
        //     return card.patient_name.toLowerCase().includes(input)
        //   }) || [];
        //   props.setAllCards({ allCards: filteredCards })
        // })
        // .catch(console.log)
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
          onInput={SearchInputHandler}
        />
        <span className="input-group-text border-0" id="search-addon">
          <i className="bi bi-search"></i>
        </span>
      </div>
    </div>
  )}

export default SearchBar;
