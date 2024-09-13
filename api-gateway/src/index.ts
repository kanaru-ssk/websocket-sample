import { createProxyMiddleware } from "http-proxy-middleware";
import express from "express";
import http from "http";

const app: express.Express = express();

const collaborationWsProxy = createProxyMiddleware({
  target: process.env.COLLABORATION_URL,
  ws: true,
  changeOrigin: true,
  xfwd: true,
});

app.use("/api/collaboration", collaborationWsProxy);

const server = http.createServer(app);
server.listen(Number(process.env.PORT), "0.0.0.0");
