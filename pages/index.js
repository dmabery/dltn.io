/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';
import { Fragment } from 'react';
import LinkedTagButton from '../components/LinkedTagButton';
import Meta from '../components/Meta';
import PostListSimple from '../components/PostListSimple';
import Subscribe from '../components/Subscribe';
import { getAllPublished, getTags } from './api/notion';

export const getStaticProps = async () => {
  const data = await getAllPublished()
  const tags = await getTags()

  return {
    props: {
      posts: data,
      tags
    },
    revalidate: 60
  };
};

export default function Home({posts, tags}) {
  if(!posts) return <h1>No posts</h1>
  return (
    <>
    <div className="flex flex-col">
      <Meta title="dalton's site" description="Cultivating curiosity" />
      <h3 className="text-4xl text-zinc-600/80 font-extrabold italic mb-5">Hi, I'm Dalton. I'm a video editor and designer at Farnam Street. On weekends, I read and write about history's most interesting people and ideas.</h3>
      <div className='font-serif mb-5'>In my weekly newsletter, I explore the success and failures of the people and ideas from history and share five things that will help you live a more deliberate and curious life.</div>
      <Subscribe title="Learn 5 new things every Friday" caption="Subscribe to The 221b newsletter to recieve an anthology of ideas from history, science, and philosophy every Friday. It's written by yours truly." />
    </div>
    <div className='md:text-lg text-zinc-600/80'>
        <Fragment>
          <p className='mt-5'>If you're interested, you can browse my writing by topic:</p>
          <p className='mt-1'>
            {tags.slice(0,8).map((tag => (
              <span key={tag}> <Link href={`/tags/${tag}`}><a><LinkedTagButton btnText={tag}/></a></Link></span>
            )))}
          </p>
        </Fragment>
      </div>
      <div className="grid gap-4 md:grid-cols-3 text-gray-900 mb-10">
        <div className="col-span-2">
          <h3 className="text-2xl text-zinc-600/80 font-bold mb-5 mt-10">Latest posts</h3>
            {posts.slice(0,8).map(post => (
              <PostListSimple title={post.title} slug={`posts/${post.slug}`} date={post.date} key={post.id}/>
            ))} 
        </div>
      </div>
    </>
  )
}