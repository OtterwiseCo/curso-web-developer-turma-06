import { comparePassword, createAccesToken, prisma } from "../helpers/utils.js";
import { hashPassword } from "../helpers/utils.js";

export const login = async (req, rep) => {
  const { email, password } = req.body;
  try {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return rep.status(401).send("Usuário ou senha incorretos");
    }

    if (!(await comparePassword(password, user.password))) {
      return rep.status(401).send("Usuário ou senha incorretos");
    }

    const { password: pass, ...data } = user;
    return rep.send({ user: data, accessToken: await createAccesToken(data) });
  } catch (error) {
    rep.status(500).send("Não foi encontrado o usuário");
  }
};

export const signUp = async (request, reply) => {
  const { email, password: pass } = request.body;
  const password = await hashPassword(pass);
  console.log(request.body);
  console.log(password);
  try {
    const { password: hashedPassword, ...user } = await prisma.user.create({
      data: {
        email,
        password,
      },
    });
    return user;
  } catch (error) {
    reply.status(400).send("Usuário já existente");
  }
};
