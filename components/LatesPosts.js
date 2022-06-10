import useSWR from "swr";
import PostListSimple from "./PostListSimple";

const fetcher = async (url) => await fetch(url).then(res => res.json())

const LatestPosts = () => {
  const { data, error } = useSWR("/api/contentful", fetcher)
  if (error) return <div>Failed to load</div>
  if (!data) return <div className="text-sm">Fetching posts from Mars</div>

return (
    <div>
        {data.items.map(post => (
            <PostListSimple title={post.fields.title} slug={post.fields.slug} date={post.sys.createdAt} contentType={post.sys.contentType.sys.id} key={post.sys.id}/>
        ))}
     </div>
)}


export default LatestPosts;
