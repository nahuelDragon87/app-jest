import { axiosInstance } from "./../api";
import { SearchRepositoriesResponse } from "../../interfaces";

const getData = (query: string): Promise<SearchRepositoriesResponse['items']> => 
  axiosInstance
    .get<SearchRepositoriesResponse>(`https://jsonplaceholder.typicode.com/posts`)
    .then((response) => response.data.items)
    .catch((error) => {
      console.error("Error fetching repositories:", error);
      return []; // Devuelve un arreglo vacío en caso de error
    });
 // Retorna solo los repositorios

export const exampleService = {
  getData,
};

