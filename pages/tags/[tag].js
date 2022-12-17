import Meta from '../../components/Meta';
import PageTitle from '../../components/PageTitle';
import PostList from '../../components/PostList';
import { getAllByTags, getTags } from "../api/notion";

export const getStaticProps = async ({ params }) => {
    const data = await getAllByTags(params.tag)
    return {
      props: {
        posts: data,
        tag: params.tag,
      },
      revalidate: 60
    };
  };
  

export const getStaticPaths = async () => {
  const tags = await getTags()
  const paths = tags.map(( tags ) => ({ params: { tag: tags } }));
  return {
    paths,
    fallback: 'blocking'
  };
};


const TagPage = ({ posts, tag }) => {
    return (
      <>
        <Meta title={tag} description="A codex of my personal journey to understand the world." />
        <PageTitle title={tag} description={`All posts tagged with ${tag}`}/>
        <div className="mt-7 flex flex-row gap-6">
          <div>
            {posts.map((post, index) => (
                  <PostList title={post.title} description={post.description} date={post.date} type={post.type} slug={`/posts/${post.slug}`} key={post.id}/>
                ))}
          </div>
        </div>
      </>
    )
}
  export default TagPage;