import Comments from "./Comments";
import Description from "./Description";
import avatar from "../media/avatar.jpg";

import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./VideoInfo.module.css";
import VideoInteractions from "./VideoInteractions";

const VideoInfo = () => {
  return (
    <div className={`${styles.videoInfo} bg-black`}>
      <h5 className={`${styles.title} text-light`}>
        Flamelurker theme from Demon's souls
      </h5>
      <div className="d-flex justify-content-between align-items-center border-bottom border-secondary">
        <p className={`${styles.views} w-100 text-white-50 mb-3 pb-1`}>
          560,495 views . 1 month ago
        </p>
        <VideoInteractions />
      </div>
      <div
        className={`${styles.authorContainer} d-flex align-items-center mt-4`}
      >
        <div className="d-flex align-items-center justify-content-between w-100">
          <div className="d-flex">
            <div className={`${styles.avatar} me-2`}>
              <img src={avatar} alt="avatar" />
            </div>
            <div>
              <p className={`${styles.author} text-light mb-0 fw-bold`}>
                Mighty Eagle
              </p>
              <p className={`${styles.subs} text-light mb-0 text-white-50`}>
                682k subscribers
              </p>
            </div>
          </div>
          <div>
            <button className="btn btn-danger me-3">Subscribe</button>
          </div>
        </div>
      </div>
      <Description />
      <Comments />
    </div>
  );
};

export default VideoInfo;
