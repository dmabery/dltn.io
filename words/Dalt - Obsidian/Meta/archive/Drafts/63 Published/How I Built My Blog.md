I had two priorities when building this blog:

1. I wanted to learn the nitty gritty of a functioning web application.
	- How does data get sent from one place to another?
	- Where do I add all of the social share and open graph settings?
	- Etc.
2. I wanted it to be fully customizable and relatively easy to add new functionality as I come across cool things online.

Essentially, I used this project to apply the theories and skills I've been learning to create something greater than the sum of its parts and as a testing ground for anything I learn. So far, it has exceeded both of these expectations and I'm quite proud of it.

## The Stack
This blog is a Next.js application.

All blog posts and book notes are fetched from Contentful CMS. Next.js has a nifty getStaticProps function that allows you to fetch data before the page is built, making it blazing fast. 

For styling, I rely on Tailwind CSS (with some custom CSS for things like the scrollbar). Getting practice with writing vanilla CSS is important, but with the incredible libraries out there, it's much quicker and easier to change using Tailwind. If Tailwind didn't exists and Bootstrap was the only option, I probably *would've* just used vanilla CSS because as a designer, Bootstrap is not as aethetic as Tailwind. Another great thing about Tailwind is that most of the classes are named similarly (to write `display: flex`, you write `flex`), so in a way, I'm still practicing CSS.

The most important part of my blog is how I render the body content of the blog posts. I use `markdown-to-jsx` which allows me to write posts in, you guessed it, markdown, and then render those posts as JSX elements. This allows to me add custom React components wherever I want inside a blog post. Here's how it works.

## The berries to my pie
The key ingredient to my blog is using markdown-to-jsx to render blog content.

When I first started this blog, I was using `.mdx` files and using MDX to render the posts, but that didn't work for me for two reasons:

1. I wanted to practice fetching data from an API
2. I didn't like how I had to make a commit when I made a small change on one of my files.

So, I switched to using Contenful as a CMS. About halfway through the rebuild, I realized I wouldn't be able to use React components in any of my posts because I was rendering rich text from Contentful. I was crushed, but I learned a valuable lesson. **Before making any changes to a project, make sure to identify the second-order effects of those changes.** Failure is a waste if you don't learn something from it.

I also learned another valuable lesson: **there is more than one way to skin a cat**. Breaking MDX down to its first principles (as far as I understand it), it takes markdown content, renders it as JSX and sends that to the DOM. Simple enough, I thought. If I could still write my posts through Contentful in markdown and then convert that to JSX somehow, I should still be able to add React components.

After some Googling, I found the perfect library: markdown-to-jsx. Here's an example of how I use it.

Here is some of the code for a SideNote component I made.

Sometimes when I write, I want to add a sidenote but don't want to interrupt the flow of the text nor confuse the reader. To achieve this, I wanted something visually different and not just to write "Sidenote:" followed by text that looks like the rest of the blog post. So I decided to make a Sidenote component that takes a title and content as props.

*Sidenote text*

When I'm writing a post and want to use it in Contenful, I can just write `< SideNote title="Quick note" conent="Here's something else I want you to know." />`. That will get displayed in the post like this:

That's a simple example, but it gives you an idea of the flexibility of writing content like this. Say I was writing documentation on how to do something with Framer Motion. Instead of just showing what the code looks like or linking to a Code Pen, I can actually show you the contents.

Try tapping on one of these and see what happens.

Neat, huh! The possibilites are truly endless.

I could have achieved this same functionality using `.MDX` posts, but again, I wanted to write in Contenful because the writing experience was better and I wanted to practice fetching API calls. Another benefit of doing it like this is that it allows anyone to edit React components once they're built.

Now I'm probably the only person who is going to write on my blog, but if I were using a team of writer's who weren't developers, I could make the components and write simple documentation for them to actually use them. Email sign up forms, call outs, animations, you name it. I'm proud of what I've built here.

## Layout
The home page is pretty simple. I have a `PageTitle` component that takes the title of the page and a description. It also has the option to take an image property because I use the GIF on the home page, but no other pages. I tried leaving the GIF on every page, but it was distracting from the rest of the content. I like how it feels special on the index.

*Page title code*

Then, I have a list of my latest posts, called from Contentful. I limit this function call to 8 so it only fetches my most recent posts. I then map through each post and render a `PostListSimple` component that takes the title, the slug, and the date it was created at as props.

*Post list simple code*

Following all of that is my `Subscribe` component. The title and description of this component are props so I can specialize the call to action depending on what page it's on.  For example, if I added a subscribe element to a book notes post, I could say this "Subscribe for more book notes directly in your inbox" instead of just "Subscribe for more posts."

The rest of the site is pretty standard, except for the scrollbar. I'm simply using `webkit` to add custom CSS to the scrollbar. I like the uniqueness of it.

I went back and forth multiple times on the color scheme because I love the minimal look, but I also want to showcase my skills with design and color theory. To be frank, I think most people can make a black and white blog with an accent color look good, so I wanted to challenge myself a little bit. The links were yellow at first, but something about blue links seems more professional to me–I can't quite put my finger on what that is.

## Contentful
There wasn't much deliberate thought into choosing a CMS. I wanted something I could try for free and was quick to set up. Contentful satsified both of those criteria. But I wouldn't reccomend it. I've had trouble finding support and their docs aren't the most informative. Part of this could be the fact that I'm using a REST API instead of GraphQL though.

The biggest challenge I've had, that I've yet to conquer, is working with tags. Contentful has tags built into content models, but they're difficult to query. This is a problem I've been pondering since I've started. I shall make progress one day.

Since I couldn't query tags, I used a sort of band-aid solution, but it doesn't really matter to me. Essentially, I have a few different content models that are identetical: Essays, Asides, Book Notes, and Today I Learned.

For the `/index` page, I query all the posts in my Contentful space and limit the results to 8.

*Getall posts code*

For the `/writing` page, I query the Essays and Asides models and filter through those results displaying a `PostList` component. I have a prop that's conditionally rendered to display an Essay tag or an Aside tag to differentiate the two. As you could imagine, essays are longer posts and asides are short snippets I want to share.

I follow this same format for the `/notes` page and the `/til` page. 

## What's next
There are a lot of things I can keep improving, like figuring out a proper tags query and cleaning the code up, but I'm hesitant to continue optimizing it. For now, it's just a personal blog that I wanted to take pride in building and I wanted to have a space to share my writing that looks clean. I'm afraid continue optimization will prevent me from working on bigger projects where I learn more things.

Speaking of which, I'm looking for more things to build and continue expanding my abilities. If you have ideas or need help with something, [reach out on Twitter](https://twitter.com/dltnio)!
