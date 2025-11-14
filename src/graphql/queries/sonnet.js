import { gql } from "@apollo/client";

export const GET_SONNET = gql`
  query GetSonnets {
    sonnets {
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
