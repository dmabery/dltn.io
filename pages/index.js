import Image from 'next/image'
import Link from 'next/link'
import Subscribe from '../components/Subscribe'
import PageTitle from '../components/PageTitle'
import PageContent from '../components/Layout'
import PostListSimple from '../components/PostListSimple'
import Meta from '../components/Meta'
import { getAllPostsFromContentful } from '../lib/contentfulAPI'
import ThoughtDisplay from '../components/ThoughtDisplay'
 
export const getStaticProps = async () => {
  return getAllPostsFromContentful();
}

export default function Home(posts) {
  const thoughts = posts.posts.filter(post => post.sys.contentType.sys.id === 'tinyThought')
  return (
    <div className="container">
        <Meta title="dalton's site" description="Insatiably curious" />
      <PageTitle
        title="Dalton"
        image="/ezgif.com-gif-maker.gif"
        description = "Writer, thinker, video editor, and developer. I study history and science to understand how we got to now and write about what I learn."
      />
      <div className="flex">
        <Link href="/about" passHref>
            <a className="text-slate-300 text-sm">Read more on <span className="underline decoration-slate-500 text-slate-500 hover:underline hover:decoration-amber-700 hover:decoration-2">about page.</span></a>
        </Link>
            <a rel="noreferrer" target="_blank" className="text-slate-100 text-sm ml-1" href="https://publish.obsidian.md/1729/About+these+notes">Or visit my <span className="underline decoration-slate-500 text-slate-500 hover:underline hover:decoration-amber-700 hover:decoration-2">public brain.</span></a>
      </div>
              
    <PageContent>
      <div className="grid gap-4 md:grid-cols-3 text-gray-900">
        <div className="col-span-2">
          <h3 className="text-3xl text-slate-300 font-bold mb-5">Latest posts</h3>
            {posts.posts.slice(0, 5).map(post => (
              <PostListSimple title={post.fields.title} slug={post.fields.slug} date={post.sys.createdAt} contentType={post.sys.contentType.sys.id} key={post.sys.id}/>
            ))} 
        </div>
      </div>
      <div>
          <Subscribe />
      </div>

      <div>
        <div>
        <h3 className="text-3xl text-gray-900 font-bold mb-5">Latest thoughts</h3>
        {thoughts.slice(0,2).map(thought => (
          <ThoughtDisplay title={thought.fields.title} content={thought.fields.content2} slug={thought.fields.slug} date={thought.sys.createdAt} key={thought.sys.id}/>
        ))}
        <div className="text-slate-400">Read <Link href="/thoughts"><a className="underline decoration-slate-500 text-amber-700 hover:underline hover:decoration-amber-700 hover:decoration-2">more thoughts here.</a></Link></div>
        </div>
      </div>

    </PageContent>
  </div>
  )
}

