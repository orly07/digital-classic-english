import { gql } from "@apollo/client";

export const GET_STORIES = gql`
  query GetStories {
    stories(first: 100) {
      id
      title
      slug
      author
      description
      image {
        url
      }
      video
      fullStory
      character(first: 200) {
        id
        name
        lines
        description
        image {
          url
        }
      }
    }
  }
`;
