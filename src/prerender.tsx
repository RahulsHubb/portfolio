// ✅ Correct — use the Node-specific server import
import { renderToStaticMarkup } from "react-dom/server.node";
import App from "./App";

export async function prerender() {
  const html = renderToStaticMarkup(<App />);
  return { html };
}