import { useState } from "react";
import "./searchBar.css";

const SearchBar = ({ placeholder, icon }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleSearch = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className={`input-wrapper ${isVisible ? "expanded" : ""}`}>
      <input 
        placeholder={placeholder} 
        className={isVisible ? "visible" : "hidden"} 
      />
      <span className="icon" onClick={toggleSearch}>{icon}</span>
    </div>
  );
};

export default SearchBar;