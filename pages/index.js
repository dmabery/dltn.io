import Link from 'next/link';
import LinkedTagButton from '../components/LinkedTagButton';
import Meta from '../components/Meta';
import PageTitle from '../components/PageTitle';
import PostListSimple from '../components/PostListSimple';
import Subscribe from '../components/Subscribe';
import { getAllPublished, getTags } from './api/notion';

export const getStaticProps = async () => {
  const data = await getAllPublished()
  const tags = getTags()

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
  console.log(posts)
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
          <h3 className="text-3xl text-slate-300 font-bold mb-5 mt-10">Get started</h3>
            {tags.map((tag => (
              <span key={tag}> <Link href={`/tags/${tag}`}><a><LinkedTagButton btnText={tag} /></a></Link></span>
            )))}
        </div>
        <div className="col-span-2">
          <h3 className="text-3xl text-slate-300 font-bold mb-5 mt-10">Latest posts</h3>
            {posts.slice(0,8).map(post => (
              <PostListSimple title={post.title} slug={`posts/${post.slug}`} date={post.date} key={post.id}/>
            ))} 
        </div>
      </div>
      <Subscribe title="Join my monthly reading list." caption="Subscribe for new posts in your email." />
  </div>
  )
}