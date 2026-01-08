import { Link } from "react-router";

const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        padding: "20px",
      }}
    >
      <Link to={"/home"}>
        <div style={{ cursor: "pointer", fontSize: "large" }}>Home</div>
      </Link>
      <Link to={"/product"}>
        <div style={{ cursor: "pointer", fontSize: "large" }}>Product</div>
      </Link>
      <Link to={"/about"}>
        <div style={{ cursor: "pointer", fontSize: "large" }}>About</div>
      </Link>
      <Link to={"/contact"}>
        <div style={{ cursor: "pointer", fontSize: "large" }}>Contact</div>
      </Link>
      <Link to={"/profile"}>
        <div style={{ cursor: "pointer", fontSize: "large" }}>Profile</div>
      </Link>
    </div>
  );
};

export default Navbar;
