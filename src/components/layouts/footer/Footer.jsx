import Button from "../../custom/button/Button";
import Navs from "../navs/Navs";
import "./Footer.css";

const Footer = () => {
  const socialLinks = [
    { href: "#facebook", icon: "bi-facebook", label: "Facebook" },
    { href: "#linkedin", icon: "bi-linkedin", label: "LinkedIn" },
    { href: "#twitter", icon: "bi-twitter", label: "Twitter" },
    { href: "#youtube", icon: "bi-youtube", label: "YouTube" },
    { href: "#instagram", icon: "bi-instagram", label: "Instagram" },
  ];
  return (
    <footer className="text-dark">
      <div className="container">
        {/* Top Row */}
        <div className="row align-items-center py-3">
          <div className="text-center col-md-4 col-sm-12">
            <h6>&copy; 2023 Yourcompany</h6>
          </div>
          <div className="text-center col-md-4 col-sm-12">
            <h2>Landing</h2>
          </div>
          <div className="text-center col-md-4 col-sm-12">
            <Button title="Purchase now" />
          </div>
        </div>

        {/* Horizontal Line */}
        <hr className="my-2" />

        {/* Bottom Navigation */}
        <div className="py-3 d-flex justify-content-md-between justify-content-center flex-wrap gap-2">
          <Navs />
          {/* Social Media Icons */}
          <div className="social-icons">
            {socialLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-dark mx-2">
                <i className={link.icon}></i>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
