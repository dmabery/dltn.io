import { createClient } from 'contentful'
import { useEffect } from 'react'
import Meta from '../../components/Meta'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'


const prism = require("prismjs")
const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
})

export const getStaticPaths = async () => {
  const res = await client.getEntries()

  const paths = res.items.map(item => ({
    params: {
      slug: item.fields.slug
    }
  }))

  console.log(paths)
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
      post: items[0]
    },
    revalidate: 1
  }
}

  const PostPage = ({ post }) => {

    console.log(post)

    useEffect(() => {
      prism.highlightAll();
    }, []);

      return (
        <>
          <div className="container mx-auto max-w-screen-sm prose-white prose-a:text-sky-700 hover:prose-a:text-amber-700 focus:prose-a:text-gray-900 prose prose-a:no-underline hover:prose-a:underline prose-h1:leading-tight sm:prose-h1:leading-tight pr-5 pl-5 md:p-0 prose-h1:text-[33px] sm:prose-h1:text-5xl" >
            <div className="border-b-2 pb-3 mb-10">
              <h1 className="text-left text-5xl mt-7 mb-4 underline decoration-amber-700 decoration-4">{post.fields.title}</h1>
              <div className="text-md">{post.fields.description}</div>
              <div className="text-xs mt-4">Published: {post.sys.createdAt}</div>
            </div>
            <div>{documentToReactComponents(post.fields.content)}</div>
          </div>
        </>
      )
  }

  export default PostPage;
