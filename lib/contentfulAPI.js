import { createClient } from 'contentful';

const space = process.env.CONTENTFUL_SPACE_ID
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN

export const getAllPostsFromContentful = async () => {

    const client = createClient({
        space: space,
        accessToken: accessToken 
    })

    const posts = await client.getEntries()
    
    return {
        props: {
            posts: posts.items
        }
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
        }
    }
}

export const getEssaysFromContentful = async () => {

    const client = createClient({
        space: space,
        accessToken: accessToken
    })

    const notes = await client.getEntries({ content_type: 'snippet'})

    return {
        props: {
            notes: notes.items
        }
    }
}

