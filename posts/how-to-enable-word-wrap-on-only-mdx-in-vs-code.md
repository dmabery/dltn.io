---
Title: "How to Enable Word Wrap on Only MDX in VS Code"
Tags: ["programming"]
Date: "2022-04-20"
Description: "A tutorial"
Published: true
Slug: "how-to-enable-word-wrap-on-only-mdx-in-vs-code"
Type: "Aside"
---
I love editing in VS Code, but I couldn't get my MDX files to wrap on a specific column width without affecting all my other files. I want my MDX files to wrap because that's how I write blog posts, but I don't want any of my JS files to wrap because it makes it much harder to read. After doing some research, I was able to piece together a solution.

Paste this code in your `settings.json` file

```js
    "[mdx]": {
        "editor.wordWrap": "wordWrapColumn",
        "editor.quickSuggestions": false,
        "editor.wordWrapColumn": 80,
    },
```

If you use markdown instead of MDX, change the `[mdx]` to `[Markdown]`.