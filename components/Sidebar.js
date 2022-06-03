import SubscribeSimple from "./SubscribeSimple";
import useSWR from "swr";
import { getAllPostsFromContentful } from "../lib/contentfulAPI";
import PostListSimple from "./PostListSimple";

const fetcher = (url) => fetch(url).then(res => res.json())


const Sidebar = ({ children }) => {
  const { data, error } = useSWR("/api/contentful", fetcher)
  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  const blogroll = [
    {
      title: 'Marginal Revolution',
      url: 'https://marginalrevolution.com/'
    },
    {
      title: 'Overcoming Bias',
      url: 'https://www.overcomingbias.com/'
    },
    {
      title: 'The Marginalian',
      url: 'https://www.themarginalian.org/'
    },
    {
      title: 'Astral Codex Ten',
      url: 'https://astralcodexten.substack.com/'
    },
    {
      title: 'Letters of Note',
      url: 'https://news.lettersofnote.com/'
    },
    {
      title: 'Farnam Street',
      url: 'https://fs.blog/'
    },
    {
      title: "Ribbon Farm",
      url: 'https://www.ribbonfarm.com/'
    }
  ]

  console.log(data)
  return (
    <div className="min-h-screen flex flex-col">
    <div className="flex flex-col-reverse md:flex-row flex-1">
      <aside className="md:border-t-none md:border-r w-full md:w-60 p-5">
        <div className="mb-10">
          <h3 className="text-sm mb-2 uppercase" >Subscribe</h3>
          <SubscribeSimple />
        </div>
        <hr></hr>
        <div className="mb-10">
          <h3 className="text-sm mb-2 uppercase mt-5">Latest Posts</h3>
            {data.items.map(post => (
               <PostListSimple title={post.fields.title} slug={post.fields.slug} date={post.sys.createdAt} contentType={post.sys.contentType.sys.id} key={post.sys.id}/>
            ))}
        </div>
        <hr></hr>
        <div className="mb-10">
          <h3 className="text-sm mb-2 uppercase mt-5">Blogs I like</h3>
          <ul>
          {blogroll.map(blog => (
            <li key={blog.title}><a href={blog.url} className="text-sm underline text-blue-600 hover:text-amber-700 hover:decoration-amber-700">{blog.title}</a></li>
          ))}
          </ul>
        </div>
      </aside>
      <main className="flex-1 p-5 md:pl-10 md:pr-10 border-b md:border-b-0">
        {children}
      </main>
      </div>
      </div>
  )
}

export default Sidebar;