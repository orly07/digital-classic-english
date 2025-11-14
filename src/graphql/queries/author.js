import { gql } from "@apollo/client";

export const GET_AUTHOR = gql`
  query GetAuthors {
    authors(first: 50) {
      key
      name
      image {
        url
      }
      description
    }
  }
`;
