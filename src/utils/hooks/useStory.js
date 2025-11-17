import { useQuery } from "@apollo/client";
import { GET_STORIES } from "../../graphql/queries/story";

export const useStories = () => {
  const { data, loading, error, refetch } = useQuery(GET_STORIES);

  return {
    stories: data?.stories ?? [],
    loading,
    error,
    refetch,
  };
};
