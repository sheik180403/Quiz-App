import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Question from "./components/Question";

function App() {
  return (
    <>
      <Header />
      <main className="flex justify-center mt-5">
        <Question />
      </main>
    </>
  );
}

export default App;
