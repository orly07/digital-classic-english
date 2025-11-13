import { gql } from "@apollo/client";

export const GET_AUTHOR = gql`
  query GetAuthors {
    authors {
      key
      name
      image {
        url
      }
      description
    }
  }
`;
