const API_URL = "https://jsonplaceholder.typicode.com";

export const fetchUsers = async () => {
  const response = await fetch(`${API_URL}/users`);
  if (!response.ok) throw new Error("Failed to fetch users");
  return response.json();
};

export const fetchUserAlbums = async (userId) => {
  const response = await fetch(`${API_URL}/albums?userId=${userId}`);
  if (!response.ok) throw new Error("Failed to fetch user albums");
  return response.json();
};

export const fetchAlbumPhotos = async (albumId) => {
  const response = await fetch(`${API_URL}/photos?albumId=${albumId}`);
  if (!response.ok) throw new Error("Failed to fetch album photos");
  return response.json();
};

export const fetchAllAlbums = async () => {
  const response = await fetch(`${API_URL}/albums`);
  if (!response.ok) throw new Error("Failed to fetch albums");
  return response.json();
};

export const fetchUser = async (userId) => {
  const response = await fetch(`${API_URL}/users/${userId}`);
  if (!response.ok) throw new Error("Failed to fetch user");
  return response.json();
};

export const fetchAlbum = async (albumId) => {
  const response = await fetch(`${API_URL}/albums/${albumId}`);
  if (!response.ok) throw new Error("Failed to fetch album");
  return response.json();
};
