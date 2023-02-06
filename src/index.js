import React from "react";
import { createRoot } from 'react-dom/client';
// import App from "./app/components/App.jsx";
import Container from "./app/components/container/Container.jsx";

const rootElement = document.getElementById("root");

const root = createRoot(rootElement);
root.render(<Container />);
