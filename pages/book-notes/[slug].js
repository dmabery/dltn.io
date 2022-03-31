import { createClient } from 'contentful'
import MarkdownPostDisplay from '../../components/MarkdownPostDisplay'
import React from 'react'
import SideNote from '../../components/SideNote'
import Markdown from 'markdown-to-jsx'

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
})

export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: 'bookNotes'
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
    content_type: 'bookNotes',
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
      return (
      <>
                <MarkdownPostDisplay title={post.fields.title} description={post.fields.description} date={post.sys.createdAt} content={<Markdown>{post.fields.content2}</Markdown>}/>
        
              </>   
      )
  }

  export default PostPage;
