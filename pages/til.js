/* eslint-disable react/no-unescaped-entities */
import Meta from '../components/Meta'
import PageTitle from '../components/PageTitle'
import PostListSimple from '../components/PostListSimple'
import SideNote from '../components/SideNote'
import { getTilFromContentful } from '../lib/contentfulAPI'

export const getStaticProps = async () => {
  return getTilFromContentful();
}

const Writing = ({ posts }) => {
    return (
      <>
        <Meta title="Today I learned" description="A codex of my personal journey to understand the world" image="/til.png" />
        <PageTitle title="Today I learned" description={<div>A miscellaneous collection of stories from the past, things I've learned, and anything else that's interesting. Quoting <a href="https://leebyron.com/til/">Lee Byron</a>, whose page I got this idea from: <blockquote>They’re not always definitive nor novel but hopefully helpful or at least interesting.</blockquote><SideNote title="Just so you know..." content="I started this collection on September 9th, 2022. My goal is to write something here 5 days/week." /></div>}    />
        <div className="flex">
          <div className=''>
            <h3 className="text-3xl text-zinc-600/80 font-bold mb-5 mt-10">What I've learned...</h3>
            {posts.map((post) => (
                  <PostListSimple title={post.fields.title} date={post.sys.createdAt} slug={post.fields.slug} key={post.sys.id} contentType={post.sys.contentType.sys.id}/>
                ))}
          </div>
        </div>
      </>
    )
}

export default Writing;