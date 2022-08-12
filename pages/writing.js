import Image from 'next/image'
import Link from 'next/link'
import Meta from '../components/Meta'
import PageTitle from '../components/PageTitle'
import PageContent from '../components/Layout'
import PostList from '../components/PostList'
import { getAllPostsFromContentful } from '../lib/contentfulAPI'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import PostListSimple from '../components/PostListSimple'

export const getStaticProps = async () => {
  return getAllPostsFromContentful();
}

const Writing = ({ posts }) => {
  const essays = posts.filter(post => post.sys.contentType.sys.id === "snippet")
  const asides = posts.filter(aside => aside.sys.contentType.sys.id === "tinyThought")
  console.log(asides)
  

    return (
      <>
      <Meta title="Writing" description="A codex of my personal journey to understand the world" />
      <PageTitle
        title="Writing"
        description="The following is a codex of my personal journey to understand the mysteries, curiosities, and fundamental questions about the world through a study of science and applied history. In other words, using the atoms in the universe to learn about the atoms of the universe."      />

      <PageContent>
      <div className="flex flex-row gap-6">
        <div className='w-3/4'>
          <h2 className='text-white'>Essays</h2>
          {essays.map((essay, index) => (
                <PostList title={essay.fields.title} description={documentToReactComponents(essay.fields.description)} date={essay.sys.createdAt} slug={essay.fields.slug} key={essay.sys.id}/>
              ))}
        </div>
        <div className='w-1/4'>
        <h2 className='text-white'>Asides</h2>
          {asides.map((aside, index) => (
                <PostListSimple title={aside.fields.title} description={documentToReactComponents(aside.fields.description)} date={aside.sys.createdAt} slug={aside.fields.slug} contentType={aside.sys.contentType.sys.id} key={aside.sys.id}/>
              ))}
        </div>
        </div>
        </PageContent>
      </>
    )
}

export default Writing;