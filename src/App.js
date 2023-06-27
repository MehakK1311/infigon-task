import React from "react";
import { Route, Routes } from "react-router-dom";
import Settings from './pages/Settings'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Settings />} />
      </Routes>
    </>
  );
}

export default App;