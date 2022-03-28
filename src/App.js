import { Routes, Route } from "react-router-dom";
import { Footer, Navbar } from "components";
import { Homepage } from "pages";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
