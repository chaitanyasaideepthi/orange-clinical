import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/images/logo.png";
import LocationModal from "../LocationModal/LocationModal.jsx";
import SearchForm from "../SearchForm/SearchForm.jsx";

function Navbar() {
  const [showLocation, setShowLocation] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("Bengaluru");

  // Search animation
  const words = ["tests", "checkups"];
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");

  useEffect(() => {
    const currentWord = words[wordIndex];
    let timeout;

    if (text.length < currentWord.length) {
      timeout = setTimeout(() => {
        setText(currentWord.slice(0, text.length + 1));
      }, 100);
    } else {
      timeout = setTimeout(() => {
        setText("");
        setWordIndex((prev) => (prev + 1) % words.length);
      }, 1000);
    }

    return () => clearTimeout(timeout);
  }, [text, wordIndex]);

  // Location selection
  function handleSelectLocation(location) {
    setSelectedLocation(location);
    setShowLocation(false);
  }

  return (
    <>
      <nav className="navbar">

        {/* Logo and Location */}
        <div
          className="nav-location"
          onClick={() => setShowLocation(true)}
        >
          <img
            src={logo}
            alt="Orange Health"
            className="nav-logo"
          />

          <div className="location-details">
            <span className="location-city">
              {selectedLocation}
            </span>

            <span className="location-area">
              Add Location
              <span className="dropdown-arrow">⌄</span>
            </span>
          </div>
        </div>

        {/* Animated Search Bar */}
        <div
          className="nav-search"
          onClick={() => setShowSearch(true)}
        >
          <input type="text" readOnly />

          <span className="search-placeholder">
            <span className="orange-text">Search for </span>
            <span className="animated-text">{text}</span>
            <span className="typing-cursor">|</span>
          </span>

          {/* Search Icon */}
          <svg
            className="search-icon"
            viewBox="0 0 24 24"
            width="22"
            height="22"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="10.8" cy="10.8" r="7.2" />
            <path d="m16 16 5 5" />
          </svg>
        </div>

        {/* Tests and Checkups Navigation */}
        <div className="nav-links">
          <NavLink to="/tests">Tests</NavLink>
          <NavLink to="/checks">Checkups</NavLink>
        </div>

        {/* Cart */}
        <button className="nav-icon-btn" aria-label="Cart">
          <svg
            viewBox="0 0 24 24"
            width="23"
            height="23"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 3h2l2.4 12.2a2 2 0 0 0 2 1.6h8.5a2 2 0 0 0 2-1.6L22 7H6" />
            <circle cx="10" cy="21" r="1.5" />
            <circle cx="18" cy="21" r="1.5" />
          </svg>
        </button>

        {/* Profile */}
        <button className="nav-icon-btn" aria-label="Profile">
          <svg
            viewBox="0 0 24 24"
            width="23"
            height="23"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="8" r="4" />
            <path d="M5 21v-2a7 7 0 0 1 14 0v2" />
          </svg>
        </button>

      </nav>

      {/* Search Popup */}
      {showSearch && (
        <SearchForm
          onClose={() => setShowSearch(false)}
        />
      )}

      {/* Location Modal */}
      {showLocation && (
        <LocationModal
          onClose={() => setShowLocation(false)}
          onSelectLocation={handleSelectLocation}
        />
      )}
    </>
  );
}

export default Navbar;
