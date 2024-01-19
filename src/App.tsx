import loadable from "@loadable/component";
import { Route, Routes } from "react-router-dom";

const HomePage = loadable(() => import("./page/HomePage"));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} loader={HomePage.load} />
      </Routes>
    </>
  );
}

export default App;
