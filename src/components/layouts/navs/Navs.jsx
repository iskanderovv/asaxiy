import "./Navs.css";
export default function Navs({className}) {
  return (
    <ul className={`list-unstyled d-flex gap-5 mb-2 mb-lg-0 ${className}`}>
      <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="#">
          Home
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          About
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          Contact
        </a>
      </li>
    </ul>
  );
}
