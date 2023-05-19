import { Route, Routes } from "react-router-dom";
import Home from "../../Pages/Home";
import Write from "../../Pages/Write.jsx";
import Tables from "../../Pages/Tables.jsx";
import Options from "../../Pages/Options.jsx";
import About from "../../Pages/About.jsx";

export const pages = [Write, Tables, Options, About];

export function Public() {
  const renderRoutes = (array) => {
    return array.map((a, i) => {
      return (
        <Route
          key={a().props.children + i}
          path={`/${a().props.children}`}
          element={a()}
        ></Route>
      );
    });
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        {renderRoutes(pages)}
      </Routes>
    </>
  );
}
