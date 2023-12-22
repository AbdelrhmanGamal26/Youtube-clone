import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import logo from "../media/youtube.png";

import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Header.module.css";
import SignInButton from "./SignInButton";

const Header = () => {
  return (
    <header
      className={`${styles.header} d-flex justify-content-between align-items-center bg-black w-100`}
    >
      <Link to={"/"} className="d-flex align-items-center text-decoration-none">
        <img className={`${styles.logo} me-1`} src={logo} alt="logo" />
        <h4 className="text-light m-0 fw-bold">Youtube</h4>
      </Link>
      <form className="w-50">
        <input
          className="w-75 ms-5 px-4 py-2 border rounded-pill bg-transparent text-light"
          type="text"
          placeholder="Search"
        />
        <button
          className={`${styles.search} border-0 bg-transparent`}
          type="submit"
        >
          <FontAwesomeIcon icon={faSearch} style={{ color: "#ffffff" }} />
        </button>
      </form>
      <SignInButton />
    </header>
  );
};

export default Header;
