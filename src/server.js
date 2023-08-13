import Hapi from '@hapi/hapi';

// ================boilerplate_code ==================:
// DUNNO this page needs to be explained ... 🤯
// server_start_func
const start = async () => {
  const server = Hapi.server({
    port: 8000,
    host: 'localhost',
  });

  server.route({
    method: 'GET',
    path: '/hello',
    handler: (req, res) => {
      return 'Yippie ka yei!';
    },
  });

  await server.start();
  console.log(`Server is listening on ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

start();
