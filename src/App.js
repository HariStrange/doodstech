// import Header from './Components/Header/head
// er';
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Components/main";

function App() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      offset: 50,
      once: false,
    });
    const handleScroll = () => {
      Aos.refresh();
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
