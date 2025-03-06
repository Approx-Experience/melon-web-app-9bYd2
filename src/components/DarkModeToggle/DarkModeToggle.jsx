import "./darkModeToggle.css"

const DarkModeToggle = () => {
  return (
    <label className="switch">
      <input type="checkbox" id="theme-toggle" />
      <span className="slider">
        <span className="icon sun">☀️</span>
        <span className="icon moon">🌙</span>
      </span>
    </label>
  )
}

export default DarkModeToggle;
