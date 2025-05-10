// src/api/sources.js

import api from "./api";

export const getCategories = async (params) => {
  const response = await api.get(`/view/categories?${params}`);
  return response.data;
};

export const getCategoriesVideosData = async (params) => {
  const response = await api.get(
    `/view/sources?${params}`
  );
  return response;
};

export const getCategoriesImagesData = async (params) => {
  const response = await api.get(
    `/view/sources?${params}`
  );
  console.log(response.data)
  return response.data;
};

export const postView = async (id) => {
  await api.post("/reactions/react", {
    targetId: id,
    reactionType: "VIEW",
    state: true,
  });
};
export const postLike = async (id, state) => {
  await api.post("/reactions/react", {
    targetId: id,
    reactionType: "LIKE",
    state: state,
  });
};
