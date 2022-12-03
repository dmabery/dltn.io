import Link from 'next/link';
import { getAllPublished } from './api/notion';
 
export const getStaticProps = async () => {
  const data = await getAllPublished()

  return {
    props: {
      posts: data,
    },
    revalidate: 60
  };
};

export default function Home({posts}) {
  if(!posts) return <h1>No posts</h1>
  console.log(posts)

  return (
    <div>
       {posts.map((post, index) => (
          <div key={index}>
          <div>
            <h2>
              <Link href={`/posts/${post.slug}`}>
                <a>{post.title}</a>
              </Link>
            </h2>
          <div>           
          <div>{post.date}</div>
          <p>{post.description}</p>
          </div>
          </div>
          </div>
       ))}
    </div>
  )
}