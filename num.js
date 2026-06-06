// pages/api/search.js
import fetch from "node-fetch";

export default async function handler(req, res) {
  try {
    const query = req.query.mobile || "";

    // Original API ko fetch karo
    const response = await fetch(
      `https://3d70470a5b4992bb-13-61-12-139.serveousercontent.com/search?mobile=${encodeURIComponent(query)}`
    );

    const data = await response.text();

    // HTML response bhejna
    res.setHeader("Content-Type", "text/html");
    res.send(`
      <html>
        <head>
          <title>Anon Secz</title>
        </head>
        <body>
          <pre>${data}</pre>

          <p>api by Anon Secz</p>
          <p>We are Anonymous.<br>
          We are Legion.<br>
          We do not forgive.<br>
          We do not forget.<br>
          Expect us.</p>

          <img src="/logo.png" alt="Logo" width="250"/>
        </body>
      </html>
    `);
  } catch (err) {
    res.status(500).send(`Error: ${err.message}`);
  }
}
