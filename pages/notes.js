/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import Link from 'next/link'
import { Fragment } from 'react'
import LinkText from '../components/LinkText'
import Meta from '../components/Meta'
import PageTitle from '../components/PageTitle'
import SideNote from '../components/SideNote'
import { getAllByType } from './api/notion'

export const getStaticProps = async () => {
  const data = await getAllByType('equals', 'Book Notes')

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
        description=""/>
        <SideNote title="Quick note" content={<Fragment>These are just the books I've published my notes on. For a list of most of the books I've read, along with an arbitrary rating system, <LinkText slug="/books" text="click here" type="bright"/>.</Fragment>} />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 grid-row gap-4 content-center justify-items-center">
            {posts.map((post) => (
              <Link href={'/posts/' + post.slug} passHref key={post.id}>
                <a>
                    <div>
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