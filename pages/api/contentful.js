import { createClient } from 'contentful';
import ThoughtDisplay from '../../components/ThoughtDisplay';

const space = process.env.CONTENTFUL_SPACE_ID
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN

export default async function hander(req, res) {

    const client = createClient({
        space: space,
        accessToken: accessToken 
    })

    const posts = await client.getEntries({
        content_type: ThoughtDisplay,
        limit: 5
    })

    res.json(posts)
    
    return {
        props: {
            posts: posts.items
        },
        revalidate: 1
    }
}