import LandingPage from "./pages/LandingPage";
import NotFoundPage from "./pages/NotFoundPage";
import LoginPage from "./pages/LoginPage";
import Home from "./pages/HomePage";
import { ProtectedRoute } from "./components/auth/ProtectedRoute";
import { Routes, Route } from "react-router-dom";
import { useAuth } from "./hooks/useAuth";
import "react-toastify/dist/ReactToastify.css";

function App(): JSX.Element {
  const { isAuth } = useAuth();

  return (
    <>
      <Routes>
        {/* logueado */}
        <Route
          element={<ProtectedRoute isAllowed={!isAuth} redirectTo="/home" />}
        >
          <Route path="/login" element={<LoginPage />} />
        </Route>

        {/* no logueado */}
        <Route
          element={<ProtectedRoute isAllowed={isAuth} redirectTo="/login" />}
        >
          <Route path="/home" element={<Home />} />
        </Route>
        <Route path="/" element={<LandingPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
