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
  const writing = posts.filter(post => post.sys.contentType.sys.id === "snippet" || post.sys.contentType.sys.id === "tinyThought")

    return (
      <>
      <Meta title="Writing" description="A codex of my personal journey to understand the world" />
      <PageTitle
        title="Writing"
        description="The following is a codex of my personal journey to understand the mysteries, curiosities, and fundamental questions about the world through a study of science and applied history. In other words, using the atoms in the universe to learn about the atoms of the universe."      />

      <PageContent>
      <div className="flex flex-row gap-6">
        <div className=''>
          {writing.map((writing, index) => (
                <PostList title={writing.fields.title} description={documentToReactComponents(writing.fields.description)} date={writing.sys.createdAt} slug={writing.fields.slug} key={writing.sys.id}/>
              ))}
        </div>
        </div>
        </PageContent>
      </>
    )
}

export default Writing;