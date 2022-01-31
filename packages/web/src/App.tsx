import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Landing } from "./routes/Landing";
import { About } from "./routes/About";
import './App.css'

export default () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};
