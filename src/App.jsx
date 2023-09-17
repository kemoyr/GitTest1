import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import MainPage from "./components/MainPage/MainPage";
import About from "./components/About/About";
import Airplanes from "./components/Airplanes/Airplanes";


function App() {

  return (

    <>
    
      <NavBar/>

      <Routes>
        <Route
          path="/"
          element={<MainPage/>}
        />
        <Route
          path="/about"
          element={<About/>}
        />
        <Route
          path="/airplanes"
          element={<Airplanes/>}
        />
      </Routes>
    
    </>

  );
}

export default App;
