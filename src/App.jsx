import { BrowserRouter } from "react-router-dom";
import { Public } from "./Routes/Public/Public";
import ContextProvider from "./Context/Context/ContextProvider";
import NavBar from "./Components/NavBar/NavBar";

function App() {
  return (
    <>
      <ContextProvider>
        <BrowserRouter>
          <NavBar></NavBar>
          <Public> </Public>
        </BrowserRouter>
      </ContextProvider>
    </>
  );
}

export default App;
