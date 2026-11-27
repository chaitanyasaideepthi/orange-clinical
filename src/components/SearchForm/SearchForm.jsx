
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";

import { testData } from "../../Data/testsData.js";
import { checkups } from "../../data/checkupsData.js";

import "./SearchForm.css";

function SearchForm({ onClose }) {
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState("All");
  const [addedItems, setAddedItems] = useState([]);

  const navigate = useNavigate();
  const { addToCart } = useCart();

  // Convert price into number
  const convertPrice = (value) => {
    if (value === undefined || value === null || value === "") {
      return 0;
    }

    if (typeof value === "number") {
      return value;
    }

    return Number(String(value).replace(/[₹,\s]/g, "")) || 0;
  };

  // Get selling / offer price
  const getPrice = (item) => {
    return convertPrice(
      item.discountPrice ??
      item.offerPrice ??
      item.price ??
      item.amount
    );
  };

  // Get original price
  const getOldPrice = (item) => {
    return convertPrice(
      item.oldPrice ?? item.originalPrice
    );
  };

  // Calculate discount percentage
  const getDiscount = (oldPrice, price) => {
    if (!oldPrice || oldPrice <= price) {
      return 0;
    }

    return Math.round(((oldPrice - price) / oldPrice) * 100);
  };

  // Get all tests
  const allTests = Object.keys(testData || {}).reduce(
    (result, category) => {
      const tests = testData[category];

      if (Array.isArray(tests)) {
        tests.forEach((test, index) => {
          result.push({
            ...test,
            id: test.id || `test-${category}-${index}`,
            name: test.name || test.title || test.testName || "Test",
            category: test.category || category,
            type: "Test",
          });
        });
      }

      return result;
    },
    []
  );

  // Get all checkups
  const allCheckups = (Array.isArray(checkups) ? checkups : []).map(
    (item, index) => ({
      ...item,
      id: item.id || `checkup-${index}`,
      name: item.name || item.title || item.checkupName || "Health Checkup",
      category: item.category || "Health Checkup",
      type: "Checkup",
    })
  );

  // Combine tests and checkups
  const allItems = [...allTests, ...allCheckups];

  // Search and filter
  const filteredItems = allItems.filter((item) => {
    const searchText = search.trim().toLowerCase();

    const matchesSearch =
      item.name.toLowerCase().includes(searchText) ||
      String(item.category).toLowerCase().includes(searchText);

    const matchesTab =
      activeTab === "All" ||
      (activeTab === "Tests" && item.type === "Test") ||
      (activeTab === "Checkups" && item.type === "Checkup");

    return matchesSearch && matchesTab;
  });

  // Add to cart
  const handleAddToCart = (item) => {
    const cartItem = {
      ...item,
      id: item.id,
      name: item.name,
      title: item.name,
      price: getPrice(item),
      quantity: 1,
    };

    addToCart(cartItem);

    setAddedItems((previous) => {
      if (previous.includes(item.id)) {
        return previous;
      }

      return [...previous, item.id];
    });
  };

  // Proceed to cart
  const handleProceed = () => {
    onClose?.();
    navigate("/cart");
  };

  return (
    <div className="search-form-container">

      {/* Background Overlay */}
      <div
        className="search-form-overlay"
        onClick={onClose}
      />

      {/* Search Popup */}
      <div className="search-form-popup">

        {/* Search Input */}
        <div className="search-form-box">

          <button
            type="button"
            className="search-form-back"
            onClick={onClose}
            aria-label="Close search"
          >
            ‹
          </button>

          <input
            type="text"
            className="search-form-input"
            placeholder="Search for tests or checkups"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            autoFocus
          />

          {search && (
            <button
              className="search-form-clear"
              type="button"
              onClick={() => setSearch("")}
              aria-label="Clear search"
            >
              ×
            </button>
          )}
        </div>

        {/* Tabs */}
        <div className="search-form-tabs">
          {["All", "Checkups", "Tests"].map((tab) => (
            <button
              key={tab}
              type="button"
              className={`search-form-tab ${
                activeTab === tab ? "active" : ""
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Section Heading */}
        <div className="search-form-heading">
          <h3>
            {search.trim()
              ? "Search Results"
              : "Frequently Booked Checkups & Tests"}
          </h3>
        </div>

        {/* Results */}
        <div className="search-form-results">

          {filteredItems.length > 0 ? (
            filteredItems.map((item) => {
              const price = getPrice(item);
              const oldPrice = getOldPrice(item);
              const discount = getDiscount(oldPrice, price);
              const isAdded = addedItems.includes(item.id);

              return (
                <div
                  className="search-form-card"
                  key={item.id}
                >

                  {/* Card Content */}
                  <div className="search-form-card-content">

                    <h4>{item.name}</h4>

                    {item.time && (
                      <p className="search-form-report">
                        Reports Within {item.time}
                      </p>
                    )}

                    {item.reportTime && (
                      <p className="search-form-report">
                        Reports Within {item.reportTime}
                      </p>
                    )}

                    <p className="search-form-category">
                      {item.category}
                    </p>

                    {item.parameters && (
                      <p className="search-form-details">
                        {item.parameters} tests
                      </p>
                    )}

                    <span className="search-form-type">
                      {item.type}
                    </span>

                  </div>

                  {/* Price and Add Button */}
                  <div className="search-form-card-bottom">

                    <div className="search-form-price-section">

                      <div className="search-form-offer-row">

                        {oldPrice > price && (
                          <>
                            <span className="search-form-old-price">
                              ₹{oldPrice.toLocaleString("en-IN")}
                            </span>

                            <span className="search-form-discount">
                              {discount}% Off
                            </span>
                          </>
                        )}

                      </div>

                      <span className="search-form-price">
                        ₹{price.toLocaleString("en-IN")}
                      </span>

                    </div>

                    <button
                      className={`search-form-add-btn ${
                        isAdded ? "added" : ""
                      }`}
                      type="button"
                      onClick={() => handleAddToCart(item)}
                    >
                      {isAdded ? "Added ✓" : "+ Add"}
                    </button>

                  </div>

                </div>
              );
            })
          ) : (
            <div className="search-form-empty">
              <h4>No results found</h4>
              <p>Try searching with another name.</p>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="search-form-footer">

          <p>{filteredItems.length} results found</p>

          {addedItems.length > 0 && (
            <button
              type="button"
              className="search-form-proceed-btn"
              onClick={handleProceed}
            >
              Proceed ({addedItems.length})
            </button>
          )}

        </div>

      </div>
    </div>
  );
}

export default SearchForm;


