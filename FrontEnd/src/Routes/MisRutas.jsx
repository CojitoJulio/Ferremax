import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { Administration } from "../Components/Admin/Administration";
import { InitialPage } from "../Components/Tienda/InitialPage";


export const MisRutas = () => {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Navigate to={'/store'} />} />
        <Route path="/administration/*" element={<Administration />} />
        <Route path="/store/*" element={<InitialPage />} />
      </Routes>

    </BrowserRouter>
  )
}