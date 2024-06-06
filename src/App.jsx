import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import NewPost from "./pages/NewPost.jsx";
import SamplePosts from "./pages/SamplePosts.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
      <Route path="/new-post" element={<NewPost />} />
      <Route path="/sample-posts" element={<SamplePosts />} />
      </Routes>
    </Router>
  );
}

export default App;
