import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from "./pages/index";
import Final from "./pages/finalPath";
import Loading from "./pages/loading";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/loading" element={<Loading />} />
        <Route path="/final" element={<Final />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
