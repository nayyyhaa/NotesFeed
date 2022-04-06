import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import { useLogin } from "custom-hooks";

export const SignupForm = () => {
  const [form, setForm] = useState({ email: "", password: "", firstName: "", lastName: "" });
  const [checkFormValidity, setFormValid] = useState(false);
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const { signupHandler } = useLogin();
  const formRef = useRef();

  const validateForm = (e) => {
    e.preventDefault();
    setFormValid(true);
    if (formRef.current.checkValidity()) {
      signupHandler(e, form.email, form.password, form.firstName, form.lastName);
    }
  };
  return (
    <>
      <form
        className={`card form-card left-text row-flex text-wrap box-shd w-40rm p-h-1 p-v-2 m-2 ${
          checkFormValidity ? "form-validated" : ""
        }`}
        noValidate
        ref={formRef}
        onSubmit={(e) => validateForm(e)}
      >
        <div className="field col-flex w-95p">
          <label className="m-v-1" htmlFor="fname">
            FIRST NAME<span className="mandatory-field">*</span>
          </label>
          <input
            type="text"
            className="input p-07"
            id="fname"
            required
            onChange={(e) => setForm((prev) => ({ ...prev, firstName: e.target.value }))}
          />
          <small className="form-validation-msg success-msg green-text">
            <i className="fa fa-check-circle-o" aria-hidden="true"></i>Valid field
          </small>
          <small className="form-validation-msg error-msg red-text">
            <i className="fa fa-exclamation-circle" aria-hidden="true"></i>Please enter valid input
          </small>
        </div>
        <div className="field col-flex w-95p">
          <label className="m-v-1" htmlFor="lname">
            LAST NAME<span className="mandatory-field">*</span>
          </label>
          <input
            type="text"
            className="input p-07"
            id="lname"
            required
            onChange={(e) => setForm((prev) => ({ ...prev, lastName: e.target.value }))}
          />
          <small className="form-validation-msg success-msg green-text">
            <i className="fa fa-check-circle-o" aria-hidden="true"></i>Valid field
          </small>
          <small className="form-validation-msg error-msg red-text">
            <i className="fa fa-exclamation-circle" aria-hidden="true"></i>Please enter valid input
          </small>
        </div>
        <div className="field col-flex w-95p">
          <label className="m-v-1" htmlFor="email">
            EMAIL<span className="mandatory-field">*</span>
          </label>
          <input
            type="email"
            className="input p-07"
            id="email"
            required
            onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
          />
          <small className="form-validation-msg success-msg green-text">
            <i className="fa fa-check-circle-o" aria-hidden="true"></i>Valid field
          </small>
          <small className="form-validation-msg error-msg red-text">
            <i className="fa fa-exclamation-circle" aria-hidden="true"></i>Please enter valid email
          </small>
        </div>
        <div className="field col-flex w-95p">
          <label className="m-v-1" htmlFor="upassword">
            PASSWORD<span className="mandatory-field">*</span>
          </label>
          <input
            type={isPasswordVisible ? `text` : `password`}
            className="input p-07"
            id="upassword"
            required
            onChange={(e) => setForm((prev) => ({ ...prev, password: e.target.value }))}
          />
          <span className="eye-icon cursor p-h-1" onClick={() => setPasswordVisible((prev) => !prev)}>
            <i className={`fa fa-eye${!isPasswordVisible ? "-slash" : ""}`} aria-hidden="true"></i>
          </span>
          <small className="form-validation-msg success-msg green-text">
            <i className="fa fa-check-circle-o" aria-hidden="true"></i>Valid field
          </small>
          <small className="form-validation-msg error-msg red-text">
            <i className="fa fa-exclamation-circle" aria-hidden="true"></i>Please enter valid input
          </small>
        </div>
        <div className="field full-wd m-1">
          <input className="checkbox-input m-r-1" type="checkbox" id="terms" />
          <label className="m-v-1" htmlFor="terms">
            Recieve e-mail regarding discounts?
          </label>
        </div>
        <button type="submit" className="btn primary-btn w-95p m-1">
          <span>SIGN UP</span>
        </button>
      </form>
      <p className="m-b-2">
        Already a member?{" "}
        <Link to="/login" className="cursor colored-text">
          Login here
        </Link>
      </p>
    </>
  );
};
