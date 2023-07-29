import { createServer } from 'vite';

module.exports = {
  async server({ app, server }) {
    const viteServer = await createServer({
      server: {
        middlewareMode: true,
      },
    });

    app.use(viteServer.middlewares);
  },
};
