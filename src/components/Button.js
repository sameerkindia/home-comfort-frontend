import { Link } from "react-router-dom";
import "./Button.css";

function Button({ linkPath, children, isClass, button, onClick }) {
  if (isClass) {
    return (
      <Link to={linkPath} className="btn main-btn">
        {children}
      </Link>
    );
  }

  if (button) {
    return (
      <button className="btn btn-2" onClick={onClick}>
        {children}
      </button>
    );
  }

  return (
    <Link to={linkPath} className="btn btn-2">
      {children}
    </Link>
  );
}

export default Button;
