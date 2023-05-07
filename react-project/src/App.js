import { BrowserRouter } from "react-router-dom"
import './App.css';
import BestSellers from "./Components/Pages/BestSellers";
import Navbar from "./Components/Navbar/Navbar";
import { AllRoutes } from "./Components/Routes/AllRoutes";
import PageContextProvider from "./Context/pageContext";
import { useState } from "react";

function App() {



  return (
    <div className="App">
      <PageContextProvider >
        <BrowserRouter>
          <AllRoutes />
        </BrowserRouter>
      </PageContextProvider>
    </div>
  );
}

export default App;
