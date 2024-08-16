import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./components/pages/login/LoginPage";
import ErrorPage from "./components/pages/error/ErrorPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"*"} element={<ErrorPage />} />
        <Route path={"/"} element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}
