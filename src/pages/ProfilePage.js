import { useAuth } from "contexts/AuthContext";
import { useLogin } from "custom-hooks";

export const ProfilePage = () => {
  const { user } = useAuth();
  const { logoutHandler } = useLogin();
  return (
    <>
      <main className="profile-content form-content full-wd grid-ctr m-auto p-v-5">
        <h2 className="title colored-text h1 m-v-2">
          <span className="circle"></span>
          Profile
        </h2>
        <div className="form-card w-40rm col-flex">
          <ul className="card left-text no-bullet row-flex text-wrap box-shd w-40rm p-h-2 p-v-4">
            <li className="w-95p m-b-2">
              <strong className="m-r-1">First name:</strong>
              {user?.firstName}
            </li>
            <li className="w-95p m-b-2">
              <strong className="m-r-1">Last name:</strong>
              {user?.lastName}
            </li>
            <li className="w-95p m-b-2">
              <strong className="m-r-1">Email:</strong>
              {user?.email}
            </li>
            <button className="btn primary-btn centered-text w-95p m-h-1" onClick={() => logoutHandler()}>
              <span>Logout</span>
            </button>
          </ul>
        </div>
      </main>
    </>
  );
};
