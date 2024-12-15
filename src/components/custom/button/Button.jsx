import "./Button.css";
export default function Button({ title, onClick, className }) {
  return (
    <div className={`wrapper-btn ${className}`}>
      <button onClick={onClick}>
        <span>{title}</span>
      </button>
    </div>
  );
}
