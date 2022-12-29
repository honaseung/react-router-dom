import { Route, Routes } from "react-router-dom";
import Red from "./components/Red";
import Blue from "./components/Blue";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/red" element={<Red />} />
        <Route path="/blue" element={<Blue />} />
      </Routes>
    </div>
  );
}

export default App;
