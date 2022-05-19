// ESM
import Fastify from "fastify";
import usersRoutes from "../routes/users-routes.js";
import authRoutes from "../routes/auth-routes.js";

const fastify = Fastify({
  logger: true,
});

fastify.register(usersRoutes);
fastify.register(authRoutes);

export default fastify;
