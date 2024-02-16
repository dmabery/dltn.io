import { fetchAPI } from "./base";

export async function getStreams(first = 10) {
  let allPosts = [];
  let after = null;
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

    const posts = data?.posts?.edges?.map((edge) => ({
      slug: edge.node.slug,
      title: edge.node.title,
      content: edge.node.content,
      date: edge.node.date,
      excerpt: edge.node.excerpt,
      featuredImage: edge.node.featuredImage?.node?.sourceUrl || null,
      tags: edge.node.tags.edges.map(tagEdge => ({
        id: tagEdge.node.id,
        name: tagEdge.node.name
      })),
      source: "WordPress"
    })) || [];

    allPosts = [...allPosts, ...posts];
    hasNextPage = data?.posts?.pageInfo?.hasNextPage;
    after = data?.posts?.pageInfo?.endCursor;
  }

  return allPosts;
}

export async function getStreamsBySlug(slug) {
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

export async function getStreamsByTag(tag) {
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
