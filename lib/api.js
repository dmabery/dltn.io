const POST_GRAPHQL_FIELDS = `
    sys {
        id
    }  
    title
    coverImage {
        url
    }
    date
    excerpt
    description {
        json
    }`


const fetchGraphQL = (query, preview = false) {
    return fetch(
        `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
        {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${
                    preview 
                        ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
                        : process.env.CONTENTFUL_ACCESS_TOKEN
                }`,
            },
            body: JSON.stringify({ query }),
        }
    ).then((response) => response.json())
}

const extractPostEntries(fetchResponse) = () => {
    return fetchResponse?.data?.simpleBlogPostCollection?.items
}

export async function getAllPostsForHome(preview) {
    const entries = await fetchGraphQL(
        `query {
        simpleBlogPostCollection(order: date_DESC, preview: ${preview ? 'true' : 'false'}) {
            items {
            ${POST_GRAPHQL_FIELDS}
            }
        }
        }`,
        preview
    )
    return extractPostEntries(entries)
}