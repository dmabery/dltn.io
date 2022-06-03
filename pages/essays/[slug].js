import { createClient } from 'contentful'
import PostTitleDisplay from '../../components/PostTitleDisplay'
import React from 'react'
import SideNote from '../../components/SideNote'

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
})

export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: 'snippet'
  })

  const paths = res.items.map(item => ({
    params: {
      slug: item.fields.slug
    }
  }))

  return {
    paths,
    fallback: true,
  }
}

export const getStaticProps = async ({params}) => {
  const { items } = await client.getEntries({
    content_type: 'snippet',
    'fields.slug': params.slug
  })

  return {
    props: {
      post: items[0],
    },
    revalidate: 1
  }
}

  const PostPage = ({post}) => {
    if (!post) return <div>loading</div>
    const checkImage = post.fields.hasOwnProperty('image') ? `https:` + post.fields.image.fields.file.url : 'https://images.ctfassets.net/nk2hkdvz2uym/5yB87OQ11Ps4rMfWMQay'

      return (
      <>
                <PostTitleDisplay title={post.fields.title} description={post.fields.description} date={post.sys.createdAt} content={post.fields.content2} image={checkImage}/>
        
              </>   
      )
  }

  export default PostPage;
