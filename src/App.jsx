
import { Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Footerlinks from "./components/Footerlinks/Footerlinks.jsx";

import Checkups from "./pages/Checkups/Checkups.jsx";
import Tests from "./pages/Tests/Tests.jsx";
import Cart from "./pages/Cart/Cart.jsx";
import Payment from "./pages/Payment/Payment.jsx";

// My Account
import MyAccount from "./pages/myaccount/Myaccount.jsx";

import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <Navbar />

      <Routes>
        {/* Home Redirect */}
        <Route path="/" element={<Navigate to="/checks" replace />} />

        {/* Checkups */}
        <Route path="/checks" element={<Checkups />} />

        {/* Tests */}
        <Route path="/tests" element={<Tests />} />

        {/* Cart */}
        <Route path="/cart" element={<Cart />} />

        {/* Payment */}
        <Route path="/payment" element={<Payment />} />

        {/* My Account */}
        <Route path="/my-account" element={<MyAccount />} />

        {/* Invalid Routes */}
        <Route path="*" element={<Navigate to="/checks" replace />} />
      </Routes>

      <Footerlinks />
      <Footer />
    </CartProvider>
  );
}

export default App;
