
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Payment.css";

function Payment() {
  const navigate = useNavigate();

  const [paymentMethod, setPaymentMethod] = useState("UPI");
  const [upiId, setUpiId] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (paymentMethod === "UPI" && !upiId.trim()) {
      alert("Please enter your UPI ID");
      return;
    }

    alert(
      paymentMethod === "UPI"
        ? "UPI payment selected successfully!"
        : "Cash on Delivery selected successfully!"
    );
  };

  return (
    <div className="payment-page">
      <div className="payment-card">

        {/* HEADER */}
        <div className="payment-header">
          <button
            className="payment-back"
            onClick={() => navigate(-1)}
          >
            ‹
          </button>

          <h2>Payment Details</h2>
        </div>

        {/* FORM */}
        <form
          className="payment-form"
          onSubmit={handleSubmit}
        >
          <label>Full Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your phone number"
            value={formData.phone}
            onChange={handleChange}
            pattern="[0-9]{10}"
            maxLength="10"
            required
          />

          <label>Email Address</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label>Address</label>
          <textarea
            name="address"
            placeholder="Enter your address"
            rows="3"
            value={formData.address}
            onChange={handleChange}
            required
          />

          {/* PAYMENT OPTIONS */}
          <div className="payment-method-section">
            <h3>Select Payment Method</h3>

            {/* UPI */}
            <div
              className={`payment-option ${
                paymentMethod === "UPI" ? "selected" : ""
              }`}
              onClick={() => setPaymentMethod("UPI")}
            >
              <input
                type="radio"
                name="payment"
                checked={paymentMethod === "UPI"}
                onChange={() => setPaymentMethod("UPI")}
              />

              <div className="payment-option-content">
                <strong>UPI</strong>
                <p>Pay using UPI ID</p>
              </div>
            </div>

            {/* UPI INPUT */}
            {paymentMethod === "UPI" && (
              <div className="upi-input-section">
                <label>UPI ID</label>
                <input
                  type="text"
                  placeholder="example@upi"
                  value={upiId}
                  onChange={(e) => setUpiId(e.target.value)}
                  required
                />
              </div>
            )}

            {/* COD */}
            <div
              className={`payment-option ${
                paymentMethod === "COD" ? "selected" : ""
              }`}
              onClick={() => setPaymentMethod("COD")}
            >
              <input
                type="radio"
                name="payment"
                checked={paymentMethod === "COD"}
                onChange={() => setPaymentMethod("COD")}
              />

              <div className="payment-option-content">
                <strong>Cash on Delivery (COD)</strong>
                <p>Pay when the service is delivered</p>
              </div>
            </div>
          </div>

          {/* SUBMIT */}
          <button
            className="payment-submit-btn"
            type="submit"
          >
            {paymentMethod === "UPI"
              ? "Continue to UPI Payment"
              : "Confirm Booking"}
          </button>

          <p className="payment-security">
            Secure and convenient booking
          </p>
        </form>
      </div>
    </div>
  );
}

export default Payment;
