import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 8000;

// Serve everything in the project root (CSS, JS, assets, etc.)
app.use(express.static(__dirname));

// Always serve index.html for the root
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.htm"));
});

app.listen(PORT, () => {
  console.log(`🚀 Local server running at: http://127.0.0.1:${PORT}`);
});
