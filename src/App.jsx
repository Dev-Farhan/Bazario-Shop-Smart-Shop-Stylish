import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/Home";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import ProductDetail from "./pages/[product]";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/product/:productId" element={<ProductDetail />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
