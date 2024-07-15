import psl from "psl";
import { useEffect } from "react";
import PostBodyContent from "./PostBodyContent";
const prism = require("prismjs");

const HomePagePostDisplay = ({
  title,
  content,
  link,
  date,
}) => {
  useEffect(() => {
    prism.highlightAll();
  }, []);

  return <>
    <div className="pb-10 mb-10 border-b border-black">
        <p>{psl.get(new URL(link).hostname)}</p>
        <h2 className="font-semibold pb-3" id={date}><a target="blank_" href={`${link}`}>{title}</a></h2>
        <div><PostBodyContent content={content} /></div>
        <a className="underline hover:no-underline hover:text-blue" href={`#${date}`}>{date.slice(0,10)}</a>
    </div>

  </>;
};

export default HomePagePostDisplay;
