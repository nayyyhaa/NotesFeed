import { Link } from "react-router-dom";
import noteImage from "toolkit/assets/noting.svg";
export const Homepage = () => {
  return (
    <header className="site-header row-flex p-t-3 p-h-1">
      <div className="introduction m-h-2 m-t-3">
        <h1 className="title lg-text">
          Welcome to <span className="colored-text lg-text bg h1 text-stroke">NotesFeed!</span>
        </h1>
        <p className="h3 m-v-3">
          Your <span className="colored-text h3">modern</span> note-taking app.
        </p>
        <p>Manage your daily tasks & workflow in modern way to boost your efficiency without any effort.</p>
        <Link to="/notesfeed">
          <button className="btn primary-btn m-v-2">Start Note-ing!</button>
        </Link>
      </div>
      <img className="site-img" src={noteImage} alt="mindfulness" />
    </header>
  );
};
