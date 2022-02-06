import Image from 'next/image'
import Link from 'next/link'

import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export const getStaticProps = async () => {
    const files = fs.readdirSync(path.join('notes'))
  
    const posts = files.map(filename => {
      const markdownWithMeta = fs.readFileSync(path.join('notes', filename), 'utf-8')
      const { data: frontMatter } = matter(markdownWithMeta)
  
      return {
        frontMatter,
        slug: filename.split('.')[0]
      }
    })

    const sortedNotes = posts.sort((a, b) => b.frontMatter.date - a.frontMatter.date);

  
    return {
      props: {
        posts: sortedNotes
      }
    }
  }

const NoteList = ({ posts }) => {
    return (
        <div className="grid grid-row gap-4">
            {posts.map((post, index) => (
                <div class="rounded-lg dark:border-gray-700 mb-4 relative">
                <Link href={'/blog/' + post.slug} passHref key={index}>
                    <img class="rounded-t-lg" src={post.frontMatter.thumbnaillUrl} alt="" />
                </Link>
                <div class="">
                    <Link href={'/blog/' + post.slug} passHref key={index}>
                        <h5 class="text-2xl font-bold tracking-tight text-gray-900">{post.frontMatter.title}</h5>
                    </Link>
                    <p class="mb-4 font-normal text-gray-700 dark:text-gray-400">{post.frontMatter.description}</p>
                    <Link href={'/blog/' + post.slug} passHref key={index} class="inline-flex items-center text-sm font-medium text-center text-slate-500 hover:text-slate-900">
                        <div className="text-gray-700 flex flex-column items-center">
                          Read more
                          <svg class="ml-2 -mr-1 w-4 h-4 hover:ml-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </div>
                    </Link >
                </div>
            </div>

            ))}
        </div>
    )
}

export default NoteList;