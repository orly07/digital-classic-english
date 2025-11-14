import { gql } from "@apollo/client";

export const GET_TEAM = gql`
  query GetTeams {
    teams(first: 20) {
      name
      role
      description
      image {
        url
      }
    }
  }
`;
