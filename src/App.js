import "@fontsource/andada-pro"; 
import './App.css';
import { BrowserRouter,Routes, Route } from "react-router-dom";
import HomePage from "./components/homepage/homePage";
import SignUp from "./components/signup/signUp";
import LogIn from "./components/login/logIn";


import { ThemeProvider } from "@material-tailwind/react";

function App() {
  return (
    <ThemeProvider>
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<HomePage/>} /> 
          <Route path="/signup" exact element={<SignUp/>} /> 
          <Route path="/login" exact element={<LogIn/>} /> 
        </Routes>
      </BrowserRouter>
    </div>
    </ThemeProvider>

  );
}

export default App;
