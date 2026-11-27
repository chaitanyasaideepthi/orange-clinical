
import { useState } from "react";
import "./LocationModal.css";

function LocationModal({ onClose, onSelectLocation }) {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");

  const availableCities = [
    "Bengaluru",
    "Chennai",
    "Gurugram",
    "Hyderabad",
    "Kolkata",
    "Mumbai",
  ];

  // Check location availability
  const checkLocation = () => {
    if (!search.trim()) {
      alert("Please enter your location");
      return;
    }

    const enteredLocation = search.trim().toLowerCase();

    const isAvailable = availableCities.some((city) =>
      enteredLocation.includes(city.toLowerCase())
    );

    if (isAvailable) {
      setStatus("available");
    } else {
      setStatus("unserviceable");
    }
  };

  // Select available location
  const handleContinue = () => {
    if (onSelectLocation) {
      onSelectLocation(search.trim());
    }

    onClose();
  };

  // Try again
  const handleTryAgain = () => {
    setSearch("");
    setStatus("");
  };

  // Contact support
  const handleSupport = () => {
    window.location.href = "mailto:support@bluelinemd.com";
  };

  return (
    <div className="location-overlay">
      <div className="location-modal">

        {/* Unserviceable Screen */}
        {status === "unserviceable" ? (
          <div className="unserviceable-screen">

            <button
              className="back-btn"
              onClick={handleTryAgain}
            >
              ←
            </button>

            <div className="unserviceable-icon">
              📍
            </div>

            <h2>Location Unserviceable</h2>

            <p className="unserviceable-text">
              Sorry! We currently don't provide services
              in <strong>{search}</strong>.
            </p>

            <p className="unserviceable-subtext">
              We are expanding our services to more locations.
              Please contact support for assistance.
            </p>

            <button
              className="support-btn"
              onClick={handleSupport}
            >
              Contact Support
            </button>

            <button
              className="try-again-btn"
              onClick={handleTryAgain}
            >
              Try Again
            </button>

          </div>
        ) : status === "available" ? (
          /* Available Screen */
          <div className="available-screen">

            <button
              className="back-btn"
              onClick={() => setStatus("")}
            >
              ←
            </button>

            <div className="available-icon">
              ✓
            </div>

            <h2>Location Available</h2>

            <p className="available-text">
              Great! We provide services in
              <strong> {search}</strong>.
            </p>

            <button
              className="continue-btn"
              onClick={handleContinue}
            >
              Continue
            </button>

            <button
              className="try-again-btn"
              onClick={handleTryAgain}
            >
              Try Another Location
            </button>

          </div>
        ) : (
          /* Search Screen */
          <>
            <div className="location-header">
              <button
                onClick={onClose}
                className="back-btn"
              >
                ←
              </button>

              <h3>Select a location</h3>
            </div>

            <input
              className="location-input"
              type="text"
              placeholder="Search for area, city..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  checkLocation();
                }
              }}
            />

            <button
              className="check-location-btn"
              onClick={checkLocation}
            >
              Check Location
            </button>

            <button
              className="location-option"
              onClick={() => {
                setSearch("Bengaluru");
                setStatus("available");
              }}
            >
              📍 Use my current location
            </button>

            <p className="saved-title">
              AVAILABLE LOCATIONS
            </p>

            <div className="city-list">
              {availableCities.map((city) => (
                <button
                  key={city}
                  className="city-item"
                  onClick={() => {
                    setSearch(city);
                    setStatus("available");
                  }}
                >
                  <span>📍</span>
                  <span>{city}</span>
                  <span className="city-arrow">›</span>
                </button>
              ))}
            </div>
          </>
        )}

      </div>
    </div>
  );
}

export default LocationModal;
