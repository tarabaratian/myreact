import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../Main/Main.js";
import More from "../More/More.js";
import Allproducts from "../Prodects/Allproducts.js";
import Slider from "../Slider/Slider.js";

const Home = () => {
  return (
    <>
        <Slider />
        <Allproducts />
        <Main />
        <More />
    </>
  );
};

export default Home;
