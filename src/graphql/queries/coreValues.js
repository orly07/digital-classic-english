import { gql } from "@apollo/client";

export const GET_CORE_VALUES = gql`
  query GetCoreValues {
    coreValues {
      title
      icon
      text
    }
  }
`;
