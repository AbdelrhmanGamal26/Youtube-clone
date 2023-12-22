import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faCompass } from "@fortawesome/free-solid-svg-icons";
import { faMoneyBill } from "@fortawesome/free-solid-svg-icons";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import { faVolleyball } from "@fortawesome/free-solid-svg-icons";
import { faGamepad } from "@fortawesome/free-solid-svg-icons";
import { faFilm } from "@fortawesome/free-solid-svg-icons";
import { faNewspaper } from "@fortawesome/free-solid-svg-icons";
import { faTv } from "@fortawesome/free-solid-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { faFlag } from "@fortawesome/free-solid-svg-icons";
import { faCircleQuestion } from "@fortawesome/free-solid-svg-icons";
import { faCircleHalfStroke } from "@fortawesome/free-solid-svg-icons";

import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Nav.module.css";
import NavList from "./NavList";
import SignInButton from "./SignInButton";

const list1 = [
  { 0: "Home", 1: faHouse },
  { 0: "Explore", 1: faCompass },
  { 0: "Subscriptions", 1: faMoneyBill },
];
const list2 = [
  { 0: "Library", 1: faBook },
  { 0: "History", 1: faClock },
];
const list3 = [
  { 0: "Music", 1: faMusic },
  { 0: "Sports", 1: faVolleyball },
  { 0: "Gaming", 1: faGamepad },
  { 0: "Movies", 1: faFilm },
  { 0: "News", 1: faNewspaper },
  { 0: "Live", 1: faTv },
];
const list4 = [
  { 0: "Settings", 1: faGear },
  { 0: "Report", 1: faFlag },
  { 0: "Help", 1: faCircleQuestion },
  { 0: "Light Mode", 1: faCircleHalfStroke },
];

const Nav = () => {
  return (
    <div className={`${styles.nav} bg-black px-4`}>
      <NavList items={list1} />
      <NavList items={list2} />
      <div className="border-bottom border-secondary py-3">
        <p className="text-light">
          Sign in to like videos, comment, and subscribe
        </p>
        <SignInButton />
      </div>
      <p className="text-light fw-bold fs-5 m-0 mt-3">Best of Youtube</p>
      <NavList items={list3} />
      <NavList items={list4} />
      <p className="text-light m-0 mt-3 mb-3">&copy;Youtube, 2023</p>
    </div>
  );
};

export default Nav;
