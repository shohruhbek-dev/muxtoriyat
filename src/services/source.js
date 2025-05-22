// src/api/sources.js

import api from "./api";

export const getCategories = async (params) => {
  const response = await api.get(`/view/categories?${params}`);
  return response.data;
};

// get methods
export const getCategoriesVideosData = async (params) => {
  const response = await api.get(`/view/sources?${params}`);
  return response;
};

export const getCategoriesImagesData = async (params) => {
  const response = await api.get(`/view/sources?${params}`);
  return response.data;
};

export const getArticles = async (params) => {
  const response = await api.get(`/view/articles?${params}`);
  return response;
};

export const getArticleById = async (id) => {
  const response = await api.get(`/view/articles/${id}`);
  return response.data;
};

// profile methods
export const getProfileData = async () => {
  const token = localStorage.getItem("token");

  const response = await api.get(`/my-profile`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

// post methods
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

// post password
export const postPassword = async (passwordData) => {
  const token = localStorage.getItem("token");

  return await api.post(`/my-profile/reset-password`, passwordData, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};

export const postProfileData = async (data) => {
  const token = localStorage.getItem("token");

  const response = await api.post(`/my-profile/edit`, data, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  return response;
};

// post my article
export const postArticle = async (articleData) => {
  const token = localStorage.getItem("token");
  return await api.post(`/my-articles/create`, articleData, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
}
