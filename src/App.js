import "@fontsource/andada-pro"; 
import './App.css';
import { BrowserRouter,Routes, Route } from "react-router-dom";
import HomePage from "./components/homePage";


import { ThemeProvider } from "@material-tailwind/react";

function App() {
  return (
    <ThemeProvider>
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<HomePage/>} /> 
        </Routes>
      </BrowserRouter>
    </div>
    </ThemeProvider>

  );
}

export default App;
