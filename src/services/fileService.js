import { $api } from "../api/api.js";

export const uploadImages = async (imageFiles, token) => {
  if (!imageFiles?.length) return [];

  const formData = new FormData();
  imageFiles.forEach((file) => {
    formData.append(`files`, file);
  });

  return await $api.post('/upload', formData, {
    headers: {
      "Authorization": `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  })
}

