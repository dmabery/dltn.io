import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import SyntaxHighlighter from 'react-syntax-highlighter'
import Button from '../../components/Button'
import Subscribe from '../../components/Subscribe'
import SideNote from '../../components/SideNote'
import Meta from '../../components/Meta'

import React,  { useEffect } from "react"
const prism = require("prismjs")

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

  const PostPage = ({ frontMatter: { title, description, tags, date, thumbnailUrl }, mdxSource }) => {

    useEffect(() => {
      prism.highlightAll();
    }, []);

      return (
        <>
        <Meta title={title} description={description} image={thumbnailUrl} />
          <div className="container mx-auto max-w-screen-sm prose-white prose-a:text-sky-700 hover:prose-a:text-amber-700 focus:prose-a:text-gray-900 prose prose-a:no-underline hover:prose-a:underline prose-h1:leading-tight pr-5 pl-5 md:p-0 prose-h1:text-[33px] sm:prose-h1:text-5xl" >
            <div className="border-b-2 pb-3 mb-10">
              <h1 className="text-left text-5xl mt-7 mb-4 underline decoration-amber-700 decoration-4">{title}</h1>
              <div className="text-md">{description}</div>
              <div className="text-xs mt-4">Published: {date}</div>
            </div>
              <MDXRemote {...mdxSource} components={{ Button, SyntaxHighlighter, Subscribe, SideNote,}} />
          </div>
        </>
      )
  }

  export default PostPage;
