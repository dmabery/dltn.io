const { Client } = require('@notionhq/client');

const notion = new Client({ auth: process.env.NOTION_API_KEY });

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
    const databaseId = '462834a639394814b555659f14e1afac';
    const response = await notion.databases.query({
        database_id: databaseId,
    });

    res.status(200).json({ response })
}


