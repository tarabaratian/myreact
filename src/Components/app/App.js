import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../pages/Header/Header.js";
import Footer from "../pages/Footer/Footer.js";
import Callus from "../pages/Callus/Callus.js";
import Home from "../pages/Home/Home.js";
import Showmore from "../pages/More/Showmore.js";
import Products from "../pages/Prodects/Products.js";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/callus" element={<Callus />} />
          <Route path="/:id" element={<Showmore />} />
          <Route path="/products" element={<Products />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
