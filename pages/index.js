/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';
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
      <h3 className="text-4xl text-stone-800 font-extrabold italic mb-5">Hi, I'm Dalton. I'm a video editor and designer at Farnam Street. On weekends, I read and write about history's most interesting people and ideas.</h3>
      <div className='font-serif mb-5 text-stone-800/70'>Every Friday, I share five things from history that will help you live a more deliberate and curious life. Read past editions <Link href="/tags/221b"><a className='text-stone-900/100'>here</a></Link>.</div>
      <Subscribe title="Learn 5 new things every Friday" caption="Subscribe to The 221b newsletter to recieve an anthology of ideas from history, science, and philosophy every Friday. It's written by yours truly." />
    </div>
      <div className="text-gray-900 mb-10">
        <div className="">
          <h3 className="text-3xl text-zinc-600/80 font-bold mb-5 mt-10">My latest posts</h3>
            {posts.slice(0,8).map(post => (
              <PostListSimple title={post.title} slug={`posts/${post.slug}`} date={post.date} key={post.id}/>
            ))} 
        </div>
      </div>
    </>
  )
}