import VideoPlayer from "../../components/VideoPlayer";
import VideoInfo from "../../components/VideoInfo";
import VideoList from "../../components/VideoList";

import "bootstrap/dist/css/bootstrap.min.css";

const WatchPage = () => {
  return (
    <div className="w-100 bg-black d-flex px-5 py-3">
      <div className="w-75 bg-black">
        <VideoPlayer />
        <VideoInfo />
      </div>
      <VideoList />
    </div>
  );
};

export default WatchPage;
