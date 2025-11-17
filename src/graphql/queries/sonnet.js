import { gql } from "@apollo/client";

export const GET_SONNET = gql`
  query GetSonnets {
    sonnets(first: 100) {
      title
      slug
      author
      description
      image {
        url
      }
      content
    }
  }
`;
