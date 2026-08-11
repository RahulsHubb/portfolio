// ❌ Wrong — uses browser bundle which references document
import { renderToString } from "react-dom/server";

// ✅ Correct — use the Node-specific server import
import { renderToStaticMarkup } from "react-dom/server.node";
import React from "react";
import App from "./App";

export async function prerender() {
  const html = renderToStaticMarkup(<App />);
  return { html };
}