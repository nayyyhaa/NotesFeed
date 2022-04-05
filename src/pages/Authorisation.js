import { SignupForm, LoginForm } from "components";
import { useLocation } from "react-router-dom";

export const Authorisation = () => {
  let location = useLocation();
  return (
    <>
      <main className="login-content full-wd grid-ctr m-auto p-h-2 p-v-5">
        <h2 className="title colored-text h1 m-v-2">
          <span className="circle"></span>
          {(location.pathname === "/login" ? "LOGIN" : "SIGN UP")}
        </h2>

        {(location.pathname === "/login" ? <LoginForm /> : <SignupForm />)}
      </main>
    </>
  );
};
