import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "bootstrap/dist/css/bootstrap.min.css";

const NavList = ({ items }) => {
  return (
    <div className="border-bottom border-secondary">
      <ul className="text-light p-0">
        {items.map((item, idx) => (
          <li className="pt-2" key={idx} style={{ cursor: "pointer" }}>
            <FontAwesomeIcon icon={item[1]} style={{ color: "#ffffff" }} />
            <span className="ms-2">{item[0]}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavList;
