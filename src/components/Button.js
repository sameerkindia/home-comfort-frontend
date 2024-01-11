import { Link } from "react-router-dom/cjs/react-router-dom";
import "./Button";

function Button({ linkPath, children, isClass }) {
  // if (isClass) {
  //   return (
  //     <Link to={linkPath} className="btn main-btn">
  //       {children}
  //     </Link>
  //   );
  // }

  return (
    <Link to={linkPath} className="btn btn2 btn3">
      {children}
    </Link>
  );
}

export default Button;
