import { Routes, Route } from "react-router-dom";
import { Footer, Navbar, Toast } from "components";
import { Homepage, NotesFeed, Authorisation, ProfilePage, PageNotFound } from "pages";
import { useUser } from "contexts/UserContext";
import { useToast } from "contexts/ToastContext";
import { usePageViewTracker } from "toolkit/utils";
import Mockman from "mockman-js";
import { PrivateRoute } from "routes/PrivateRoute";
import { useNote } from "contexts/NoteContext";
import { useAsync } from "custom-hooks";

function App() {
  const { user } = useUser();
  const { toast } = useToast();
  const { state, msg } = toast;
  let { dispatchNote } = useNote();

  usePageViewTracker();

  return (
    <div className={user.isDark ? "dark" : ""}>
      <Toast state={state} msg={msg} />
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Authorisation />} />
        <Route path="/signup" element={<Authorisation />} />
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/notesfeed" element={<NotesFeed />} />
          <Route path="/label-feed" element={<NotesFeed />} />
          <Route path="/deleted-feed" element={<NotesFeed />} />
          <Route path="/archives-feed" element={<NotesFeed />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Route>
        <Route path="/mockman" element={<Mockman />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
