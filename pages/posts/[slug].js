import FullPostDisplay from '../../components/FullPostDisplay';
import { getAllPublished, getSingleBlogPostBySlug } from "../api/notion";

export const getStaticProps = async ({ params }) => {
    const post = await getSingleBlogPostBySlug(params.slug)
    return {
      props: {
        post,
      },
      revalidate: 60
    };
  };
  
  export const getStaticPaths = async () => {
    const posts = await getAllPublished()
    const paths = posts.map(({ slug }) => ({ params: { slug } }));
    return {
      paths,
      fallback: 'blocking'
    };
  };

const BlogPost = ({ post }) => {
    if(!post) return <h1>No posts</h1>
    console.log(post)
    return (
        <section>
          <FullPostDisplay title={post.metadata.title} description={post.metadata.description} date={post.metadata.date} content={post.markdown}/>
      </section>
    )
  }
  
  export default BlogPost;