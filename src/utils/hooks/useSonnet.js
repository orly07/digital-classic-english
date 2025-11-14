import { useQuery } from "@apollo/client";
import { GET_SONNET } from "../../graphql/queries/sonnet";

export const useSonnet = () => {
  const { data, loading, error, refetch } = useQuery(GET_SONNET);

  return {
    sonnets: data?.sonnets ?? [],
    loading,
    error,
    refetch,
  };
};
