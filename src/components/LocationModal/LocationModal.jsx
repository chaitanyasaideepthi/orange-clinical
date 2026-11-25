
import "./LocationModal.css";

function LocationModal({ onClose, onSelectLocation }) {
  return (
    <div className="location-overlay">
      <div className="location-modal">

        <div className="location-header">
          <button onClick={onClose} className="back-btn">
            ←
          </button>
          <h3>Select a location</h3>
        </div>

        <input
          className="location-input"
          type="text"
          placeholder="Search for society, area, street name..."
        />

        <button
          className="location-option"
          onClick={() => onSelectLocation("Bengaluru")}
        >
          Use my current location
        </button>

        <button
          className="location-option"
          onClick={() => alert("Add address coming soon")}
        >
          + Add new address
        </button>

        <p className="saved-title">SAVED ADDRESSES</p>
        <p className="empty-address">No saved addresses found</p>

      </div>
    </div>
  );
}

export default LocationModal;
