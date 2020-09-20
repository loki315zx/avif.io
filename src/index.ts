import express from "express";
import serveStatic from "serve-static";
import path from "path";

const app = express();

app.get("/", (_, res) => {
  res.sendFile(path.join(__dirname, "..", "www", "index.html"));
});

app.use(serveStatic(path.join(__dirname, "..", "public")));
app.use(serveStatic(path.join(__dirname, "..", "www", "dist")));
app.use(serveStatic(path.join(__dirname, "..", "www", "static")));
app.listen(8080);
