import "./App.css";
import Fluencer from "./components/Fluencer";
import HeroNavbarGrid from "./components/Hero-Navbar-Grid/Hero-Navbar-Grid";
import Message from "./components/Message";
import Social from "./components/Social";
import Mention from "./components/Mention";
import Pricing from "./components/Pricing/Pricing";
import Footer from "./components/layouts/footer/Footer";

import AOS from "aos";
import "aos/dist/aos.css";
import { ToastContainer } from "react-toastify";

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
      <ToastContainer />
    </>
  );
}

export default App;
