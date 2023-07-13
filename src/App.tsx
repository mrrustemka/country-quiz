import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Start from "./components/Start";
import Question from "./components/Question";
import Finish from "./components/Finish";
import NotFound from "./components/NotFound";
// import { ICountries } from "./components/countries";
import "./App.css";
import Test from "./components/Test";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/start" element={<Start />} />
            <Route path="/question" element={<Question />} />
            <Route path="/finish" element={<Finish />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Test />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
