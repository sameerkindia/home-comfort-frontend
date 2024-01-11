import Button from "./Button";
import "./Header.css";
import Navbar from "./Navbar";

function Header() {
  return (
    <header className="header">
      <Navbar isClass={"header-nav"} />

      <div className="text-div container">
        <p className="big-headline">Rest, Relax, Unwind</p>
        <p className="medium-headilne">Embrace your choices - we do</p>
        <Button linkPath="/product" isClass={true}>
          Shop now
        </Button>
      </div>
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
