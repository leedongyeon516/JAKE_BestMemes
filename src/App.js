import React from "react";
import Form from "./components/Form";
import ImageGrid from "./components/ImageGrid";
import "./App.css";
import "./index.css";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="App">
      <Hero />
      <Form />
      <ImageGrid />
    </div>
  );
}

export default App;
