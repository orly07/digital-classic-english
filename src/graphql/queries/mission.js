import { gql } from "@apollo/client";

export const GET_MISSION = gql`
  query GetMissions {
    missions {
      title
      content
    }
  }
`;
