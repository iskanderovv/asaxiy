import Hero from "../hero/Hero";
import Navbar from "../layouts/Navbar/Navbar";
import "./Hero-Navbar-Grid.css";

export default function HeroNavbarGrid() {
  return (
    <div className="hero-navbar-grid">
        <Navbar />
        <Hero />
    </div>
  )
}
