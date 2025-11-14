import { useQuery } from "@apollo/client";
import { GET_AUTHOR } from "../../graphql/queries/author";

export const useAuthor = () => {
  const { data, loading, error, refetch } = useQuery(GET_AUTHOR);

  return {
    authors: data?.authors ?? [],
    loading,
    error,
    refetch,
  };
};
