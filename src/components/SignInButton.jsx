import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./SignInButton.module.css";

const SignInButton = () => {
  return (
    <Link
      to={"/auth"}
      className={`${styles.auth} btn border-secondary rounded-pill`}
    >
      <FontAwesomeIcon icon={faUser} style={{ color: "#3EA6FF" }} />
      <span className="ms-2">sign in</span>
    </Link>
  );
};

export default SignInButton;
