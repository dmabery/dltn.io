/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import Link from 'next/link'
import Meta from '../components/Meta'
import PageTitle from '../components/PageTitle'
import { getAllByType } from './api/notion'

export const getStaticProps = async () => {
  const data = await getAllByType('Book Notes')

  return {
    props: {
      posts: data,
    },
    revalidate: 60
  };
};

const NoteList = ({ posts }) => {
    return (
      <>
      <Meta title="Notes" description="Everything I've learned that's worth learning has come from a book or other form of medium. These are those notes. Important: These are not summaries. They are notes from books, articles, speeches, or podcasts that was interesting to me and I knew I'd want to revisit." />
      <PageTitle 
        title="All Notes"
        description="These are my book notes (emphasis on mine). Some have a lot of practical insights. Others are full of quotes I liked. It differs from book to book."/>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 grid-row gap-4 content-center justify-items-center">
            {posts.map((post) => (
              <Link href={'/posts/' + post.slug} passHref key={post.id}>
                <a>
                    <div className='hover:drop-shadow-lg transition-all'>
                      <Image
                        className=''
                        alt={post.title}
                        src={post.image}
                        width={170}
                        height={250}
                      />
                  </div>
                </a>
              </Link> 
            ))}
        </div>
         
    </>
    )
}

export default NoteList;