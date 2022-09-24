import {BrowserRouter} from "react-router-dom";
import Navbar from './components/Navbar';
import MainRoutes from "./routes/MainRoutes";

function App() {
  return (

      <BrowserRouter>
        <Navbar/>
        <MainRoutes/>
      </BrowserRouter>
  );
}

export default App;
