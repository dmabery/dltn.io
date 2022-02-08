import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const filterNotes = () => {
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
  
    const sortedPosts = filteredPosts.sort((a,b) => {
      if (a.frontMatter.title < b.frontMatter.title) { return -1; }
      if (a.frontMatter.title > b.frontMatter.title) { return 1; }
      return 0;
    })
  
    return {
      props: {
        posts: sortedPosts
      }
    }
}

export default filterNotes;