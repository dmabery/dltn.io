const { Client } = require('@notionhq/client');
const { NotionToMarkdown } = require("notion-to-md");


const notion = new Client({ auth: process.env.NOTION_API_KEY });

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {

    res.status(200).json({ response })
}

export const getAllPublished = async () => {
    const posts = await notion.databases.query({
      database_id: process.env.NOTION_BLOG_DATABASE_ID,
      filter: {
        property: "Published",
        checkbox: {
          equals: true,
        },
      },
      sorts: [
        {
          property: "Date",
          direction: "descending",
        },
      ],
    });
  
    const allPosts = posts.results;
  
    return allPosts.map((post) => {
      return getPageMetaData(post);
    });
  };

  export const getAllByType = async (type) => {
    const posts = await notion.databases.query({
      database_id: process.env.NOTION_BLOG_DATABASE_ID,
      filter: {
        "and": [
          {
            property: "Type",
            select: {
              equals: type,
            }
          },
          {
            property: "Published",
            checkbox: {
              equals: true,
            },
          }
    ]},
      sorts: [
        {
          property: "Date",
          direction: "descending",
        },
      ],
    });
  
    const allPosts = posts.results;
  
    return allPosts.map((post) => {
      return getPageMetaData(post);
    });
  };

  export const getAllByNotType = async (type) => {
    const posts = await notion.databases.query({
      database_id: process.env.NOTION_BLOG_DATABASE_ID,
      filter: {
        "and": [
          {
            property: "Type",
            select: {
              does_not_equal: type,
            }
          },
          {
            property: "Published",
            checkbox: {
              equals: true,
            },
          }
    ]},
      sorts: [
        {
          property: "Date",
          direction: "descending",
        },
      ],
    });
  
    const allPosts = posts.results;
  
    return allPosts.map((post) => {
      return getPageMetaData(post);
    });
  };

  export const getAllByTags = async (tag) => {
    const posts = await notion.databases.query({
      database_id: process.env.NOTION_BLOG_DATABASE_ID,
      filter: {
        "and": [
          {
            property: "Tags",
            multi_select: {
              contains: tag,
            }
          },
          {
            property: "Published",
            checkbox: {
              equals: true,
            },
          }
    ]},
      sorts: [
        {
          property: "Date",
          direction: "descending",
        },
      ],
    });
  
    const allPosts = posts.results;
  
    return allPosts.map((post) => {
      return getPageMetaData(post);
    });
  };

  const getPageMetaData = (post) => {
    const getTags = (tags) => {
      const allTags = tags.map((tag) => {
        return tag.name;
      });
  
      return allTags;
    };
  
    return {
      id: post.id,
      title: post.properties.Name.title[0].plain_text,
      tags: getTags(post.properties.Tags.multi_select),
      description: post.properties.Description.rich_text[0].plain_text,
      date: post.properties.Date.date.start,
      slug: post.properties.Slug.rich_text[0].plain_text,
      image: post.properties.Image.url,
      type: post.properties.Type.select.name
    };
  };

  const n2m = new NotionToMarkdown({ notionClient: notion });

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
  
  export function getTags() {
    const tags = ["programming", "reading-list", "book", "thought", "article", "link", "links", "life", "react", "science", "technology", "personal", "knowledge-management", "framework", "innovation", "story", "productivity", "goals", "psychology", "til", "history", "poetry", "creativity", "reading", "writing", "thinking", "politics", "explainer", "book-review", "math", "questions", "cs", "finance"]
    return tags
  }

  export function getMoreTags() {

    return getTags().map((tag) => {
      return {
        params: {
          tag,
        },
      };
    });
  }
