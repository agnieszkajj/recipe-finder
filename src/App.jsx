import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import SingleMeal from "./pages/SingleMeal.jsx";
import Error from "./pages/Error.jsx";
import Navbar from "./components/Navbar.jsx";
function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="about" element={<About></About>}></Route>
        <Route path="/meals/:id" element={<SingleMeal></SingleMeal>}></Route>
        <Route path="*" element={<Error></Error>}></Route>
      </Routes>
    </>
  );
}

export default App;
