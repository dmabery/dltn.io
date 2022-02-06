import Image from 'next/image'
import Link from 'next/link'
import Subscribe from '../components/Subscribe'

import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export default function Home({ posts }) {
  return (
    <div className="container">
      <div className="flex flex-row">
        <div className="basis-2/3">
          <h2 className="text-[50px] text-gray-900 font-bold"><span className="underline decoration-slate-500">Dalton</span></h2>
          <p className="text-gray-900">Writer, thinker, video editor, and developer. I study how things work to understand how we got to now. There's some fascinating stuff out there.</p>
          <br />
          <div className="flex">
            <Link href="/about">
              <p className="text-gray-900 text-sm">Read more on <span className="underline decoration-slate-500 text-slate-500">about page</span>.</p>
            </Link>
            <a className="text-gray-900 text-sm ml-1" href="https://publish.obsidian.md/1729/About+these+notes">Or visit my <span className="underline decoration-slate-500 text-slate-500">public brain.</span></a>
          </div>
        </div>
        <div className="basis=1/3 ml-10">
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3 text-gray-900">
        <div className="col-span-2">
         <h3 className="text-3xl text-gray-900 mt-20 font-bold">Latest posts</h3>
            <div className="mt-5">
              {posts.slice(0, 7).map((post, index) => (
                <Link href={`/${post.frontMatter.type}/` + post.slug} passHref key={index}>
                <div className="flex max-w-sm content-center text-slate-500 mb-2">
                      <ul className="">
                        <li><p className="text-l underline decoration-slate-500 hover:decoration-white leading-6 font-bold">{post.frontMatter.title}</p></li>
                      </ul>
              </div>
                </Link>
              ))}
            </div>  
        </div>
        <div>
        </div>
      </div>

    </div>
  )
}

export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join('posts'))
  const noteFiles = fs.readdirSync(path.join('notes'))

  const posts = files.map(filename => {
    const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8')
    const { data: frontMatter } = matter(markdownWithMeta)

    return {
      frontMatter,
      slug: filename.split('.')[0]
    }
  })

  const notes = noteFiles.map(noteName => {
    const markdownWithMeta = fs.readFileSync(path.join('notes', noteName), 'utf-8')
    const { data: frontMatter } = matter(markdownWithMeta)

    return {
      frontMatter,
      slug: noteName.split('.')[0]
    }
  })

  Array.prototype.push.apply(posts,notes)

  const sortedPosts = posts.sort((a,b) => b.frontMatter.date - a.frontMatter.date)

  return {
    props: {
      posts: posts,
      notes: notes
    }
  }
}