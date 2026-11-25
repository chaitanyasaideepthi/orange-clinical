import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar.jsx";
import Footerlinks from "./components/Footerlinks/Footerlinks.jsx";
import Footer from "./components/Footer/Footer.jsx";

import Checkups from "./pages/Checkups/Checkups.jsx";
import AdditionalInfo from "./pages/AdditionalInfo/AdditionalInfo.jsx";

function Home() {
  return (
    <div className="home-page">
      <h1>Welcome to Orange Health</h1>
      <p>Book your health tests and checkups.</p>
    </div>
  );
}

function Tests() {
  return (
    <div className="tests-page">
      <h1>Tests</h1>
      <p>Explore available lab tests.</p>
    </div>
  );
}

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tests" element={<Tests />} />
        <Route path="/checks" element={<Checkups />} />
        <Route path="/additional-info" element={<AdditionalInfo />} />
      </Routes>

      <Footerlinks />
      <Footer />
    </>
  );
}

export default App;






