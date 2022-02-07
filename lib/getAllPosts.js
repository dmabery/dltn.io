import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const getAllPosts = () => {
    const files = fs.readdirSync(path.join('posts'))
  
    const posts = files.map(filename => {
      const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8')
      const { data: frontMatter } = matter(markdownWithMeta)
  
      return {
        frontMatter,
        slug: filename.split('.')[0]
      }
    })
  
    const sortedPosts = posts.sort((a,b) => b.frontMatter.date - a.frontMatter.date)
  
    return {
      props: {
        posts: posts,
      }
    }
}

export default getAllPosts;