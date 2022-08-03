import { createClient } from 'contentful'
import { bundleMDX } from 'mdx-bundler'
import { getMDXComponent } from 'mdx-bundler/client'
import PostTitleDisplay from '../../components/PostTitleDisplay'
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

  const { code }  = await bundleMDX({
    source: items[0].fields.content2
  });

  return {
    props: {
      post: items[0],

    },
    revalidate: 1
  }
}

  const PostPage = ({ post }) => {
    if (!post) return <div>loading</div>
    const description = documentToHtmlString(post.fields.description)
    const checkImage = post.fields.hasOwnProperty('image') ? `https://` + post.fields.image.fields.file.url : 'https://images.ctfassets.net/nk2hkdvz2uym/5yB87OQ11Ps4rMfWMQay'

      return (
      <>
                <PostTitleDisplay title={post.fields.title} description={description} date={post.sys.createdAt} content={post.fields.content2} image={checkImage}/>
        
              </>   
      )
  }

  export default PostPage;
