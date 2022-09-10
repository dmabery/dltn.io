import Meta from '../components/Meta'
import PageTitle from '../components/PageTitle'
import PostListSimple from '../components/PostListSimple'
import { getTilFromContentful } from '../lib/contentfulAPI'

export const getStaticProps = async () => {
  return getTilFromContentful();
}

const Writing = ({ posts }) => {
    return (
      <>
        <Meta title="Today I learned" description="A codex of my personal journey to understand the world" />
        <PageTitle title="Today I learned" description=""      />
        <div className="flex flex-row gap-6">
          <div className=''>
            {posts.map((post) => (
                  <PostListSimple title={post.fields.title} date={post.sys.createdAt} slug={post.fields.slug} key={post.sys.id} contentType={post.sys.contentType.sys.id}/>
                ))}
          </div>
        </div>
      </>
    )
}

export default Writing;