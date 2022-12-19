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
    <div className="container">
      <Meta title="dalton's site" description="Cultivating curiosity" />
      <h3 className="text-3xl text-slate-300 font-bold mb-5">Hi, I'm Dalton</h3>
      <div className='md:text-lg text-slate-300'>
        <Fragment>
          By ☀️: I'm a video editor and designer at <a href="https://fs.blog/">Farnam Street</a>. By 🌙: I study programming (officially), history and science (unofficially), and <Link href="/writing">write</Link> and <a href="https://www.youtube.com/channel/UCMAybkfjCYdWAD5mRDWCt5w">make videos</a> about what I learn.
          <p className='mt-5'>If you're interested, you can browse my writing by topic:</p>
          <p className='mt-1'>
            {tags.slice(0,8).map((tag => (
              <span key={tag}> <Link href={`/tags/${tag}`}><a><LinkedTagButton btnText={tag} /></a></Link></span>
            )))}
          </p>
        </Fragment>
      </div>
      <div className="grid gap-4 md:grid-cols-3 text-gray-900 mb-10">
    
        <div className="col-span-2">
          <h3 className="text-2xl text-slate-300 font-bold mb-5 mt-10">Latest posts</h3>
            {posts.slice(0,8).map(post => (
              <PostListSimple title={post.title} slug={`posts/${post.slug}`} date={post.date} key={post.id}/>
            ))} 
        </div>
      </div>
      <Subscribe title="Join my monthly reading list." caption="Subscribe for new posts in your email." />
  </div>
  )
}