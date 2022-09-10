import Link from 'next/link'
import Meta from '../components/Meta'
import PageTitle from '../components/PageTitle'
import PostListSimple from '../components/PostListSimple'
import Subscribe from '../components/Subscribe'
import { getAllPostsFromContentful } from '../lib/contentfulAPI'
 
export const getStaticProps = async () => {
  return getAllPostsFromContentful(5);
}

export default function Home(posts) {
  return (
    <div className="container">
      <Meta title="dalton's site" description="Insatiably curious" />
      <PageTitle
        title="Dalton"
        image="/ezgif.com-gif-maker.gif"
        description = "Studying history and science to help me understand the world; studying programming to help me build cool things and make it better. I write about what I learn."
      />
      <div className="flex">
        <Link href="/about" passHref>
            <a className="text-slate-300 text-sm">Read more on my <span className="underline decoration-slate-500 text-slate-500 hover:no-underline">about page.</span></a>
        </Link>
            <a rel="noreferrer" target="_blank" className="text-slate-100 text-sm ml-1" href="https://publish.obsidian.md/1729/About+these+notes">Or visit my <span className="underline decoration-slate-500 text-slate-500 hover:no-underline">public brain.</span></a>
      </div>
      <div className="grid gap-4 md:grid-cols-3 text-gray-900 mb-10">
        <div className="col-span-2">
          <h3 className="text-3xl text-slate-300 font-bold mb-5 mt-10">Latest posts</h3>
            {posts.posts.slice(0, 8).map(post => (
              <PostListSimple title={post.fields.title} slug={post.fields.slug} date={post.sys.createdAt} contentType={post.sys.contentType.sys.id} key={post.sys.id}/>
            ))} 
        </div>
      </div>
      <Subscribe title="Never miss a post." caption="Subscribe for new posts in your email." />
  </div>
  )
}

