import "./App.css";
import { Routes, Route } from "react-router-dom";
import { SearchPage } from "./Pages/SearchPage";
import { Answers } from "./Pages/Answers/Answers";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SearchPage />}></Route>
      <Route path="/posts:id" element={<Answers />} />
    </Routes>
  );
}

export default App;
