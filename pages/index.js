import Link from 'next/link'
import Meta from '../components/Meta'
import PageTitle from '../components/PageTitle'
import PostListSimple from '../components/PostListSimple'
import Subscribe from '../components/Subscribe'
import { getAllPostsFromContentful } from '../lib/contentfulAPI'
 
export const getStaticProps = async () => {
  return getAllPostsFromContentful(8);
}

export default function Home(posts) {
  return (
    <div className="container">
      <Meta title="dalton's site" description="Insatiably curious" />
      <PageTitle
        title="Dalton"
        image="/ezgif.com-gif-maker.gif"
        description = "☀️ Digital Creator at Farnam Street. 🌙 Studying programming (officially), history and science (unofficially), and blogging about what I learn."
      />
      <div className="flex">
            <div className="text-slate-300 text-sm">Read more on my <Link href="/about"><a>about page</a></Link>. Or view my <Link href="/habits"><a>latest habits</a></Link>.</div>
            <div rel="noreferrer" target="_blank" className="text-slate-100 text-sm ml-1"></div>
      </div>
      <div className="grid gap-4 md:grid-cols-3 text-gray-900 mb-10">
        <div className="col-span-2">
          <h3 className="text-3xl text-slate-300 font-bold mb-5 mt-10">Latest posts</h3>
            {posts.posts.map(post => (
              <PostListSimple title={post.fields.title} slug={post.fields.slug} date={post.sys.createdAt} contentType={post.sys.contentType.sys.id} key={post.sys.id}/>
            ))} 
        </div>
      </div>
      <Subscribe title="Join my monthly reading list." caption="Subscribe for new posts in your email." />
  </div>
  )
}

