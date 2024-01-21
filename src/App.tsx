import loadable from "@loadable/component";
import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";

const HomePage = loadable(() => import("./page/HomePage"));

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} loader={HomePage.load} />
      </Routes>
    </>
  );
}

export default App;
