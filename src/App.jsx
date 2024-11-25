import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import MainMenu from "./components/MainMenu";
import ToDo from "./components/ToDo";
import Notepad from "./components/notepad";
import Scheduler from "./components/Scheduler";
import QRCodeGenerator from './components/QRCodeGenerator';



const App = () => {
  return (
    <Router>
      {/* Render the Navbar once */}
      <Navbar />

      {/* Main Content */}
      <div className="min-h-screen bg-gray-100">
        <Routes>
          {/* Define the routes for each feature */}
          <Route path="/" element={<MainMenu />} />
          <Route path="/scheduler" element={<Scheduler />} />
          <Route path="/todo" element={<ToDo />} />
          <Route path="/notepad" element={<Notepad />} />
          <Route path="/feature4" element={<QRCodeGenerator/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
