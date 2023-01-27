/* eslint-disable react/no-unescaped-entities */
import Meta from '../components/Meta';
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
    <div className='grid grid-cols-8'>
    <Meta title="dalton's site" description="Cultivating curiosity" />
    <div className="col-span-4 border-r border-slate-800">
    <div className='grid grid-cols-3'>
      <div className='bg-slate-300 text-slate-700 flex h-40 col-span-2 text-5xl font-serif font-bold p-5 italic items-center'>
        Hi, I'm Dalton
      </div>
      <div className='bg-slate-400'>
      </div>
      <div className='col-span-2 bg-slate-400 text-slate-700 h-40 flex-col flex p-5'>
        <div className='text-4xl'>☀️</div>
        <div className='font-body text-2xl'>I'm the digital creator and designer at Farnam Street.</div>
      </div>
    </div>
    
    </div>
      <div className="text-gray-900/80 mb-10 col-span-4">
        <div>
          <div className='divide-y divide-slate-800'>
            {posts.slice(0,4).map(post => (
            <div className='py-10 px-10 hover:bg-slate-200/50 transition-all h-40'>
              <h4 className='text-2xl mb-1'>{post.title}</h4>
              <p className='text-sm'>{post.description}</p>
              <div className='flex justify-between text-xs font-mono mt-2'>
                <p>{post.tags}</p>
                <p>{post.date}</p>
              </div>
            </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}