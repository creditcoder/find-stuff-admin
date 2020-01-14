import { http, getAuthorization } from "./http";
import { API_ROOT } from "./config";

export const login = (params = {}) => http.post("user/login", { ...params });

export const getArts = (params = {}) => http.get("article/get", { params });
export const addArticle = (params = {}) =>
  http.put("article/add", { ...params });

export const editeArt = (id: string, params = {}) =>
  http.post(`article/edite/${id}`, { ...params });
export const delArt = (id: string) => http.delete(`article/delect/${id}`);
export const getArtId = (id: string, params = {}) =>
  http.get(`article/get/${id}`, { params });

export const fetchTag = (params = {}) => http.get("tag/get", { params });
export const editeTag = (params = {}) => http.post("tag/edit", { ...params });
export const addTag = (params = {}) => http.put("tag/add", { ...params });
export const delTag = (id: string) => http.delete(`tag/delect/${id}`);

export const fetchHero = (params = {}) => http.get("hero/get", { params });
export const delHero = (id: string) => http.delete(`hero/delect/${id}`);
export const editeHero = (id: string, params = {}) =>
  http.post(`hero/edite/${id}`, { ...params });

export const fetchComment = (params = {}) =>
  http.get("comment/get", { params });
export const delComment = (id: string) => http.delete(`comment/delect/${id}`);
export const editeComment = (id: string, params = {}) =>
  http.post(`comment/edite/${id}`, { ...params });

export const addProject = (params = {}) =>
  http.put("project/add", { ...params });
export const editeProject = (id: string, params = {}) =>
  http.post(`project/edite/${id}`, { ...params });
export const delProject = (id: string) => http.delete(`project/delect/${id}`);
export const fetchProject = (params = {}) =>
  http.get("project/get", { params });
export const fetchProjectId = (id: string, params = {}) =>
  http.get(`project/get/${id}`, { params });

export const addMusic = (params = {}) => http.put("music/add", { ...params });
export const fetchMusic = (params = {}) => http.get("music/get", { params });
export const delMusic = (id: string) => http.delete(`music/delect/${id}`);
export const editeMusic = (id: string, params = {}) =>
  http.post(`music/edite/${id}`, { ...params });

export const uploadConfig = () => ({
  action: `${API_ROOT}music/upload`,
  headers: {
    Authorization: getAuthorization()
  }
});
