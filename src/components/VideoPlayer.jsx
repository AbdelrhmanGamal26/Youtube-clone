import "bootstrap/dist/css/bootstrap.min.css";

const VideoPlayer = () => {
  return (
    <div className="w-100 mb-3">
      <video width={"100%"} height={"100%"} controls={true}>
        <source
          src="/videos/Demon's Souls Remake - Flamelurker (OST).mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
};

export default VideoPlayer;
