import psl from "psl";
import PostBodyContent from "./PostBodyContent";

const HomePagePostDisplay = ({
  title,
  content,
  link,
  date,
  id,
}) => {

  return <>
    <div id={id} className="pb-10 mb-28">
      <div className="flex justify-between items-center mb-5">
          <a href={`https://www.${psl.get(new URL(link).hostname)}`} target="blank_" className="underline font-mono text-sm hover:no-underline hover:text-blue">{psl.get(new URL(link).hostname)}</a>
          <a className="underline font-mono text-sm hover:no-underline hover:text-blue" href={`#${id}`}>{date.slice(0,10)}</a>
      </div>
      <h2 className="font-semibold text-xl decoration-1 text-gray-800 underline hover:text-blue hover:no-underline" id={date}><a target="blank_" href={`${link}`}>{title}</a></h2>
      <PostBodyContent content={content} />
    </div>

  </>;
};

export default HomePagePostDisplay;
