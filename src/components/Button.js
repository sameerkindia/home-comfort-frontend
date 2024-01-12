import { Link } from "react-router-dom";
import "./Button.css";

function Button({ linkPath, children, isClass }) {
  if (isClass) {
    return (
      <Link to={linkPath} className="btn main-btn">
        {children}
      </Link>
    );
  }

  return (
    <Link to={linkPath} className="btn btn-2">
      {children}
    </Link>
  );
}

export default Button;
