import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import SyntaxHighlighter from 'react-syntax-highlighter'
import Button from '../../components/Button'
import Subscribe from '../../components/Subscribe'

// where to get the dynamic paths from
export const getStaticPaths = async () => {
    const files = fs.readdirSync(path.join('posts'))
  
    const paths = files.map(filename => ({
      params: {
        slug: filename.replace('.mdx', '')
      }
    }))
  
    return {
      paths,
      fallback: false
    }
  }

    // where to render the data from
  export const getStaticProps = async ({ params: { slug } }) => {
    const markdownWithMeta = fs.readFileSync(path.join('posts',
      slug + '.mdx'), 'utf-8')
  
    const { data: frontMatter, content } = matter(markdownWithMeta)
    const mdxSource = await serialize(content)
  
    return {
      props: {
        frontMatter,
        slug,
        mdxSource
      }
    }
  }

  const PostPage = ({ frontMatter: { title, description, tags }, mdxSource }) => {
      return (
          <div className="container mx-auto max-w-screen-sm prose prose-white prose-a:text-slate-500 prose-a:font-bold prose-a:decoration-amber-700 prose-a:decoration-2">
            <div className="border-b-2 pb-3 mb-10">
              <h1 className="text-left text-4xl mt-7 mb-7">{title}</h1>
            </div>
              <MDXRemote {...mdxSource} components={{ Button, SyntaxHighlighter, Subscribe }} />
          </div>
      )
  }

  export default PostPage;
