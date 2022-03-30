import { Routes, Route } from "react-router-dom";
import { Footer, Navbar } from "components";
import { Homepage, NotesFeed } from "pages";
import { useUser } from "contexts/UserContext";

function App() {
  const { user } = useUser();
  return (
    <div className={user.isDark ? "dark" : ""}>
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
