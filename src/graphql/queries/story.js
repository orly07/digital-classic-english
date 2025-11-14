import { gql } from "@apollo/client";

export const GET_STORIES = gql`
  query GetStories {
    stories {
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
      character {
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
