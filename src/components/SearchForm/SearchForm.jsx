
import { useState } from "react";
import "./SearchForm.css";

function SearchForm({ onClose }) {
  const [searchText, setSearchText] = useState("");
  const [activeTab, setActiveTab] = useState("All");

  return (
    <div className="search-overlay" onClick={onClose}>
      <div
        className="search-popup"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search bar */}
        <div className="popup-search-bar">
          <button className="back-button" onClick={onClose}>
            ←
          </button>

          <input
            type="text"
            placeholder="Search for tests or checkups"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            autoFocus
          />

          <svg
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

        {/* Orange categories */}
        <div className="search-tabs">
          {["All", "Checkups", "Tests"].map((tab) => (
            <button
              key={tab}
              className={activeTab === tab ? "active-tab" : ""}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Heading */}
        <h3 className="frequently-title">
          Frequently Booked Checkups &amp; Tests
        </h3>

        {/* Content */}
        <div className="search-content">
          <p>
            Search for {activeTab === "All" ? "tests and checkups" : activeTab}
          </p>
        </div>
      </div>
    </div>
  );
}

export default SearchForm;
