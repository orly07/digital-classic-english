import { useQuery } from "@apollo/client";
import { GET_CONTACT } from "../../graphql/queries/contact";

export const useContact = () => {
  const { data, loading, error, refetch } = useQuery(GET_CONTACT);

  return {
    contacts: data?.contacts ?? [],
    loading,
    error,
    refetch,
  };
};
