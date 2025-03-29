import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import App from "../pages/login-page/index";
import TelaDois from "../pages/home/TelaDois";

const RouteList = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/login-page" element={<App />} />
                <Route path="/home" element={<TelaDois />} />
                <Route path="*" element={<Navigate to="/login-page" replace />} />
            </Routes>
        </BrowserRouter>
    );
}

export default RouteList;