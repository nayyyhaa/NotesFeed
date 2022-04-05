export const Footer = () => {
  return (
    <footer className="page-footer p-3 row-flex no-wrap">
      <div className="contact-socials m-v-1 m-r-3">
        <a className="icon-btn footer-icon sub-heading p-1" href="mailto:nehaguptang.ng@gmail.com">
          <i className="fa fa-envelope" title="envelope" alt="envelope"></i>
        </a>
        <a className="icon-btn footer-icon sub-heading p-1" href="https://www.github.com/nayyyhaa">
          <i className="fa fa-github" title="github" alt="github"></i>
        </a>
        <a className="icon-btn footer-icon sub-heading p-1" href="https://www.twitter.com/nayyyhaa">
          <i className="fa fa-twitter" title="twitter" alt="twitter"></i>
        </a>
        <a className="icon-btn footer-icon sub-heading p-1" href="https://www.instagram.com/nehacode">
          <i className="fa fa-instagram" title="instagram" alt="instagram"></i>
        </a>
      </div>
      <p>Made with ❤️ by Neha Gupta</p>
    </footer>
  );
};
