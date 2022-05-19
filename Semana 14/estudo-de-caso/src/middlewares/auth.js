import { verifyToken } from "../helpers/utils.js";

export const validateRequest = async (req, res) => {
  try {
    const auth = req.headers["authorization"];
    const token = auth.replace(/Bearer /i, "");
    const user = await verifyToken(token);
    req.user = user;
  } catch (error) {
    res.status(401).send("Token Inválido");
  }
};
