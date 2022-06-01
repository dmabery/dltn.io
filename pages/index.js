import PostTitleDisplay from '../components/PostTitleDisplay'
import { getLatestFromContentful } from '../lib/contentfulAPI'
 
export const getStaticProps = async () => {
  return getLatestFromContentful();
}

export default function Home(posts) {
  const latestPost = posts.posts[0]
  return (
    <div className="">
      <PostTitleDisplay title={latestPost.fields.title} content={latestPost.fields.content2} slug={latestPost.fields.slug} date={latestPost.sys.createdAt} contentType={latestPost.sys.contentType.sys.id} key={latestPost.sys.id}/>
  </div>
  )
}

