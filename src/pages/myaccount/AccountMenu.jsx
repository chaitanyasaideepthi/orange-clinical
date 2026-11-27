
import { useNavigate } from "react-router-dom";
import "./AccountMenu.css";

function AccountMenu() {
  const navigate = useNavigate();

  const menuItems = [
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
      description: "Manage your profile information",
      path: "/personal-details",
    },
    {
      icon: "📍",
      title: "My Addresses",
      description: "Manage your saved addresses",
      path: "/addresses",
    },
  ];

  return (
    <div className="account-menu-section">

      <h3>My Account</h3>

      <div className="account-menu-list">

        {menuItems.map((item) => (
          <div
            className="account-menu-item"
            key={item.title}
            onClick={() => navigate(item.path)}
          >

            <div className="account-menu-icon">
              {item.icon}
            </div>

            <div className="account-menu-content">
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>

            <span className="account-menu-arrow">›</span>

          </div>
        ))}

      </div>

    </div>
  );
}

export default AccountMenu;
