---
Title: "getStaticPaths in NextJS Explained (Simply)"
Tags: ["programming"]
Date: "2022-12-07"
Description: "It always confused me."
Published: true
Slug: "get-static-paths-explained"
Type: "Essay"
---
`getStaticPaths` always confused me. I never learned exactly ****what it did or how it works. I’d usually end up copying and pasting code from StackOverflow and pray for the best.

While migrating my headless CMS from Contentful to Notion, I ran into a problem though.

Most of the migration went smoothly…until I got to the code to make dynamic pages for the tags. I wanted to create a page, `/tags/[tag].js` , that would dynamically render a list of all the posts that contained the corresponding tag. The implantation is no different than doing any regular dynamic page in Next, but because it wasn’t for a blog post, I was lost. I almost gave up.

But just before I did, I had a realization: I didn’t ******really****** understand how the `getStaticPaths` function worked. I thought figuring that out might be a good place to start. **So in an effort to engrain it into my mind** and hopefully help another developer out, I wrote this post.

## getStaticPaths, explained

Just how `getStaticProps` passes data to the page component, `getStaticPaths` needs information to actually *****build***** the pages. Whatever you end up returning in `getStaticPaths` is what will be pre-rendered by Next at build time.

Let’s look at a simple example.

```jsx
export function getTags() {
    const tags =  ["programming", "reading-list", "book"]

    return tags.map((tag) => {
      return {
        params: {
          tag,
        },
      };
    });
  }

export const getStaticPaths = async () => {
    const paths = getTags();
    return {
      paths
    };
  };

```

Above is a code black that maps through my tags and then exports the `getStaticPaths` function. For simplicities sake, I’m not calling an API. Instead, I’m just passing `programming`, `reading-list`, and `book` to the variable `tags`.

Then, I’m mapping through the `tags` function and saying “For every item in the `tags` array, return an object, `params`, with the tag inside of it.

That’s the totality of what `getTags` is doing. It’s just getting a list of tags. Usually this will be a call to an API or a lib folder though.

I then call the `getStaticProps` function.

Inside that function, I say “Hey, `paths`, call `getTags`.” This will execute my `getTags` function. At this point, if I logged `paths` it would look like this:

```jsx
params: {
	tag: 'programming'
}
params: {
	tag: 'reading-list'
}
params: {
	tag: 'book'
}
```

Then from `getStaticPaths`, I return the `paths` variable as an object. Next will then go and build a page for every value in `params`

And that’s how `getStaticPaths` works. Whatever is returned from `getStaticPaths`, Next will use to render as the slugs for dynamic pages.

Inside my page component, I can destructure `tags` and then use the value of the slug on the page like this:

```jsx
const TagPage = ({ tag }) => {
	return (
		<h1>{tag}</h1>
		<p>All posts about {tag}.<p>
	)
}
```