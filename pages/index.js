import PostTitleDisplay from '../components/PostTitleDisplay'
import { getLatestFromContentful } from '../lib/contentfulAPI'
import Link from 'next/link';
import PostContentDisplay from '../components/PostContent';
 
export const getStaticProps = async () => {
  return getLatestFromContentful();
}

export default function Home(post) {

  console.log(post)

  const contentType = post.posts[0].sys.contentType.sys.id
  const slugFunction = () => {

    if (contentType === 'bookNotes') {
        return 'book-notes/';
    } else if (contentType === 'tinyThought') {
        return 'thoughts/';  
    } else if (contentType === 'snippet') {
        return 'essays/';
   }
}

  const latestPost = post.posts[0]
  return (
    <div className="">
      <article className="container mx-auto max-w-screen-sm" >
          <div className="border-b-2 text-slate-900 pb-5 mr-5 md:ml-0 mr-0">
              <Link href={'/' + slugFunction() + latestPost.fields.slug} passHref><a><h1 className="text-left text-3xl mt-2 decoration-4 font-bold mb-2">{latestPost.fields.title}</h1></a></Link>
              <div className="text-xs text-slate-500">Published: {latestPost.sys.createdAt.slice(0,10)}</div>
          </div>
          <div className="prose prose-strong:text-slate-900 font-light text-slate-900 prose-a:text-blue-600 hover:prose-a:text-amber-700 hover:prose-a:no-underline prose-h1:leading-tight prose-h3:text-slate-900 prose-h4:text-slate-900 sm:prose-h1:leading-tight  md:p-0 prose-blockquote:font-medium prose-blockquote:p-3 prose-blockquote:rounded">
              <PostContentDisplay content={latestPost.fields.content2} />
            </div>
      </article>
  </div>
  )
}

