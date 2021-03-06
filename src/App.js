import { Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Dashborard from "./components/Dashborard/Dashborard";
import Header from "./components/Header/Header";
import Reviews from "./components/Reviews/Reviews";
import Blogs from "./components/Blogs/Blogs";
import Home from "./components/Home/Home";
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="home" element={<Home></Home>}></Route>
        <Route path="reviews" element={<Reviews></Reviews>}></Route>
        <Route path="dashboard" element={<Dashborard></Dashborard>}></Route>
        <Route path="blogs" element={<Blogs></Blogs>}></Route>
        <Route path="about" element={<About></About>}></Route>
      </Routes>
    </div>
  );
}

export default App;
