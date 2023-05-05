import { BrowserRouter } from "react-router-dom"
import './App.css';
import BestSellers from "./Components/Pages/BestSellers";
import { AllRoutes } from "./Components/Routes/AllRoutes";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <BestSellers />
        {/* <AllRoutes /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
