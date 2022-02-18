import Image from 'next/image'
import Link from 'next/link'

import PageTitle from '../components/PageTitle'
import PageContent from '../components/Layout'
import filterNotes from '../lib/filterNotes'

export const getStaticProps = async (notes) => {
  return filterNotes();
}

const NoteList = ({ posts }) => {
    return (
      <>
      <PageTitle 
        title="All Notes"
        description="Everything I've learned that's worth learning has come from a book or other form of medium. These are those notes. Important: These are not summaries. They are notes from books, articles, speeches, or podcasts that was interesting to me and I knew I'd want to revisit."/>

      <PageContent>
        <div className="grid grid-row gap-4">
            {posts.map((post, index) => (
                <div className="rounded-lg dark:border-gray-700 mb-4 relative" key={index}>
                <div>
                    <Link href={'/essays/' + post.slug} passHref key={index}>
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900">{post.frontMatter.title}</h5>
                    </Link>
                    <p className="mb-4 font-normal text-gray-700 dark:text-gray-400">{post.frontMatter.description}</p>
                    <Link href={'/essays/' + post.slug} passHref key={index} class="inline-flex items-center text-sm font-medium text-center text-slate-500 hover:text-slate-900">
                        <div className="text-gray-700 flex flex-column items-center">
                          Read more
                          <svg className="ml-2 -mr-1 w-4 h-4 hover:ml-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </div>
                    </Link >
                </div>
            </div>

            ))}
        </div>
      </PageContent>

    </>
    )
}

export default NoteList;