import Image from 'next/image'
import Link from 'next/link'
import Subscribe from '../components/Subscribe'
import PageTitle from '../components/PageTitle'
import PageContent from '../components/Layout'
import SideNote from '../components/SideNote'
import PostListSimple from '../components/PostListSimple'
import Head from 'next/head';
import Meta from '../components/Meta'
import { getAllPostsFromContentful } from '../lib/contentfulAPI'

export const getStaticProps = async () => {
  return getAllPostsFromContentful();
}

export default function Home(posts) {
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
            <p className="text-gray-900 text-sm">Read more on <span className="underline decoration-slate-500 text-slate-500 hover:underline hover:decoration-amber-700 hover:decoration-2">about page</span>.</p>
        </Link>
            <a rel="noreferrer" target="_blank" className="text-gray-900 text-sm ml-1" href="https://publish.obsidian.md/1729/About+these+notes">Or visit my <span className="underline decoration-slate-500 text-slate-500 hover:underline hover:decoration-amber-700 hover:decoration-2">public brain.</span></a>
      </div>
              
    <PageContent>
      <div className="grid gap-4 md:grid-cols-3 text-gray-900">
        <div className="col-span-2">
          <h3 className="text-3xl text-gray-900 font-bold mb-5">Latest posts</h3>
            {posts.posts.slice(0, 5).map(post => (
              <PostListSimple title={post.fields.title} />
            ))}
        </div>
      </div>
      <div>             
          <Subscribe />
        </div>
    </PageContent>
  </div>
  )
}

