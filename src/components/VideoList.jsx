import thumbnail from "../media/thumbnail.png";

import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./VideoList.module.css";

const VideoList = () => {
  return (
    <div className={`${styles.videosList} w-25 bg-black`}>
      <ul>
        {[...Array(12)].map((_, idx) => (
          <li key={idx}>
            <div
              className={`${styles.thumbnailContainer} d-flex align-items-center mb-2`}
            >
              <div className={`${styles.thumbnailOverlay}`}>
                <img
                  className={`${styles.thumbnail} w-100`}
                  src={thumbnail}
                  alt="thumbnail"
                />
              </div>
              <div className={`${styles.thumbnailInfo}`}>
                <p className={`${styles.title} m-0 text-white`}>
                  Flamelurker theme from Demon's souls
                </p>
                <p className={`${styles.author} m-0 text-white-50`}>
                  Mighty Eagle
                </p>
                <p className={`${styles.views} m-0 text-white-50`}>
                  560,495 views . 1 month ago
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VideoList;
