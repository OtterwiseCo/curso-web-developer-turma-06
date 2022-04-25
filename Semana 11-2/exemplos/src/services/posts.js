import client from "../providers/client";

export const listAllPosts = () => client.get("/posts");
