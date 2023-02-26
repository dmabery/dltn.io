/* eslint-disable react/no-unescaped-entities */
import Meta from "../components/Meta";
import { getAllPublished, getTags } from "./api/notion";

export const getStaticProps = async () => {
  const data = await getAllPublished();
  const tags = await getTags();

  return {
    props: {
      posts: data,
      tags,
    },
    revalidate: 60,
  };
};

export default function Home({ posts, tags }) {
  if (!posts) return <h1>No posts</h1>;
  console.log(posts);
  return (
    <>
      <Meta
        title="Dalton Mabery"
        description="Developer, Video Editor, Writer."
      />
      <div className="grid grid-cols-1 gap-5 md:grid-cols-4">
        <div className=" mb-5 flex flex-col space-y-5">
          {posts.slice(2, 5).map((post) => (
            <div className="">
              <div class="">
                <a href="#">
                  <img src={post.image} alt="" />
                </a>
                <div class="mt-2 leading-tight">
                  <a href="#">
                    <h5 class="mb-2 text-lg font-bold leading-tight tracking-tight text-gray-900">
                      {post.title}
                    </h5>
                  </a>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {post.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="col-span-2">
          {posts.slice(0, 1).map((post) => (
            <div className="">
              <div class="">
                <a href="#">
                  <img src={post.image} alt="" />
                </a>
                <div class="p-5">
                  <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                      {post.title}
                    </h5>
                  </a>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {post.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-blue-400"></div>
      </div>
    </>
  );
}
