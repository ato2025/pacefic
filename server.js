const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');
const cors = require('cors'); 

const dev = process.env.NODE_ENV !== 'production';
const hostname = '46.21.250.175';
const port = process.env.PORT || 80;
// const hostname = 'www.pacificshippinglines.com';
// const port = process.env.PORT || 80;

const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      cors()(req, res, async () => {
        const parsedUrl = parse(req.url, true);
        const { pathname, query } = parsedUrl;

        if (pathname === '/a') {
          await app.render(req, res, '/a', query);
        } else if (pathname === '/b') {
          await app.render(req, res, '/b', query);
        } else {
          await handle(req, res, parsedUrl);
        }
      });
    } catch (err) {
      console.error('Error occurred handling', req.url, err);
      res.statusCode = 500;
      res.end('internal server error');
    }
  })
    .once('error', (err) => {
      console.error(err);
      process.exit(1);
    })
    .listen(port, () => {
      console.log(`> Ready on https://${hostname}:${port}`);
    });
});
