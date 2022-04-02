import { createClient } from 'contentful'
import MarkdownPostDisplay from '../../components/MarkdownPostDisplay'
import React from 'react'


const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
})

export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: 'tinyThought'
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
    content_type: 'tinyThought',
    'fields.slug': params.slug
  })

  return {
    props: {
      post: items[0],
    },
    revalidate: 1
  }
}

  const PostPage = ({ post }) => {
    if (!post) return <div>loading</div>

      return (
      <>
                 <MarkdownPostDisplay title={post.fields.title} description={post.fields.description} date={post.sys.createdAt} content={post.fields.content2}/>
        
              </>   
      )
  }

  export default PostPage;