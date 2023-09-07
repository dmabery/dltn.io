---
Title: "How I Built my Blog with Next.js and Notion with Custom React Components in Blog Posts"
Tags: ["programming"]
Date: "2023-01-29"
Description: "A high-level overview of how I built my blog."
Image: "https://res.cloudinary.com/dde1q4ekv/image/upload/v1675028670/blog_wtsxei.png"
Published: true
Slug: "blog-notion-nextjs"
Type: "Essay"
---
<SideNote title={👋  Some housekeeping} content={This is a top-level overview of how I built my blog. I’m working on a step-by-step beginner friendly tutorial for those who want to build their own. I’ll also provide the GitHub repo for a minimal personal website if you want to skip the build and get started with your own Next.js blog powered by a Notion CMS.} />

## The Stack

This blog is a Next.js application deployed on [Vercel](https://vercel.com/). I chose Vercel because they’re the company behind [Next.js](https://vercel.com/solutions/nextjs). Plus, you can deploy a site with a few keystrokes from the terminal or a couple clicks from within a repo.

For styling, I use [Tailwind](https://tailwindcss.com/). When I initially started building the blog, I wanted to learn how to use Tailwind and it was a good project for doing so. I like how easy it is to learn (if you know CSS already), though the inline styles can get quite long.

The email signup component is a custom built form powered by [Convertkit’s](https://convertkit.com/) API and [Next’s API routes](https://nextjs.org/docs/api-routes/introduction).

The critical part of the stack, and what I’m most proud of, is using [Notion](https://www.notion.so/product) as a [headless CMS](https://en.wikipedia.org/wiki/Headless_content_management_system).

## Notion as a CMS

I use Notion for everything. Life planning, writing, notes, brainstorm sessions, you name it. ***********Why not also use it as a CMS***********, I thought?

Previously, I was using Contentful as a headless CMS and that was…difficult. Writing and publishing a new post with their editor took as many click as it did to launch a Saturn V. Editing or trying to add images to a post was an awful experience.

That friction kept me from writing. So I wanted to remove it. Enter: Notion.

To get started, I created a database named `Blog CMS`. I then made a table with simple fields like `Title`, `slug`, `description`, `image` for Open Graph, a checkbox for whether or not I want it to be published, and a date for it to be published on.

![Screen Shot 2023-01-27 at 8.18.17 PM.png](How%20I%20Built%20my%20Blog%20with%20Next%20js%20and%20Notion%20with%20C%20d1b778f49e524b6aa67dbf49ae259f6c/Screen_Shot_2023-01-27_at_8.18.17_PM.png)

Following [this tutorial from *Bejamas*](https://bejamas.io/blog/how-to-create-next-js-blog-using-notion-as-a-cms/), I was able to fetch the Notion database using custom hooks and Next’s API routes. Using [notion-to-md](https://github.com/souvikinator/notion-to-md) via my API call, I turn the blocks from the body text into Markdown content.

```jsx
// pages/api/notion.js

export const getSingleBlogPostBySlug = async (slug) => {
    const response = await notion.databases.query({
      database_id: process.env.NOTION_BLOG_DATABASE_ID,
      filter: {
        property: "Slug",
        formula: {
          string: {
            equals: slug,
          },
        },
      },
    });
    const page = response.results[0];
    const metadata = getPageMetaData(page);
    const mdblocks = await n2m.pageToMarkdown(page.id);
    const mdString = n2m.toMarkdownString(mdblocks);
    return {
        metadata,
        markdown: mdString,
    };
  }
```

The downside of doing it this way is that I don’t have the luxury of displaying all of Notion’s block options. For example, if I use the `math` block in Notion, that just gets converted to a normal paragraph. There are ways around that, [like using an unofficial API from Notion](https://github.com/NotionX/react-notion-x), but I didn’t want to do that because the post body goes through one more mutation before it gets rendered.

In the component that renders the body of the blog post, the body text is passed through a [Markdown-to-JSX](https://www.npmjs.com/package/markdown-to-jsx) component. This converts the markdown content to JSX. At first glance, this may seem strange, but this is what allows me to write [custom React components](https://github.com/dmabery/dltn.io/blob/main/components/Subscribe.js) in my blog posts.

```jsx
// <PostBody />

import Markdown from "markdown-to-jsx"
import SideNote from "./SideNote"
import SquareWhileTap from "./SquareWhileTap"
import Subscribe from "./Subscribe"

const PostBodyContent = (props) => {
    return (
	    <div className="container mx-auto prose...">
        <Markdown options={{overrides: {SideNote, Subscribe, SquareWhileTap}}}>{props.content || ''}</Markdown>
      </div>
    )
}

export default PostBodyContent;
```

The `options={{overrides: ...` are custom React components that I’ve built. Passing them as options allows me to display them in blog posts.

So when I write this in a Notion page:

![Screen Shot 2023-01-27 at 8.11.02 PM.png](How%20I%20Built%20my%20Blog%20with%20Next%20js%20and%20Notion%20with%20C%20d1b778f49e524b6aa67dbf49ae259f6c/Screen_Shot_2023-01-27_at_8.11.02_PM.png)

It shows up like this:

<SideNote title={This is just an example} content={This is an example of my SideNote component. I can put it anywhere in a blog post and it will render with the title and caption that is passed via props.} />

Admittedly, other than the `<SideNote />` and `<Subscribe />` component, I use this functionality much less than I expected to, but it’s worth it just for the `<Subscribe />` component, because now I can put it anywhere in a blog post. Like right here (you should subscribe to learn five new things every Friday):

<Subscribe />

## Tags

Something that was also unnecessarily complicated to do in Contentful was create and use tags dynamically throughout the site. Aside from wanting to display them on the blog post page, I also wanted to create dynamic pages for each tag to list the corresponding posts. Notion solved this as well (though this much harder to do than I thought it would be).

In my `notion.js` API route, I have a `getTags` hook that looks like this:

```jsx
export async function getTags() {
    const posts = await getAllPublished()
    const allTags = posts.map(({ tags }) => (tags))
    const flattenedTags = allTags.flat()
    const tagSet = Array.from(new Set(flattenedTags))
    return tagSet
  }
```

First, I fetch all my blog posts. Then, I map through the `tags` property and make a new array of all the tags. I then use the `.flat()` method to take the array of the array of tags and “flatten” it into one array. Before `.flat()` method, `allTags` was an array of multiple arrays. At first I thought I could simply use `.stringify`, but that obviously didn’t work. The stringify method took one array, like this: `[ 'productivity', 'book'  ]` and made it into one string, naturally: `'productivity book'` , which isn’t what I wanted.

This is what `allTags` looked like before `.flat()`:

```jsx
console.log(allTags)
//output - multiple arrays
	[ '221b' ],
  [ 'productivity', 'book' ],
  [ '221b' ],
  [ 'personal', 'thinking' ],
  [ 'book', 'productivity' ],
  [ 'book' ],
  [ '221b' ],
  [ 'productivity', 'knowledge-mangagement' ],
  [ 'book', 'creativity' ],...

console.log(flattenedTags)
//output - one array; duplicate words
[
  '221b',                  'atomic-essay', 'atomic-essay',
  'reading-list',          'atomic-essay', 'atomic-essay',
  'atomic-essay',          '221b',         'productivity',
  'book',                  '221b',         'personal',
]
```

I then create a new `Set` to ensure there aren’t multiple instances of the same tag. Finally, I return that array.

```jsx
console.log(tagSet)
// output - one array; single instances
[
  '221b',              'atomic-essay',
  'reading-list',      'productivity',
  'book',              'personal',
  'thinking',          'knowledge-mangagement',
  'creativity',        'math',
  'science',           'history',
  'annotated-reading', 'writing',
  'programming',       'people',
  'technology',        'politics',
  'poetry',            'story',
  'til',               'reading',
  'framework',         'life',
  'psychology',        'questions',
  'thought',           'cs',
  'link',              'react',
  'links'
]
```

I call the `getTags` hook in my `/page/tags/[tag].js` page to create the dynamic paths for tags. Now, whenever I add a new tag to my Notion database, a page with a list of the corresponding posts gets dynamically created.

```jsx
export const getStaticPaths = async () => {
  const tags = await getTags()
  const paths = tags.map(( tags ) => ({ params: { tag: tags } }));
  return {
    paths,
    fallback: 'blocking'
  };
};
```

## Conclusion

That covers most of the unique (to me) technical aspects of the blog. The rest is standard React code with [Tailwind](https://tailwindcss.com/) to make it look pretty.

I have a `<Meta />` component that handles the SEO. I call it on every page to pass the title and description to.

The npm packages used are:

- [notion-to-md](https://github.com/souvikinator/notion-to-md) | `npm i notion-to-md`
- [markdown-to-jsx](https://www.npmjs.com/package/markdown-to-jsx) | `npm i markdown-to-jsx`

Thanks again to ********[Bejamas******** for the brilliant tutorial](https://bejamas.io/blog/how-to-create-next-js-blog-using-notion-as-a-cms/) that helped me lay the groundwork and original logic for using Notion as a CMS.
