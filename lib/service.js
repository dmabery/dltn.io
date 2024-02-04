import { fetchAPI } from "./base";

export async function getPosts(first = 10) {
  const data = await fetchAPI(
    `query FetchPosts($first: Int = 10) {
      posts(first: $first) {
        nodes {
          excerpt
          featuredImage {
            node {
              sourceUrl
            }
          }
          slug
          title
          date
          content
          tags {
            edges {
              node {
                id
                name
              }
            }
          }
        }
      }
    }`,
    {
      variables: {
        first,
      },
    }
  );

  return data?.posts?.nodes;
}

export async function getPostBySlug(slug) {
  const data = await fetchAPI(
    `query GetPost($id: ID = "") {
      post(id: $id, idType: SLUG) {
        content
        featuredImage {
          node {
            sourceUrl
          }
        }
        slug
        date
        title
        tags {
          edges {
            node {
              id
              name
            }
          }
        }
      }
    }`,
    {
      variables: {
        id: slug,
      },
    }
  );

  return data?.post;
}

export async function getPostsByTag(tag) {
  const data = await fetchAPI(
    `query GetPostsByTag($tag: String) {
      posts(where: {tag: $tag}) {
        nodes {
          id
          title
          slug
          date
          tags {
            nodes {
              name
            }
          }
        }
      }
    }`, // Ensure the query is properly closed
    {
      variables: {
        tag: tag, // This correctly passes the `tag` function parameter as a variable to your GraphQL query.
      },
    }
  );

  return data?.posts?.nodes;
}

export async function getAllTags(first = 10) {
  const data = await fetchAPI(
    `query GetTagNodes($first: Int = 10) {
      tags(first: $first) {
        nodes {
          id
          name
        }
      }
    }`,
    {
      variables: {
        first,
      },
    }
  );

  // Assuming 'data' contains the 'tags' object directly
  const tags = data?.tags?.nodes.map((node) => node.name);

  return tags; // This will be an array of tag names
}

export async function getPostsByCategories(first = 10, categoryName = "notes") {
  const data = await fetchAPI(
    `query GetPostsByCategory($first: Int = 10, $categoryName: String!) {
        posts(first: $first, where: { categoryName: $categoryName }) {
            edges {
              node {
                id
                title
                slug
                featuredImage {
                  node {
                    id
                    sourceUrl
                  }
                }
              }
            }
          }
    }`,
    {
      variables: {
        first,
        categoryName, // Now dynamically passing the category name as well
      },
    }
  );

  return data?.posts?.edges.map((edge) => edge.node);
}