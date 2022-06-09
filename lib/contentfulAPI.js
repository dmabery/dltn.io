import { createClient } from 'contentful';

const space = process.env.CONTENTFUL_SPACE_ID
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN

export const getLatestFromContentful = async () => {

    const client = createClient({
        space: space,
        accessToken: accessToken,
    })

    const posts = await client.getEntries({
        limit: 1
    })
    
    return {
        props: {
            posts: posts.items
        },
        revalidate: 1
    }
}


export const getAllPostsFromContentful = async () => {

    const client = createClient({
        space: space,
        accessToken: accessToken 
    })

    const posts = await client.getEntries()
    
    return {
        props: {
            posts: posts.items
        },
        revalidate: 1
    }
}


export const getNotesFromContentful = async () => {

    const client = createClient({
        space: space,
        accessToken: accessToken
    })

    const notes = await client.getEntries({ content_type: 'bookNotes'})

    return {
        props: {
            notes: notes.items
        },
        revalidate: 1
    }
}

export const getThoughtsFromContentful = async () => {

    const client = createClient({
        space: space,
        accessToken: accessToken
    })

    const thoughts = await client.getEntries({ content_type: 'tinyThought'})

    return {
        props: {
            thoughts: thoughts.items
        },
        revalidate: 1
    }
}

export const getEssaysFromContentful = async () => {

    const client = createClient({
        space: space,
        accessToken: accessToken
    })

    const posts = await client.getEntries({ content_type: 'snippet'})

    return {
        props: {
            posts: posts.items
        },
        revalidate: 1
    }
}

