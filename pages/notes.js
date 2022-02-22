import Image from 'next/image'
import Link from 'next/link'
import Meta from '../components/Meta'
import PageTitle from '../components/PageTitle'
import PageContent from '../components/Layout'
import filterPostsByType from '../lib/filterPostsByType'
import PostList from '../components/PostList'

export const getStaticProps = async () => {
  return filterPostsByType('notes');
}

const NoteList = ({ posts }) => {
    return (
      <>
      <Meta title="Notes" description="Everything I've learned that's worth learning has come from a book or other form of medium. These are those notes. Important: These are not summaries. They are notes from books, articles, speeches, or podcasts that was interesting to me and I knew I'd want to revisit." />
      <PageTitle 
        title="All Notes"
        description="Everything I've learned that's worth learning has come from a book or other form of medium. These are those notes. Important: These are not summaries. They are notes from books, articles, speeches, or podcasts that was interesting to me and I knew I'd want to revisit."/>

      <PageContent>
        <div className="grid grid-row gap-4">
            {posts.map((post, index) => (
              <PostList post={post} index={index} key={index} />
            ))}
        </div>
      </PageContent>
    </>
    )
}

export default NoteList;