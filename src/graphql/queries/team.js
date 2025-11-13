import { gql } from "@apollo/client";

export const GET_TEAM = gql`
  query GetTeams {
    teams {
      name
      role
      description
      image {
        url
      }
    }
  }
`;
