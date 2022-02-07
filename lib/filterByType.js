import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const filterByType = () => {
    const files = fs.readdirSync(path.join('posts'))
  
    const posts = files.map(filename => {
      const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8')
      const { data: frontMatter } = matter(markdownWithMeta)
  
      return {
        frontMatter,
        slug: filename.split('.')[0]
      }
    })

    const filteredPosts=posts.filter(post => post.frontMatter.type === 'notes');
  
    const sortedPosts = filteredPosts.sort((a,b) => b.frontMatter.date - a.frontMatter.date)
    console.log(sortedPosts)
  
    return {
      props: {
        posts: sortedPosts
      }
    }
}

export default filterByType;