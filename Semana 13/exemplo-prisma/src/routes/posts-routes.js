import fastify from "fastify";
import * as PostController from "../controllers/posts-controller.js";
import multer from "fastify-multer";
import path from "path";

const storage = multer.diskStorage({
  destination: (req, reply, callback) => {
    callback(null, "public/images");
  },
  filename: (req, file, cb) => {
    const extension = path.extname(file.originalname);
    cb(null, file.originalname + "-" + Date.now() + extension);
  },
});

const upload = multer({ storage });

const routes = [
  {
    method: "GET",
    url: "/posts",
    handler: PostController.getAll,
  },
  {
    method: "POST",
    url: "/posts",
    preHandler: upload.single("cover"),
    handler: PostController.create,
  },
];

export default (fastify, _, next) => {
  for (let route of routes) {
    fastify.route(route);
  }
  next();
};
