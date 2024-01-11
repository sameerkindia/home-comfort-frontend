import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <nav className="header-nav">
        <div className="nav-links">
          {/* <Link to="/">Home</Link>
          <Link to="/product">Product</Link>
          <Link to="/about">About</Link> */}
          <a>Home</a>
          <a>Home</a>
          <a>Home</a>
        </div>
        <div className="logo">
          <h1>home comfort</h1>
        </div>
        {/* <icon></icon> */}
      </nav>
    </header>
  );
}

export default Header;

{
  /* <div className="background-video">
        <video autoPlay loop muted>
          <source src="../../public/video/video.mp4" type="video/mp4"></source>
        </video>
      </div> */
}
