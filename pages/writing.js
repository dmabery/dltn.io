import Meta from '../components/Meta';
import PageTitle from '../components/PageTitle';
import PostList from '../components/PostList';
import { getAllByNotType } from './api/notion';

  export const getStaticProps = async () => {
    const data = await getAllByNotType('Book Notes') 
  
    return {
      props: {
        posts: data,
      },
      revalidate: 60
    };
  };

const Writing = ({ posts }) => {
    return (
      <>
        <Meta title="Writing" description="A codex of my personal journey to understand the world." />
        <PageTitle title="Writing" description="A codex of my personal journey to understand the world."/>
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

export default Writing;