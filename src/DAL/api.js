import axios from "axios";

const instanse = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: {
    "API-KEY": "33a745ec-83ff-4e8d-a4c7-4841cc",
  },
});

export const usersAPI = {
  getUsers(pageSize, currentPage) {
    return instanse
      .get(`users?count=${pageSize}&page=${currentPage}`, {
        withCredentials: true,
      })
      .then((response) => {
        return response.data;
      });
  },
  getProfile(userId) {
    return instanse.get(`profile/${userId}`);
  },
  getProfile(userId) {
    return instanse.get(`profile/${userId}`);
  },
  followUser(id) {
    return instanse.post(`follow/${id}`).then((response) => {
      return response.data;
    });
  },
  unfollowUser(id) {
    return instanse.delete(`follow/${id}`).then((response) => {
      return response.data;
    });
  },
};
