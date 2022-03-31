import { createClient } from 'contentful'
import { bundleMDX } from 'mdx-bundler'
import {getMDXComponent} from 'mdx-bundler/client'
import MarkdownPostDisplay from '../../components/MarkdownPostDisplay'
import React from 'react'
import SideNote from '../../components/SideNote'

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

  const { code }  = await bundleMDX({
    source: items[0].fields.content2
  })

  return {
    props: {
      post: items[0],
      code
    },
    revalidate: 1
  }
}

  const PostPage = ({ post, code }) => {
    const checkCode = code || {}
    const Component = React.useMemo(() => getMDXComponent(checkCode), [code])
      return (
      <>
                <MarkdownPostDisplay title={post.fields.title} description={post.fields.description} date={post.sys.createdAt} content={<Component className="text-grey-900 prose-dark"  components={{SideNote}}/>}/>
        
              </>   
      )
  }

  export default PostPage;
