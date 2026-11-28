
import { useNavigate } from "react-router-dom";
import "./BookingConfirmation.css";

function BookingConfirmation() {
  const navigate = useNavigate();

  const bookingDetails = JSON.parse(
    localStorage.getItem("bookingDetails") || "{}"
  );

  return (
    <div className="booking-confirmation-page">
      <div className="booking-confirmation-card">

        <div className="booking-success-icon">
          ✓
        </div>

        <h2>Booking Confirmed!</h2>

        <p className="booking-success-message">
          Your booking details have been submitted successfully.
        </p>

        <div className="booking-details">
          <h3>Booking Details</h3>

          <p>
            <strong>Name:</strong> {bookingDetails.name}
          </p>

          <p>
            <strong>Phone:</strong> {bookingDetails.phone}
          </p>

          <p>
            <strong>Email:</strong> {bookingDetails.email}
          </p>

          <p>
            <strong>Payment Method:</strong>{" "}
            {bookingDetails.paymentMethod === "COD"
              ? "Cash on Delivery"
              : "UPI"}
          </p>

          {bookingDetails.paymentMethod === "UPI" && (
            <p>
              <strong>UPI ID:</strong> {bookingDetails.upiId}
            </p>
          )}

          <p>
            <strong>Address:</strong> {bookingDetails.address}
          </p>
        </div>

        <button
          className="booking-home-btn"
          onClick={() => navigate("/checks")}
        >
          Back to Home
        </button>

      </div>
    </div>
  );
}

export default BookingConfirmation;
