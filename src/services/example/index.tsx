import { axiosInstance } from "./../api";
import { Repository, SearchRepositoriesResponse } from "../../interfaces";

// Ajusta el servicio para aceptar la paginación
const getData = (page: number): Promise<Repository[]> =>
  axiosInstance
    .get(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`)
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error fetching posts:", error);
      return [];
    });

export const exampleService = {
  getData,
};


