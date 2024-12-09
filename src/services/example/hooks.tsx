import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { exampleService } from ".";
import { Repository } from "../../interfaces";

export const useGetData = (searchQuery: string): UseQueryResult<Repository[]> => {
  const query = useQuery<Repository[]>({
    queryKey: ["repos", searchQuery],
    queryFn: () => exampleService.getData(searchQuery),
    enabled: searchQuery.length >= 3,
  });

  return query;
};