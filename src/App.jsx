import "./App.css";
import Fluencer from "./components/Fluencer";
import HeroNavbarGrid from "./components/Hero-Navbar-Grid/Hero-Navbar-Grid";
import Message from "./components/Message";

import AOS from "aos";
import "aos/dist/aos.css";
import Social from "./components/Social";
import Mention from "./components/Mention";

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
    </>
  );
}

export default App;
