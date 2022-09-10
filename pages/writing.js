import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Meta from '../components/Meta'
import PageTitle from '../components/PageTitle'
import PostList from '../components/PostList'
import { getAllPostsFromContentful } from '../lib/contentfulAPI'

export const getStaticProps = async () => {
  return getAllPostsFromContentful();
}

const Writing = ({ posts }) => {
  const writing = posts.filter(post => post.sys.contentType.sys.id === "snippet" || post.sys.contentType.sys.id === "tinyThought")

    return (
      <>
        <Meta title="Writing" description="A codex of my personal journey to understand the world" />
        <PageTitle title="Writing" description=""      />
        <div className="flex flex-row gap-6">
          <div className=''>
            {writing.map((writing, index) => (
                  <PostList title={writing.fields.title} description={documentToReactComponents(writing.fields.description)} date={writing.sys.createdAt} slug={writing.fields.slug} key={writing.sys.id} contentType={writing.sys.contentType.sys.id}/>
                ))}
          </div>
        </div>
      </>
    )
}

export default Writing;