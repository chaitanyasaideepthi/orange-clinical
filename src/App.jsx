
import { Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Footerlinks from "./components/Footerlinks/Footerlinks.jsx";

import Checkups from "./pages/Checkups/Checkups.jsx";
import Tests from "./pages/Tests/Tests.jsx";
import Cart from "./pages/Cart/Cart.jsx";

import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <Navbar />

      <Routes>
        <Route path="/" element={<Navigate to="/checks" replace />} />
        <Route path="/checks" element={<Checkups />} />
        <Route path="/tests" element={<Tests />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>

      <Footerlinks />
      <Footer />
    </CartProvider>
  );
}

export default App;


