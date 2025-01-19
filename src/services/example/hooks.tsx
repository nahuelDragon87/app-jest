import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { exampleService } from ".";
import { Repository } from "../../interfaces";

export const useGetData = (page: number): UseQueryResult<Repository[]> => {
  const query = useQuery<Repository[]>({
    queryKey: ["pages", page], 
    queryFn: () => exampleService.getData(page),
    staleTime: 30000, 
  });

  return query;
};


