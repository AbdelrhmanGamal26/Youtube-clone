import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./HomePage.module.css";
import Video from "../../components/Video";

const videoId = [...Array(16)];

const HomePage = () => {
  return (
    <div
      className={`${styles.container} m-0 bg-black w-100 d-flex flex-wrap gap-3`}
    >
      {videoId.map((_, idx) => (
        <Video key={Math.random()} videoId={idx} />
      ))}
    </div>
  );
};

export default HomePage;
