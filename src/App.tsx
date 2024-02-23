import LandingPage from "./pages/LandingPage";
import NotFoundPage from "./pages/NotFoundPage";
import LoginPage from "./pages/LoginPage";
import Home from "./pages/HomePage";
import { ProtectedRoute } from "./components/auth/ProtectedRoute";
import { Routes, Route } from "react-router-dom";
import { useAuth } from "./hooks/useAuth";
import { useSelector } from "react-redux";

function App(): JSX.Element {
  const { isAuth } = useAuth();
  const { theme } = useSelector((state: any) => state.theme);

  return (
    <div data-theme={theme}>
      <Routes>
        {/* logueado */}
        <Route
          element={<ProtectedRoute isAllowed={!isAuth} redirectTo="/home" />}
        >
          <Route path="/auth" element={<LoginPage />} />
        </Route>

        {/* no logueado */}
        <Route
          element={<ProtectedRoute isAllowed={isAuth} redirectTo="/auth" />}
        >
          <Route path="/home" element={<Home />} />
        </Route>
        <Route path="/" element={<LandingPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
