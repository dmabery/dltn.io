import Image from 'next/image'
import Link from 'next/link'
import Meta from '../components/Meta'
import PageTitle from '../components/PageTitle'
import PageContent from '../components/Layout'
import PostList from '../components/PostList'
import { getEssaysFromContentful } from '../lib/contentfulAPI'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

export const getStaticProps = async () => {
  return getEssaysFromContentful();
}

const Essays = ({ posts }) => {
  console.log(posts)
    return (
      <>
      <Meta title="Essays" description="Most of my essays are expanding on an idea I read in a book or heard in a podcast. These essays are a record of my becoming of a person while trying to answer the question, 'What does this all mean?" />
      <PageTitle
        title="All Essays"
        description="Most of my essays are expanding on an idea I read in a book or heard in a podcast. These essays are a record of my becoming of a person while trying to answer the question, 'What does this all mean?'"      />

      <PageContent>
      <div className="grid grid-row gap-4">
        {posts.map((post, index) => (
              <PostList title={post.fields.title} description={documentToReactComponents(post.fields.description)} date={post.sys.createdAt} slug={post.fields.slug}/>
            ))}
       
        </div>
        </PageContent>
      </>
    )
}

export default Essays;