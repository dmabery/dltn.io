#meta

# Markdown sans front matter

One of the reasons I’ve been tempted to switch—and in fact have switched a few times (and then back again)—to WordPress as a headless CMS was because of how dead simple and easy it was to write a new post.

I clicked the link in my bookmark, threw a title on the page, wrote, and published it. It was not a technical process, and that made it great. Also, adding images was *so* much easier in WordPress than uploading an image to Cloudinary and copying the link to embed it in a markdown file.

But I never quite felt good about using WordPress. Partly because I like the “cool factor” I feel from the fact that I built a blog from scratch and write in markdown files—like I’m some tech nerd or something. Part of it was the permanence thing; I want my blog to be around in fifty years, and I don’t know if WordPress will be! (Who knows if Vercel will be either, but switching a server provider seems easier than having to migrate decades of posts.)

What I *didn’t* like about writing in markdown files was having to either open a dev server to check new posts, or wait for my site to build to make sure I closed the front matter properly or something.

But[ then I saw Jim’s post which I stole the title of](https://blog.jim-nielsen.com/2022/markdown-sans-front-matter/), “Markdown sans front matter.” He explained adding front matter in his posts was distracting and complicated the authoring experience. I agreed. So, I searched his code and looked at how he was interpreting the metadata of a post without front matter and thought what he did was brilliant.

I love his reasoning:

> The perfectionist in me sees it as a “pure” markdown document. It's simple, I like it. Every time I start (or finish) a post, I don’t have to worry, “What metadata do I need to add again?”

He basically puts the date in the title of the file and the parses that out of the final /slug. The first H1 in the document becomes the title, and any # become tags.

With the help of ChatGPT (and some frustration and coffee), I was able to get something similar working. So now, I can write a post that looks like this, which is *super* easy.

![](https://res.cloudinary.com/dde1q4ekv/image/upload/v1727634949/Screenshot_2024-09-29_at_11.34.51_AM_tpzumv.png)

Or for more complicated posts, or my book notes, like this.

![](https://res.cloudinary.com/dde1q4ekv/image/upload/v1727634949/Screenshot_2024-09-29_at_11.35.07_AM_fgotj1.png)

Thanks, Jim!