const { Client } = require('@notionhq/client');

import { Tooltip } from '@nextui-org/react';
import HabitTable from '../../components/habitTable';



export async function getStaticProps() {
    const notion = new Client({ auth: process.env.NOTION_API_KEY });
    const databaseId = '462834a639394814b555659f14e1afac';
    const response = await notion.databases.query({
        database_id: databaseId,
            "sorts": [
                {
                    "property": "Name",
                    "direction": "ascending"
                }
            ]
    });

    return {
        props: {
            habits: response.results
        }
    }
}

const November22 = ({ habits }) => {
    console.log(habits);
    return (
        <div>
            <HabitTable>
                {habits.map((habit) => (
                    <tr key={habit.id} className="divide-x divide-gray-200">
                        <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-neutral-300 bg-[#111827] sm:pl-6 ">
                            {habit.properties.Name.title[0].plain_text}
                        </td>
                        <td className="text-center whitespace-nowrap p-4 text-sm text-neutral-300 bg-[#111827]">{habit.properties.Wake.rich_text[0].plain_text}</td>
                        <td className="justify-center whitespace-nowrap p-4 text-sm text-neutral-300  bg-[#111827]"><Tooltip
                            content={habit.properties.BookTitle.rich_text[0].plain_text}>
                                <div className="pl-5">
                                    {habit.properties.Reading.select.name}
                                </div>
                            </Tooltip>
                        </td>
                        <td className="text-center whitespace-nowrap p-4 text-sm text-neutral-300 bg-[#111827]">{habit.properties.Workout.rich_text[0].plain_text}</td>
                        <td className="text-center whitespace-nowrap p-4 text-sm text-neutral-300 bg-[#111827]">{habit.properties.Writing.select.name}</td>
                        <td className="text-center whitespace-nowrap p-4 text-sm text-neutral-300 bg-[#111827]">{habit.properties.School.select.name}</td>
                    </tr>
                ))}
            </HabitTable>
        </div>
    )
}

export default November22;