import { gql } from "@apollo/client";

export const GET_VISION = gql`
  query GetVisions {
    visions {
      title
      content
    }
  }
`;
