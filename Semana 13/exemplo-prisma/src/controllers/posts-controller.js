import { prisma } from "../helpers/utils.js";

export const getAll = async (request, reply) => {
  try {
    const posts = await prisma.post.findMany();
    return posts;
  } catch (error) {
    console.log(error);
    reply.status(500).send("Não foi possível criar o post");
  }
};

export const create = async (req, reply) => {
  try {
    console.log(req.body);
    console.log(req.file);
    const { title, content, authorId } = req.body;
    const post = await prisma.post.create({
      data: {
        title,
        content,
        author: {
          connect: { id: Number(authorId) },
        },
        cover: req.file.path,
      },
    });
    reply.send(post);
  } catch (error) {
    console.log(error);
    reply.status(500).send("Não foi possível criar o post");
  }
};
