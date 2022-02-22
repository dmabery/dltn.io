import Image from 'next/image'
import Link from 'next/link'
import Meta from '../components/Meta'
import PageTitle from '../components/PageTitle'
import PageContent from '../components/Layout'
import filterPostsByType from '../lib/filterPostsByType'
import PostList from '../components/PostList'

export const getStaticProps = async () => {
  return filterPostsByType('blog');
}

const Essays = ({ posts }) => {
    return (
      <>
      <Meta title="Essays" description="Most of my essays are expanding on an idea I read in a book or heard in a podcast. These essays are a record of my becoming of a person while trying to answer the question, 'What does this all mean?" />
      <PageTitle
        title="All Essays"
        description="Most of my essays are expanding on an idea I read in a book or heard in a podcast. These essays are a record of my becoming of a person while trying to answer the question, 'What does this all mean?'"      />

      <PageContent>
      <div className="grid grid-row gap-4">
            {posts.map((post, index) => (
              <PostList post={post} index={index} />
            ))}
        </div>
        </PageContent>
      </>
    )
}

export default Essays;