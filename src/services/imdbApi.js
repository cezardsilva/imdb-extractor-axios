import axios from "axios";

const API_URL = "https://graph.imdbapi.dev/v1";

export const fetchMovieData = async (imdbId) => {
  const query = `
    query titleById($id: ID!) {
      title(id: $id) {
        id
        type
        is_adult
        primary_title
        original_title
        start_year
        end_year
        runtime_minutes
        plot
        rating {
          aggregate_rating
          votes_count
        }
        genres
        posters {
          url
          width
          height
        }
        certificates {
          country {
            code
            name
          }
          rating
        }
        spoken_languages {
          code
          name
        }
        origin_countries {
          code
          name
        }
        directors: credits(first: 5, categories: ["director"]) {
          name {
            id
            display_name
            avatars {
              url
              width
              height
            }
          }
        }
        casts: credits(first: 5, categories: ["actor", "actress"]) {
          name {
            id
            display_name
            avatars {
              url
              width
              height
            }
          }
          characters
        }
      }
    }
  `;

  try {
    const response = await axios.post(
      API_URL,
      {
        query,
        variables: { id: imdbId },
      },
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Error fetching movie data:", error);
    throw error;
  }
};
