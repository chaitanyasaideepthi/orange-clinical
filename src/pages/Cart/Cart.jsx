
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import "./Cart.css";

function Cart() {
  const navigate = useNavigate();

  const { cartItems, removeFromCart, clearCart } = useCart();

  const totalPrice = cartItems.reduce(
    (total, item) =>
      total + Number(String(item.price || 0).replace(/[^\d]/g, "")),
    0
  );

  return (
    <div className="cart-overlay">

      {/* Background Overlay */}
      <div
        className="cart-backdrop"
        onClick={() => navigate(-1)}
      ></div>

      {/* Right Side Cart Drawer */}
      <div className="cart-page">

        {/* Header */}
        <div className="cart-header">

          <div className="cart-title">
            <button
              onClick={() => navigate(-1)}
              aria-label="Go back"
            >
              ‹
            </button>

            {cartItems.length > 0 && <h2>Your Cart</h2>}
          </div>

          {cartItems.length > 0 && (
            <button className="clear-cart" onClick={clearCart}>
              Clear cart
            </button>
          )}

        </div>

        {cartItems.length === 0 ? (

          /* EMPTY CART */
          <div className="empty-cart">

            {/* Shopping Cart Illustration */}
            <div className="empty-cart-icon">

              <svg
                viewBox="0 0 220 160"
                width="220"
                height="160"
                fill="none"
              >

                <ellipse
                  cx="110"
                  cy="80"
                  rx="100"
                  ry="72"
                  fill="#F5F5F5"
                />

                <g
                  stroke="#888888"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >

                  <path d="M62 48 L65 91 Q65 98 73 100 L122 110 Q132 112 136 102 L160 51" />

                  <path d="M65 48 Q65 40 74 42 L157 61 Q166 64 160 74 L145 106" />

                  <path d="M83 70 L143 85" />

                  <circle cx="64" cy="120" r="9" />

                  <circle cx="126" cy="135" r="9" />

                  <path d="M160 51 L170 38 L185 42" />

                </g>

              </svg>

            </div>

            <h2>Your cart is empty.</h2>

            <p>
              Looks like you haven’t added any
              <br />
              test / checkup to your cart
            </p>

            <button
              className="add-checkup-btn"
              onClick={() => navigate("/checks")}
            >
              Add test/checkup
            </button>

          </div>

        ) : (

          /* CART CONTENT */
          <div className="cart-content">

            {/* Left Section */}
            <div className="cart-left-section">

              <div className="cart-items-list">

                {cartItems.map((item) => (

                  <div className="cart-item-card" key={item.id}>

                    <div className="cart-item-info">

                      <h3>{item.title}</h3>

                      <div className="cart-item-price">

                        {item.oldPrice && (
                          <del>{item.oldPrice}</del>
                        )}

                        <strong>{item.price}</strong>

                      </div>

                    </div>

                    <button
                      className="delete-cart-item"
                      onClick={() => removeFromCart(item.id)}
                      aria-label={`Remove ${item.title}`}
                    >
                      ×
                    </button>

                  </div>

                ))}

              </div>

              {/* Add More Checkups */}
              <button
                className="add-more-checkups"
                onClick={() => navigate("/checks")}
              >
                <span>＋</span> Add test / checkup
              </button>

              <p className="cart-info">
                Tests added here are for <strong>1 member.</strong>
                You can add or remove members in the next step.
              </p>

            </div>

            {/* Order Summary */}
            <div className="cart-summary-card">

              <h3>Order Summary</h3>

              <div className="summary-item">
                <span>Total Items</span>
                <strong>{cartItems.length}</strong>
              </div>

              <div className="summary-item">
                <span>Subtotal</span>
                <strong>
                  ₹{totalPrice.toLocaleString("en-IN")}
                </strong>
              </div>

              <div className="summary-divider"></div>

              <div className="summary-total">
                <span>Total Amount</span>
                <strong>
                  ₹{totalPrice.toLocaleString("en-IN")}
                </strong>
              </div>

              {/* Proceed to Payment */}
              <button
                className="proceed-btn"
                onClick={() => navigate("/payment")}
              >
                Proceed →
              </button>

              <p className="secure-payment">
                Secure and convenient booking
              </p>

            </div>

          </div>

        )}

      </div>

    </div>
  );
}

export default Cart;


