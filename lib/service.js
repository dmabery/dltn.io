import { fetchAPI } from "./base";

export async function getLatestPosts() {
    // We only want the five latest posts, so no need for a loop or pagination control
    const data = await fetchAPI(
      `query FetchPosts($first: Int = 5) {
        posts(first: $first) {
          edges {
            node {
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
              categories {
                edges {
                  node {
                    id
                    name
                  }
                }
              }
            }
          }
        }
      }`,
      {
        variables: {
          first: 5, // Request only the five latest posts
        },
      }
    );

    // Extract the posts from the fetched data
    const posts = data?.posts?.edges?.map((edge) => edge.node) || [];

    return posts;
  }

export async function getPosts(first = 10) {
  let allPosts = [];
  let after = null; // This will be used to store the cursor
  let hasNextPage = true;

  while (hasNextPage) {
    const data = await fetchAPI(
      `query FetchPosts($first: Int = 10, $after: String) {
        posts(first: $first, after: $after) {
          edges {
            cursor
            node {
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
              categories {
                edges {
                  node {
                    id
                    name
                  }
                }
              }
            }
          }
          pageInfo {
            hasNextPage
            endCursor
          }
        }
      }`,
      {
        variables: {
          first,
          after,
        },
      }
    );

    const posts = data?.posts?.edges?.map((edge) => edge.node) || [];
    allPosts = [...allPosts, ...posts];
    hasNextPage = data?.posts?.pageInfo?.hasNextPage;
    after = data?.posts?.pageInfo?.endCursor; // Update the cursor for the next query
  }

  return allPosts;
}

export async function getListOfPosts(first = 10) {
  let allPosts = [];
  let after = null; // This will be used to store the cursor
  let hasNextPage = true;

  while (hasNextPage) {
    const data = await fetchAPI(
      `query FetchPosts($first: Int = 10, $after: String) {
        posts(first: $first, after: $after) {
          edges {
            cursor
            node {
              slug
              title
              date
            }
          }
          pageInfo {
            hasNextPage
            endCursor
          }
        }
      }`,
      {
        variables: {
          first,
          after,
        },
      }
    );

    const posts = data?.posts?.edges?.map((edge) => edge.node) || [];
    allPosts = [...allPosts, ...posts];
    hasNextPage = data?.posts?.pageInfo?.hasNextPage;
    after = data?.posts?.pageInfo?.endCursor; // Update the cursor for the next query
  }

  return allPosts;
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
        categories {
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
    }`,
    {
      variables: {
        tag: tag,
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

export async function getAllCategories(first = 10) {
  const data = await fetchAPI(
    `query GetCategories($first: Int = 10) {
      categories(first: $first) {
        edges {
          node {
            name
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

  // Assuming 'data' contains the 'categories' object directly
  const categories = data?.categories?.edges?.map((edge) => edge.node.name);

  return categories; // This will be an array of categories
}

export async function getPostsByCategories(first = 10, categoryName) {
  const data = await fetchAPI(
    `query GetPostsByCategory($first: Int = 10, $categoryName: String!) {
        posts(first: $first, where: { categoryName: $categoryName }) {
            edges {
              node {
                excerpt
                id
                title
                date
                slug
                featuredImage {
                  node {
                    id
                    sourceUrl
                  }
                }
                categories {
                  edges {
                    node {
                      name
                    }
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
