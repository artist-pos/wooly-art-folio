import express, { type Express } from "express";
import fs from "fs";
import path from "path";
import { createServer as createViteServer } from "vite";
import { createServer as createHttpServer } from "http";

export function log(message: string) {
  const formattedTime = new Date().toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  console.log(`${formattedTime} [express] ${message}`);
}

export async function setupVite(app: Express) {
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: "custom",
  });

  app.use(vite.middlewares);

  app.use((req, res, next) => {
    const url = req.originalUrl;

    if (req.method !== 'GET' || url.startsWith('/api')) {
      return next();
    }

    const clientTemplate = path.resolve(
      process.cwd(),
      "client",
      "index.html",
    );
    
    try {
      let template = fs.readFileSync(clientTemplate, "utf-8");
      vite.transformIndexHtml(url, template).then(html => {
        res.status(200).set({ "Content-Type": "text/html" }).end(html);
      }).catch(e => {
        vite.ssrFixStacktrace(e as Error);
        next(e);
      });
    } catch (e) {
      vite.ssrFixStacktrace(e as Error);
      next(e);
    }
  });

  const httpServer = createHttpServer(app);
  return httpServer;
}

export function serveStatic(app: Express) {
  const distPath = path.resolve(process.cwd(), "dist", "public");

  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`,
    );
  }

  app.use(express.static(distPath));

  app.use((_req, res) => {
    res.sendFile(path.resolve(distPath, "index.html"));
  });
}
