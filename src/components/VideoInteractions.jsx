import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import { faShare } from "@fortawesome/free-solid-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./VideoInteractions.module.css";

const VideoInteractions = () => {
  return (
    <ul
      className={`${styles.interactions} d-flex justify-content-between align-items-center`}
    >
      <li className="d-flex align-items-center me-3">
        <FontAwesomeIcon className="text-white me-2" icon={faThumbsUp} />
        <span className="text-white">123</span>
      </li>
      <li className="d-flex align-items-center me-3">
        <FontAwesomeIcon className="text-white me-2" icon={faThumbsDown} />
        <span className="text-white">Dislike</span>
      </li>
      <li className="d-flex align-items-center me-3">
        <FontAwesomeIcon className="text-white me-2" icon={faShare} />
        <span className="text-white">Share</span>
      </li>
      <li className="d-flex align-items-center me-3">
        <FontAwesomeIcon className="text-white me-2" icon={faDownload} />
        <span className="text-white">Save</span>
      </li>
    </ul>
  );
};

export default VideoInteractions;
