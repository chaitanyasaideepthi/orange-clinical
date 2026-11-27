
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";

import "./Checkups.css";
import AdditionalInfo from "../AdditionalInfo/AdditionalInfo.jsx";
import FAQ from "../FAQ/FAQ.jsx";

import fullBodyImg from "../../assets/images/fullbody.png";
import womenImg from "../../assets/images/women.jpg";
import menImg from "../../assets/images/men.png";
import seniorsImg from "../../assets/images/seniors.jpg";
import kidsImg from "../../assets/images/kids.png";

// CATEGORIES
const categories = [
  { name: "Full Body", image: fullBodyImg },
  { name: "Women", image: womenImg },
  { name: "Men", image: menImg },
  { name: "Seniors", image: seniorsImg },
  { name: "Kids", image: kidsImg },
];

// ALL CHECKUPS - EXPORT FOR SEARCHFORM
export const checkups = [
  // FULL BODY CHECKUPS
  {
    id: 1,
    title: "Full Body Checkup - Essential",
    categories: ["Full Body"],
    parameters: 90,
    reports: "6 hours",
    oldPrice: "₹5,798",
    price: "₹1,599",
    offer: "73% Off",
  },
  {
    id: 2,
    title: "Full Body Checkup - Complete",
    categories: ["Full Body"],
    parameters: 115,
    reports: "12 hours",
    oldPrice: "₹18,500",
    price: "₹4,999",
    offer: "73% Off",
  },
  {
    id: 3,
    title: "Ultra Full Body Checkup - Male",
    categories: ["Full Body", "Men"],
    parameters: 131,
    reports: "Wed, 02 Dec",
    oldPrice: "₹42,729",
    price: "₹14,999",
    offer: "65% Off",
  },
  {
    id: 4,
    title: "Ultra Full Body Checkup - Female",
    categories: ["Full Body", "Women"],
    parameters: 136,
    reports: "Wed, 02 Dec",
    oldPrice: "₹45,529",
    price: "₹14,999",
    offer: "67% Off",
  },
  {
    id: 5,
    title: "Full Body Checkup - Advanced",
    categories: ["Full Body"],
    parameters: 98,
    reports: "6 hours",
    oldPrice: "₹8,388",
    price: "₹2,799",
    offer: "67% Off",
  },
  {
    id: 6,
    title: "Full Body Checkup - Comprehensive",
    categories: ["Full Body"],
    parameters: 106,
    reports: "12 hours",
    oldPrice: "₹12,768",
    price: "₹3,899",
    offer: "69% Off",
  },
  {
    id: 7,
    title: "Full Body Checkup - Basic",
    categories: ["Full Body"],
    parameters: 77,
    reports: "6 hours",
    oldPrice: "₹3,219",
    price: "₹1,099",
    offer: "66% Off",
  },
  {
    id: 8,
    title: "Children's Checkup - Essential for Kids",
    categories: ["Full Body", "Kids"],
    parameters: 36,
    reports: "12 hours",
    oldPrice: "₹5,868",
    price: "₹1,299",
    offer: "78% Off",
  },

  // WOMEN CHECKUPS
  {
    id: 9,
    title: "Women Health Checkup - Essential",
    categories: ["Women"],
    parameters: 71,
    reports: "12 hours",
    oldPrice: "₹15,999",
    price: "₹4,948",
    offer: "68% Off",
  },
  {
    id: 10,
    title: "Women Health Checkup - Comprehensive",
    categories: ["Women"],
    parameters: 103,
    reports: "Fri, 27 Nov",
    oldPrice: "₹14,548",
    price: "₹3,799",
    offer: "74% Off",
  },
  {
    id: 11,
    title: "Women Health Checkup - Advanced",
    categories: ["Women"],
    parameters: 100,
    reports: "12 hours",
    oldPrice: "₹10,998",
    price: "₹2,699",
    offer: "75% Off",
  },
  {
    id: 12,
    title: "Senior Citizen Checkup - Female",
    categories: ["Women", "Seniors"],
    parameters: 105,
    reports: "Fri, 27 Nov",
    oldPrice: "₹14,208",
    price: "₹4,299",
    offer: "70% Off",
  },
  {
    id: 13,
    title: "PCOD Screening",
    categories: ["Women"],
    parameters: 35,
    reports: "12 hours",
    oldPrice: "₹14,999",
    price: "₹3,849",
    offer: "61% Off",
  },
  {
    id: 14,
    title: "PCOD Screening - Comprehensive",
    categories: ["Women"],
    parameters: 39,
    reports: "Fri, 27 Nov",
    oldPrice: "₹10,038",
    price: "₹5,999",
    offer: "40% Off",
  },
  {
    id: 15,
    title: "Cancer Screening Profile - Female",
    categories: ["Women"],
    parameters: 30,
    reports: "Fri, 27 Nov",
    oldPrice: "₹7,440",
    price: "₹3,499",
    offer: "53% Off",
  },
  {
    id: 16,
    title: "Hair Fall Checkup - Female",
    categories: ["Women"],
    parameters: 38,
    reports: "Wed, 02 Dec",
    oldPrice: "₹8,509",
    price: "₹2,399",
    offer: "72% Off",
  },
  {
    id: 17,
    title: "Fertility Health Checkup",
    categories: ["Women"],
    parameters: 7,
    reports: "12 hours",
    oldPrice: "₹4,900",
    price: "₹2,999",
    offer: "39% Off",
  },
  {
    id: 18,
    title: "Antenatal Checkup - Basic",
    categories: ["Women"],
    parameters: 57,
    reports: "12 hours",
    oldPrice: "₹3,095",
    price: "₹999",
    offer: "68% Off",
  },
  {
    id: 19,
    title: "Antenatal Checkup - Comprehensive",
    categories: ["Women"],
    parameters: 59,
    reports: "12 hours",
    oldPrice: "₹4,345",
    price: "₹1,499",
    offer: "66% Off",
  },

  // MEN CHECKUPS
  {
    id: 20,
    title: "Men Health Checkup - Advanced",
    categories: ["Men"],
    parameters: 92,
    reports: "12 hours",
    oldPrice: "₹6,713",
    price: "₹1,999",
    offer: "70% Off",
  },
  {
    id: 21,
    title: "Men Health Checkup - Comprehensive",
    categories: ["Men"],
    parameters: 94,
    reports: "12 hours",
    oldPrice: "₹8,783",
    price: "₹2,999",
    offer: "66% Off",
  },
  {
    id: 22,
    title: "Ultra Full Body Checkup - Male",
    categories: ["Full Body", "Men"],
    parameters: 131,
    reports: "Wed, 02 Dec",
    oldPrice: "₹42,729",
    price: "₹14,999",
    offer: "65% Off",
  },
  {
    id: 23,
    title: "Senior Citizen Checkup - Male",
    categories: ["Men", "Seniors"],
    parameters: 104,
    reports: "12 hours",
    oldPrice: "₹12,058",
    price: "₹4,299",
    offer: "64% Off",
  },
  {
    id: 24,
    title: "Cancer Screening Profile - Male",
    categories: ["Men"],
    parameters: 29,
    reports: "Fri, 27 Nov",
    oldPrice: "",
    price: "₹3,499",
    offer: "",
  },
  {
    id: 25,
    title: "Hair Fall Checkup - Male",
    categories: ["Men"],
    parameters: 35,
    reports: "Wed, 02 Dec",
    oldPrice: "₹11,009",
    price: "₹2,999",
    offer: "73% Off",
  },

  // SENIORS CHECKUPS
  {
    id: 26,
    title: "Heart Health Checkup",
    categories: ["Seniors"],
    parameters: 65,
    reports: "Fri, 27 Nov",
    oldPrice: "₹12,854",
    price: "₹6,999",
    offer: "46% Off",
  },
  {
    id: 27,
    title: "Diabetes Care Checkup - Advanced",
    categories: ["Seniors"],
    parameters: 66,
    reports: "6 hours",
    oldPrice: "₹3,369",
    price: "₹1,599",
    offer: "53% Off",
  },

  // KIDS CHECKUPS
  {
    id: 28,
    title: "Children's Checkup - Advanced for Kids",
    categories: ["Kids"],
    parameters: 70,
    reports: "12 hours",
    oldPrice: "₹8,908",
    price: "₹2,099",
    offer: "76% Off",
  },
  {
    id: 29,
    title: "Child Allergy Panel (ImmunoCAP)",
    categories: ["Kids"],
    parameters: 19,
    reports: "Mon, 30 Nov",
    oldPrice: "₹13,460",
    price: "₹12,900",
    offer: "4% Off",
  },
  {
    id: 30,
    title: "Infant Allergy Panel (ImmunoCAP)",
    categories: ["Kids"],
    parameters: 7,
    reports: "Mon, 30 Nov",
    oldPrice: "₹5,340",
    price: "₹5,200",
    offer: "3% Off",
  },
];

function Checkups() {
  const [selectedCategory, setSelectedCategory] = useState("Full Body");

  const { addToCart } = useCart();
  const navigate = useNavigate();

  // FILTER CHECKUPS
  const filteredCheckups =
    selectedCategory === "All"
      ? checkups
      : checkups.filter((item) =>
          item.categories.includes(selectedCategory)
        );

  // ADD TO CART
  function handleAdd(item) {
    const cartItem = {
      ...item,
      id: `checkup-${item.id}`,
      name: item.title,
      price: Number(item.price.replace(/[₹,]/g, "")),
      category: "Health Checkup",
    };

    addToCart(cartItem);
    navigate("/cart");
  }

  // CLEAR FILTERS
  function clearFilters() {
    setSelectedCategory("All");
  }

  return (
    <div className="checkups-page">
      {/* BREADCRUMB */}
      <div className="breadcrumb">
        <span>Home</span>
        <span>›</span>
        <strong>Health Checkups Hyderabad</strong>
      </div>

      {/* CATEGORIES */}
      <div className="category-list">
        {categories.map((category) => (
          <div
            key={category.name}
            className={`category-item ${
              selectedCategory === category.name ? "active" : ""
            }`}
            onClick={() => setSelectedCategory(category.name)}
          >
            <div className="category-circle">
              <img
                src={category.image}
                alt={category.name}
                className="category-image"
              />
            </div>
            <p>{category.name}</p>
          </div>
        ))}
      </div>

      {/* RESULTS HEADING */}
      <div className="checkups-heading">
        <p>
          Showing <strong>{filteredCheckups.length}</strong> checkup(s)
        </p>

        <button onClick={clearFilters}>
          Clear filters
        </button>
      </div>

      {/* CHECKUP CARDS */}
      <div className="checkup-cards">
        {filteredCheckups.map((item) => (
          <div className="checkup-card" key={item.id}>
            {/* TITLE */}
            <h3>{item.title}</h3>

            {/* DETAILS */}
            <div className="checkup-details">
              {/* PARAMETERS */}
              <div className="detail-item">
                <span className="detail-icon">🧪</span>
                <div>
                  <p>INCLUDES</p>
                  <strong>{item.parameters} Parameters</strong>
                </div>
              </div>

              {/* REPORT TIME */}
              <div className="detail-item">
                <span className="detail-icon">🕒</span>
                <div>
                  <p>REPORTS WITHIN</p>
                  <strong>{item.reports}</strong>
                </div>
              </div>
            </div>

            {/* PRICE SECTION */}
            <div className="price-section">
              <div className="price-details">
                <div className="old-price-row">
                  {item.oldPrice && <del>{item.oldPrice}</del>}

                  {item.offer && (
                    <span className="offer-tag">
                      {item.offer}
                    </span>
                  )}
                </div>

                <strong className="current-price">
                  {item.price}
                </strong>
              </div>

              {/* ADD BUTTON */}
              <button
                className="add-button"
                onClick={() => handleAdd(item)}
              >
                <span>+</span> Add
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* ADDITIONAL INFORMATION */}
      <AdditionalInfo />

      {/* FAQ */}
      <FAQ />
    </div>
  );
}

export default Checkups;


