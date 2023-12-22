import avatar from "../media/avatar.jpg";

import styles from "./Comments.module.css";

const Comments = () => {
  return (
    <div>
      <div className="d-flex align-items-center mt-4">
        <div className={`${styles.avatar} me-2`}>
          <img src={avatar} alt="avatar" />
        </div>
        <input
          className="border-0 border-bottom border-secondary bg-transparent p-2 w-25"
          type="text"
          placeholder="Add a comment"
        />
      </div>
      <ul className="p-0">
        {[...Array(5)].map((_, idx) => (
          <li key={idx}>
            <div className="d-flex align-items-center mt-4">
              <div className={`${styles.avatar} me-2`}>
                <img src={avatar} alt="avatar" />
              </div>
              <div>
                <span className="text-white me-2">Mohamed Hossam</span>
                <span className="text-white-50">2 days ago</span>
                <p className="text-white mb-0 mt-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nihil, possimus. Vitae maxime nulla similique, praesentium
                  magnam!
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Comments;
