import Meta from "../../components/Meta";
import PageTitle from "../../components/PageTitle";
import PostListSimple from "../../components/PostListSimple";
import { getAllCategories, getPostsByCategories } from "../../lib/service";

const unslugify = (slug) =>
  slug
    .replace(/\-/g, " ")
    .replace(
      /\w\S*/g,
      (text) => text.charAt(0).toUpperCase() + text.slice(1).toLowerCase()
    );

    function slugify(text) {
      return text.toString().toLowerCase()
        .replace(/\s+/g, '-')           // Replace spaces with -
        .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
        .replace(/\-\-+/g, '-')         // Replace multiple - with single -
        .replace(/^-+/, '')             // Trim - from start of text
        .replace(/-+$/, '');            // Trim - from end of text
    }

export async function getStaticProps({ params }) {
  const posts = await getPostsByCategories(100, params.category); // retrieve first 100 posts

  console.log(posts)

  return {
    props: {
      posts,
      category: params.category
    },
    revalidate: 60,
  };
};

export const getStaticPaths = async () => {
  const categories = await getAllCategories(100);
  console.log(categories)
  const paths = categories.map((category) => ({ params: { category: slugify(category) } }));
  return {
    paths,
    fallback: "blocking",
  };
};

export default function CategoryPage({ posts, category }) {

  const categoryDisplay = unslugify(category)
  return (
    <div className="border bg-white border-black p-5">
      <Meta
        description="A codex of my personal journey to understand the world."
      />
      <PageTitle description={`All posts about ${categoryDisplay}`} />
      <div className="mt-7 flex flex-row">
        <div>
          {posts.map((post) => (
            <PostListSimple
              title={post.title}
              date={post.date}
              slug={`posts/${post.slug}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
