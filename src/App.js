import { Routes, Route } from "react-router-dom";
import { Footer, Navbar, Toast } from "components";
import { Homepage, NotesFeed } from "pages";
import { useUser } from "contexts/UserContext";
import { useToast } from "contexts/ToastContext";
import { usePageViewTracker } from "toolkit/utils";

function App() {
  const { user } = useUser();
  const { toast } = useToast();
  const { state, msg } = toast;

  usePageViewTracker();
  
  return (
    <div className={user.isDark ? "dark" : ""}>
      <Toast state={state} msg={msg} />
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/notesfeed" element={<NotesFeed />} />
        <Route path="/labelfeed" element={<NotesFeed />} />
        <Route path="/deletedfeed" element={<NotesFeed />} />
        <Route path="/archivesfeed" element={<NotesFeed />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
