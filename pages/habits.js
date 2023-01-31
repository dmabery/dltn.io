import { Tooltip } from '@nextui-org/react';
import HabitTable from '../components/HabitTable';
import Meta from '../components/Meta';
import SideNote from '../components/SideNote';

const { Client } = require('@notionhq/client');

export async function getStaticProps() {
  const notion = new Client({ auth: process.env.NOTION_API_KEY });
  const response = await notion.databases.query({
    database_id: process.env.HABITS_DATABASE_ID,
    sorts: [
      {
        property: 'Name',
        direction: 'descending',
      },
    ],
  });

  return {
    props: {
      habits: response.results,
    },
    revalidate: 10,
  };
}

const November22 = ({ habits }) => {
  if (!habits) return <div>loading...</div>;
  return (
    <div>
      <Meta title="Habits" description="dltn.io's habit tracker" />
      <SideNote
        title="Quick note"
        content="This is my public habit tracker. Powered by Notion. If I have too many misses in a row, feel free to yell at me."
      />
      <HabitTable>
        {habits.map((habit) => (
          <tr key={habit.id} className="divide-x divide-gray-200/20">
            <td className="whitespace-nowrap bg-[#111827] py-4 pl-4 pr-4 text-sm font-medium text-neutral-300 sm:pl-6 ">
              {habit.properties.Name.title[0].plain_text}
            </td>
            <td className="whitespace-nowrap bg-[#111827] p-4 text-center text-sm text-neutral-300">
              {habit.properties.Wake.rich_text[0].plain_text}
            </td>
            <td className="justify-center whitespace-nowrap bg-[#111827] p-4 text-sm  text-neutral-300">
              <Tooltip
                content={habit.properties.BookTitle.rich_text[0].plain_text}
                hideArrow
              >
                <div className="pl-5">
                  {habit.properties.Reading.select.name}
                </div>
              </Tooltip>
            </td>
            <td className="whitespace-nowrap bg-[#111827] p-4 text-center text-sm text-neutral-300">
              {habit.properties.Workout.rich_text[0].plain_text}
            </td>
            <td className="whitespace-nowrap bg-[#111827] p-4 text-center text-sm text-neutral-300">
              {habit.properties.Writing.select.name}
            </td>
            <td className="whitespace-nowrap bg-[#111827] p-4 text-center text-sm text-neutral-300">
              {habit.properties.School.select.name}
            </td>
          </tr>
        ))}
      </HabitTable>
    </div>
  );
};

export default November22;
