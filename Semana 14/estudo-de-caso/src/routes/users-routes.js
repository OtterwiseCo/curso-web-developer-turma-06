import * as UserController from "../controllers/users-controller.js";
import { validateRequest } from "../middlewares/auth.js";

const routes = [
  {
    method: "GET",
    url: "/users",
    preHandler: [validateRequest],
    handler: UserController.getAll,
  },
];

export default (fastify, _, next) => {
  for (let route of routes) {
    fastify.route(route);
  }
  next();
};
