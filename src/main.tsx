import { createRoot } from "@veltra/app";
import { App } from "./App";

import "./main.css";

// console.log(document.getElementById("app"));

createRoot(document.getElementById("root")!, <App />);
