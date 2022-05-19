import { prisma } from "../helpers/utils.js";

const formatOrder = (item) => {
  const split = item.split(".");
  return {
    [split[0]]: split[1],
  };
};

export const getAll = async (request, reply) => {
  const { email, orderBy } = request.query;
  console.log(orderBy);
  let orderFilter = null;
  if (Array.isArray(orderBy)) {
    orderFilter = orderBy.map(formatOrder);
  } else {
    orderFilter = [formatOrder(orderBy)];
  }

  const posts = await prisma.post.findMany({
    orderBy: orderFilter,

    where: {
      author: {
        email: {
          contains: email,
        },
      },
    },
  });
  return posts;
};

export const create = async (req, reply) => {
  const { title, content, authorId } = req.body;
  try {
    const post = await prisma.post.create({
      data: {
        title,
        content,
        author: {
          connect: { id: authorId },
        },
      },
    });
    reply.send(post);
  } catch (error) {
    reply.status(500).send("Não foi possível criar o post");
  }
};
