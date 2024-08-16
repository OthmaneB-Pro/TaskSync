import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./components/pages/login/LoginPage";
import ErrorPage from "./components/pages/error/ErrorPage";
import InterfacePage from "./components/pages/interfaceMain/InterfacePage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"*"} element={<ErrorPage />} />
        <Route path={"/"} element={<LoginPage />} />
        <Route path={"/interface/:username"} element={<InterfacePage />} />

      </Routes>
    </BrowserRouter>
  );
}
