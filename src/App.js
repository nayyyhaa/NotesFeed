import { Routes, Route } from "react-router-dom";
import { Footer, Navbar } from "components";
import { Homepage, NotesFeed } from "pages";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/notesfeed" element={<NotesFeed />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
