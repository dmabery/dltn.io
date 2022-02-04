import Image from 'next/image'
import Link from 'next/link'

import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export default function Home({ posts }) {
  return (
    <div className="conatiner">
      <div className="flex flex-row">
        <div className="basis-2/3">
          <h2 className="text-[50px] font-bold">Hi, I'm <span className="underline decoration-slate-500">Dalton</span></h2>
          <p className="text-slate-900">Writer, thinker, video editor, and developer. I study how things work to understand how we got to now. There's some fascinating stuff out there.</p>
        </div>
        <div className="basis=1/3">
          Image here
        </div>
      </div>

      <h3 className="text-4xl mt-20">Latest posts</h3>



      <div className="mt-5">
        {posts.map((post, index) => (
          <Link href={'/blog/' + post.slug} passHref key={index}>
              <div className="flex max-w-sm content-center">
                    <p className="text-2xl font-bold tracking-tight text-grey-900 hover:underline decoration-slate-500">{post.frontMatter.title}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join('posts'))

  const posts = files.map(filename => {
    const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8')
    const { data: frontMatter } = matter(markdownWithMeta)

    return {
      frontMatter,
      slug: filename.split('.')[0]
    }
  })

  return {
    props: {
      posts
    }
  }
}