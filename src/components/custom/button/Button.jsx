import "./Button.css";
export default function Button({ title }) {
  return (
    <div className="wrapper-btn">
      <a href="#">
        <span>{title}</span>
      </a>
    </div>
  );
}
