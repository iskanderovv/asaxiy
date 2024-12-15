import "./App.css";
import Fluencer from "./components/Fluencer";
import Message from "./components/Message";
import Social from "./components/Social";
import Mention from "./components/Mention";
import Pricing from "./components/Pricing/Pricing";
import Footer from "./components/layouts/footer/Footer";
import BackToTop from "./components/custom/back-to-top/BackToTop";
import HeroNavbarGrid from "./components/hero-navbar-grid/HeroNavbarGrid";
import { ToastContainer } from "react-toastify";

import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  duration: 1500,
  once: false,
});

function App() {
  return (
    <>
      <HeroNavbarGrid />
      <Message />
      <Fluencer />
      <Social />
      <Mention />
      <Pricing />
      <Footer />
      <BackToTop />
      <ToastContainer />
    </>
  );
}

export default App;
