
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import "./Cart.css";

function Cart() {
  const navigate = useNavigate();

  const { cartItems, removeFromCart, clearCart } = useCart();

  const totalPrice = cartItems.reduce(
    (total, item) =>
      total + Number(item.price.replace(/[^\d]/g, "")),
    0
  );

  return (
    <div className="cart-page">

      {/* Header */}
      <div className="cart-header">
        <div className="cart-title">
          <button onClick={() => navigate(-1)}>‹</button>
          <h2>Your Cart</h2>
        </div>

        {cartItems.length > 0 && (
          <button className="clear-cart" onClick={clearCart}>
            Clear cart
          </button>
        )}
      </div>

      {cartItems.length === 0 ? (

        /* Empty Cart */
        <div className="empty-cart">
          <div className="empty-cart-icon">🛒</div>

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

        /* Cart Items */
        <>
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
                  <span>▤</span>
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

          {/* Bottom Checkout Bar */}
          <div className="cart-bottom-bar">

            <div className="cart-total-info">
              <span className="cart-bag-icon">♧</span>

              <div>
                <p>
                  {cartItems.length} {cartItems.length === 1 ? "Item" : "Items"} in cart
                </p>

                <strong>₹{totalPrice.toLocaleString("en-IN")}</strong>
              </div>
            </div>

            <button
              className="proceed-btn"
              onClick={() => alert("Proceeding to checkout")}
            >
              Proceed <span>→</span>
            </button>

          </div>
        </>
      )}

    </div>
  );
}

export default Cart;
