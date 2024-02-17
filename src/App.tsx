import LandingPage from "./pages/LandingPage";
import NotFoundPage from "./pages/NotFoundPage";
import LoginPage from "./pages/LoginPage";
import { ProtectedRoute } from "./components/auth/ProtectedRoute";
import { Routes, Route } from "react-router-dom";

function App(): JSX.Element {
  return (
    <>
      <Routes>
        <Route element={<ProtectedRoute isAllowed={true} redirectTo="/home" />}>
          <Route path="/login" element={<LoginPage />} />
        </Route>

        <Route path="/" element={<LandingPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
