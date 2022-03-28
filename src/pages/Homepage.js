import noteImage from "toolkit/assets/noting.svg";
export const Homepage = () => {
  return (
    <>
      <header className="site-header row-flex p-t-3 p-h-1 m-b-5">
        <div className="introduction m-h-1">
          <h1 className="title lg-text">
            Welcome to <span className="colored-text lg-text bg h1 text-stroke">Note it!</span>
          </h1>
          <p className="description h3 m-t-3">Find how much you are in touch with your mind & soul.</p>
          <a href="#categories">
            <button className="btn primary-btn m-v-2">Start Note-ing!</button>
          </a>
        </div>
        <img className="site-img" src={noteImage} alt="mindfulness" />
      </header>
    </>
  );
};
