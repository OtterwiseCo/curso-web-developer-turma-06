import client from "../providers/client";

export const listAllPosts = () => client.get("/posts");

export const getPost = (id) => client.get(`/posts/${id}`);
