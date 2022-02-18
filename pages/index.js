import Image from 'next/image'
import Link from 'next/link'
import Subscribe from '../components/Subscribe'
import PageTitle from '../components/PageTitle'
import PageContent from '../components/Layout'
import getAllPosts from '../lib/getAllPosts'
import SideNote from '../components/SideNote'

export const getStaticProps = async () => {
  return getAllPosts();
}

export default function Home({ posts }) {
  return (
    <div className="container">
      <PageTitle
        title="Dalton"
        description = "Writer, thinker, video editor, and developer. I'm insatiably curious and love studying the past to understand how we got to now."
      />
        <div className="flex">
          <Link href="/about" passHref>
              <p className="text-gray-900 text-sm">Read more on <span className="underline decoration-slate-500 text-slate-500 hover:underline hover:decoration-amber-700 hover:decoration-2">about page</span>.</p>
          </Link>
              <a rel="noreferrer" target="_blank" className="text-gray-900 text-sm ml-1" href="https://publish.obsidian.md/1729/About+these+notes">Or visit my <span className="underline decoration-slate-500 text-slate-500 hover:underline hover:decoration-amber-700 hover:decoration-2">public brain.</span></a>
        </div>
              
    <PageContent>
            <div className="grid gap-4 md:grid-cols-3 text-gray-900">
              <div className="col-span-2">
                <h3 className="text-3xl text-gray-900 font-bold">Latest posts</h3>
                  <div className="mt-5">
                    {posts.slice(0, 5).map((post, index) => (
                      <Link href={'/essays/' + post.slug} passHref key={index}>
                        <div className="flex max-w-sm content-center text-slate-500 mb-2">
                          <ul className="">
                            <li><p className="text-l underline decoration-slate-500 hover:decoration-amber-700 leading-6 font-bold hover:decoration-2">{post.frontMatter.title}</p></li>
                          </ul>
                        </div>
                        </Link>
                      ))}
                    </div>
              </div>
            </div>
            <div>             
              <Subscribe />
            </div>
    </PageContent>
  </div>
  )
}

