import server from './dist/server/index.js';
import { createServer } from 'node:http';
import { createReadStream, existsSync, statSync } from 'node:fs';
import { join, extname } from 'node:path';
const port = process.env.PORT || 3000;
const clientRoot = new URL('./dist/client', import.meta.url).pathname;
const mime = {'.css':'text/css','.js':'application/javascript','.mjs':'application/javascript','.png':'image/png','.jpg':'image/jpeg','.jpeg':'image/jpeg','.svg':'image/svg+xml','.ico':'image/x-icon','.woff':'font/woff','.woff2':'font/woff2','.ttf':'font/ttf','.json':'application/json','.mp4':'video/mp4','.webm':'video/webm','.html':'text/html','.webp':'image/webp'};
createServer(async (req, res) => {
  const urlPath = req.url.split('?')[0];
  const filePath = join(clientRoot, urlPath);
  const ext = extname(filePath);
  if (existsSync(filePath) && statSync(filePath).isFile()) {
    res.writeHead(200, {'Content-Type': mime[ext] || 'application/octet-stream'});
    createReadStream(filePath).pipe(res);
    return;
  }
  try {
    const url = new URL(req.url, `http://${req.headers.host}`);
    const request = new Request(url.toString(), {method: req.method, headers: Object.fromEntries(Object.entries(req.headers).filter(([_,v]) => v !== undefined))});
    const env = {ASSETS: {fetch: async (req) => {
      const u = new URL(req.url);
      const fp = join(clientRoot, u.pathname);
      if (existsSync(fp) && statSync(fp).isFile()) {
        const ext = extname(fp);
        const data = await import('node:fs/promises').then(fs => fs.readFile(fp));
        return new Response(data, {headers: {'Content-Type': mime[ext] || 'application/octet-stream'}});
      }
      return new Response('Not found', {status: 404});
    }}};
    const ctx = {waitUntil: () => {}, passThroughOnException: () => {}};
    const response = await server.fetch(request, env, ctx);
    const body = await response.arrayBuffer();
    res.writeHead(response.status, Object.fromEntries(response.headers.entries()));
    res.end(Buffer.from(body));
  } catch(e) {
    console.error(e);
    res.writeHead(500);
    res.end('Server error: ' + e.message);
  }
}).listen(port, '0.0.0.0', () => console.log(`Server listening on port ${port}`));
