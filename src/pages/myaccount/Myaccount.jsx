
import { useNavigate } from "react-router-dom";
import "./Myaccount.css";

function MyAccount() {
  const navigate = useNavigate();

  const accountItems = [
    {
      icon: "📄",
      title: "Records",
      description: "Access your health reports and history",
      path: "/records",
    },
    {
      icon: "📦",
      title: "Active Orders",
      description: "Track your upcoming and ongoing bookings",
      path: "/orders",
    },
    {
      icon: "🧾",
      title: "Invoices",
      description: "View and download your payment receipts",
      path: "/invoices",
    },
    {
      icon: "🔐",
      title: "Saved Passkeys",
      description: "Manage passkeys for faster, secure sign-ins",
      path: "/passkeys",
    },
    {
      icon: "👤",
      title: "Personal Details",
      description: "Manage your name, email and phone number",
      path: "/personal-details",
    },
    {
      icon: "📍",
      title: "My Addresses",
      description: "Manage your saved addresses",
      path: "/addresses",
    },
  ];

  const handleLogout = () => {
    const confirmLogout = window.confirm(
      "Are you sure you want to logout?"
    );

    if (confirmLogout) {
      navigate("/");
    }
  };

  return (
    <div className="my-account-page">
      <div className="my-account-container">

        {/* Profile Header */}
        <div className="account-profile">
          <div className="profile-info">
            <h2>BlueLineMD</h2>
            <p>My Account</p>
          </div>
        </div>

        {/* Account Menu */}
        <div className="account-section">
          <h3>My Account</h3>

          <div className="account-menu">
            {accountItems.map((item, index) => (
              <div
                className="account-menu-item"
                key={index}
                onClick={() => navigate(item.path)}
              >
                <div className="account-menu-icon">
                  {item.icon}
                </div>

                <div className="account-menu-content">
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>

                <span className="account-arrow">›</span>
              </div>
            ))}
          </div>
        </div>

        {/* Help Section */}
        <div className="account-help">
          <h3>Need help?</h3>

          <a
            href="https://wa.me/919008111144?text=Hi%2C%20I%20need%20help%20with"
            target="_blank"
            rel="noreferrer"
            className="account-help-link"
          >
            <span className="account-menu-icon">💬</span>

            <div className="account-menu-content">
              <h4>Chat with us</h4>
              <p>Contact our customer support team</p>
            </div>

            <span className="account-arrow">›</span>
          </a>
        </div>

        {/* Footer Links */}
        <div className="account-footer">
          <div className="account-legal-links">
            <a
              href="/privacy-policy"
            >
              Privacy Policy
            </a>

            <span>•</span>

            <a
              href="/terms"
            >
              Terms of Service
            </a>
          </div>

          <button
            className="account-logout"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>

      </div>
    </div>
  );
}

export default MyAccount;
