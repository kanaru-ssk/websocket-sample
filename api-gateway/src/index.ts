import { createProxyMiddleware } from "http-proxy-middleware";
import express from "express";
import http from "http";

const app: express.Express = express();

const collaborationWsProxy = createProxyMiddleware({
  target: process.env.COLLABORATION_URL,
  ws: true,
  changeOrigin: true,
  xfwd: true,
  logger: console,
  on: {
    proxyReq: (proxyReq, req, res) => {
      console.log("proxyReq:proxyReq", proxyReq);
      console.log("proxyReq:req", req);
      console.log("proxyReq:res", res);
    },
    proxyRes: (proxyRes, req, res) => {
      console.log("proxyRes:proxyReq", proxyRes);
      console.log("proxyRes:req", req);
      console.log("proxyRes:res", res);
    },
    error: (err, req, res) => {
      console.log("error:proxyReq", err);
      console.log("error:req", req);
      console.log("error:res", res);
    },
  },
});

app.use("/api/collaboration", collaborationWsProxy);

const server = http.createServer(app);
server.listen(Number(process.env.PORT), "0.0.0.0");
