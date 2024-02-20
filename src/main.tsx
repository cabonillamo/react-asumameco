import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "./index.css";
import { AuthProvider } from "./context/provider/AuthProvider";
import { ToastContainer } from "react-toastify";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement || document.createElement("div"));

root.render(
  <Router>
    <AuthProvider>
      <ToastContainer />
      <App />
    </AuthProvider>
  </Router>
);
