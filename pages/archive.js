import PageTitle from '../components/PageTitle';
import PostListSimple from '../components/PostListSimple';
import { getAllPostsFromContentful } from '../lib/contentfulAPI';

export const getStaticProps = async () => getAllPostsFromContentful();

const Archive = (posts) => (
  <div>
    <PageTitle title="Archive" description="An archive of all my posts." />
    <div className="mt-5">
      {posts.posts.map((post) => (
        <PostListSimple
          title={post.fields.title}
          slug={post.fields.slug}
          date={post.sys.createdAt}
          contentType={post.sys.contentType.sys.id}
          key={post.sys.id}
        />
      ))}
    </div>
  </div>
);

export default Archive;
