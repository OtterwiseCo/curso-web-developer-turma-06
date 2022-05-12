import server from "./config/server.js";

// server.get("/", async (request, reply) => {
//   reply.send({ posts: [] });
// });

const start = async () => {
  try {
    await server.listen(3000);
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};
start();
