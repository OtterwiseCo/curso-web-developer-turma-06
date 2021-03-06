import * as AuthController from "../controllers/auth-controller.js";

const routes = [
  {
    method: "POST",
    url: "/login",
    handler: AuthController.login,
  },
  {
    method: "POST",
    url: "/signup",
    handler: AuthController.signUp,
  },
];

export default (fastify, _, next) => {
  for (let route of routes) {
    fastify.route(route);
  }
  next();
};
