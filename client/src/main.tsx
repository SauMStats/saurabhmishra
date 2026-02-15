import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import "./styles/dark-mode.css";         // ← ADD THIS LINE for darkmode 15th Feb

createRoot(document.getElementById("root")!).render(<App />);
