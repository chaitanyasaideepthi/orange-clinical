
import { Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Footerlinks from "./components/Footerlinks/Footerlinks.jsx";

import Checkups from "./pages/Checkups/Checkups.jsx";
import Tests from "./pages/Tests/Tests.jsx";
import Cart from "./pages/Cart/Cart.jsx";

// My Account
import MyAccount from "./pages/myaccount/Myaccount.jsx";

import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <Navbar />

      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={<Navigate to="/checks" replace />}
        />

        {/* Checkups Page */}
        <Route
          path="/checks"
          element={<Checkups />}
        />

        {/* Tests Page */}
        <Route
          path="/tests"
          element={<Tests />}
        />

        {/* Cart Page */}
        <Route
          path="/cart"
          element={<Cart />}
        />

        {/* My Account Page */}
        <Route
          path="/my-account"
          element={<MyAccount />}
        />

        {/* Invalid Routes */}
        <Route
          path="*"
          element={<Navigate to="/checks" replace />}
        />
      </Routes>

      <Footerlinks />
      <Footer />
    </CartProvider>
  );
}

export default App;
