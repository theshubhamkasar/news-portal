import { useState } from "react";
import { Navbar } from "./Components/Navbar";
import { NewsBoard } from "./Components/NewsBoard";
import "./App.css";

function App() {
  const [category, setCategory] = useState("home");

  return (
    <div className="App">
      <Navbar setCategory={setCategory} />
      <NewsBoard category={category} />
    </div>
  );
}

export default App;
