import { gql } from "@apollo/client";

export const GET_CONTACT = gql`
  query GetContacts {
    contacts {
      email
      number
      address
    }
  }
`;
