import { createClient } from 'contentful'
import { bundleMDX } from 'mdx-bundler'
import MarkdownPostDisplay from '../../components/MarkdownPostDisplay'
import React from 'react'
import SideNote from '../../components/SideNote'

const client = createClient({
  space: 'nk2hkdvz2uym',
  accessToken: '6gmUFv_IEAMf7g22ceoqgN3885o_x3Z-eB86MAc5esE'
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

  console.log(items)

  const { code }  = await bundleMDX({
    source: items[0].fields.content2
  });

  return {
    props: {
      post: items[0],
      code
    },
    revalidate: 1
  }
}

  const PostPage = ({ post, code }) => {
    if (!post) return <div>loading</div>

    const Component = getMDXComponent(code)
      return (
      <>
                <MarkdownPostDisplay title={post.fields.title} description={post.fields.description} date={post.sys.createdAt} content={<Component components={{SideNote}} />}/>
        
              </>   
      )
  }

  export default PostPage;
