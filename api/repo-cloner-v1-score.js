"use strict";

// Sends one repo summary to the shared server and returns Claude's reskin verdict.
const SHARED = (process.env.SHARED_SERVER_URL || "").replace(/\/+$/, "");

module.exports = async function handler(req, res) {
  res.setHeader("content-type", "application/json");
  if (req.method === "GET") {
    return res.status(200).json({ ok: true, name: "repo-cloner-v1", shared: Boolean(SHARED) });
  }
  if (req.method !== "POST") return res.status(405).json({ error: "method" });
  if (!SHARED) return res.status(503).json({ error: "SHARED_SERVER_URL is not set on this Vercel project" });
  try {
    let body = req.body;
    if (typeof body === "string") body = JSON.parse(body || "{}");
    const text = String((body && body.text) || "").slice(0, 60000);
    if (!text) return res.status(400).json({ error: "no text" });
    const r = await fetch(SHARED + "/api/shared-server-v1-claude", {
      method: "POST",
      headers: { "content-type": "application/json", "x-forwarded-for": String(req.headers["x-forwarded-for"] || "") },
      body: JSON.stringify({ app: "repo-cloner-score", text: text })
    });
    const data = await r.json().catch(() => ({ error: "bad reply from shared server" }));
    return res.status(r.status).json(data);
  } catch (e) {
    return res.status(500).json({ error: "repo cloner score failed" });
  }
};
