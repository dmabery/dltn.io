import PostListSimple from '../../components/PostListSimple';
import { getAllByTags, getMoreTags } from "../api/notion";


export const getStaticProps = async ({ params }) => {
    const data = await getAllByTags(params.tag)
    return {
      props: {
        posts: data
      },
      revalidate: 60
    };
  };
  

export const getStaticPaths = async () => {
    const paths = getMoreTags();
    return {
      paths,
      fallback: 'blocking'
    };
  };

const TagPage = ({ posts }) => {
    if(!posts) return <h1>No posts</h1>
    return (
      <section>
            {posts.map(post => (
              <PostListSimple title={post.title} slug={`posts/${post.slug}`} date={post.date} key={post.id}/>
            ))}
        </section>
    )
  }
  
  export default TagPage;