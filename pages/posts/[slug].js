import Markdown from 'markdown-to-jsx';
import SideNote from '../../components/SideNote';
import Subscribe from '../../components/Subscribe';
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
            <h2>{post.metadata.title}</h2>
            <span>{post.metadata.date}</span>
            <p>{post.metadata.tags.join(', ')}</p>
            <Markdown options={{overrides: {SideNote, Subscribe}}}>{post.markdown || ''}</Markdown>
      </section>
    )
  }
  
  export default BlogPost;