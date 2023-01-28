/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import Link from 'next/link'
import { Fragment } from 'react'
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
      <Meta title="Book Notes" description="Notes, summaries, and lessons from 30+ books." />
      <PageTitle 
        title="Book Notes"
        description= {
          <Fragment>
            <div className='prose mt-3 mb-3 md:text-base text-sm'>
              <blockquote>
              The more that you read, the more things you will know. The more that you learn, the more places you’ll go. – Dr. Seuss
              </blockquote>
            </div>
          </Fragment>
        }
      />
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