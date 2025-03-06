import "./searchBar.css"

const SearchBar = ({ placeholder, icon }) => {
  return (
    <div className="input-wrapper">
      <input placeholder={placeholder} />
      <span className="icon">{icon}</span>
    </div>

  )
}

export default SearchBar;
