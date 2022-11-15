const { Client } = require('@notionhq/client');

const notion = new Client({ auth: process.env.NOTION_API_KEY });

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {

    res.status(200).json({ response })
}


