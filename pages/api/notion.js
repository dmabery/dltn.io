const { Client } = require('@notionhq/client');
const { NotionToMarkdown } = require("notion-to-md");


const notion = new Client({ auth: process.env.NOTION_API_KEY });
const notionBlog = new Client({ auth: process.env.NOTION_BLOG_API_KEY });

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {

    res.status(200).json({ response })
}

export const getAllPublished = async () => {
    const posts = await notionBlog.databases.query({
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
    const posts = await notionBlog.databases.query({
      database_id: process.env.NOTION_BLOG_DATABASE_ID,
      filter: {
        property: "Type",
        select: {
          equals: type,
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

  export const getAllByNotType = async (type) => {
    const posts = await notionBlog.databases.query({
      database_id: process.env.NOTION_BLOG_DATABASE_ID,
      filter: {
        property: "Type",
        select: {
          does_not_equal: type,
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

  const n2m = new NotionToMarkdown({ notionClient: notionBlog });

  export const getSingleBlogPostBySlug = async (slug) => {
    const response = await notionBlog.databases.query({
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


