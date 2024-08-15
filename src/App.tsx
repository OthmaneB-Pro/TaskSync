import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./components/pages/login/LoginPage";
import LoginForm from "./components/pages/login/WelcomePage";
import InscriptionForm from "./components/pages/login/inscriptionForm/InscriptionForm"

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path={"/login"} element={<LoginPage/>} />
      <Route path={"/login/inscriptionForm"} element={<InscriptionForm/>} />
      <Route path={"/login/loginForm"} element={<LoginForm/>} />

      </Routes>
    </BrowserRouter>
  );
}

