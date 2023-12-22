import { Link } from "react-router-dom";

import thumbnail from "../media/thumbnail.png";
import avatar from "../media/avatar.jpg";

import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Video.module.css";

const Video = ({ videoId }) => {
  return (
    <Link
      to={{ pathname: `watch/${videoId}` }}
      className={`${styles.video} col-4 mb-3 text-decoration-none`}
    >
      <div className={`${styles.image}`}>
        <img src={thumbnail} alt="thumbnail" />
      </div>
      <div className={`${styles.info} d-flex align-items-start`}>
        <div className={`${styles.avatar} me-3`}>
          <img src={avatar} alt="avatar" />
        </div>
        <div className={`${styles.text} text-white-50`}>
          <p className={`${styles.title} m-0 fw-bold text-white`}>
            Flamelurker theme from Demon's souls
          </p>
          <p className={`${styles.author} m-0`}>Mighty Eagle</p>
          <p className={`${styles.views} m-0`}>560,495 views . 1 month ago</p>
        </div>
      </div>
    </Link>
  );
};

export default Video;
