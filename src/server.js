const Hapi = require('@hapi/hapi');
const routes = require('./routes');
 
const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: process.env.NODE_ENV !== 'production' ? 'localhost' : '18.136.202.205',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });
 
server.route(routes);
 
await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};
 
init();

