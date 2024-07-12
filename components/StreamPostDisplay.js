import { useEffect } from "react";
import PostBodyContent from "./PostBodyContent";
const prism = require("prismjs");

const StreamPostDisplay = ({
  title,
  content,
  link,
}) => {
  useEffect(() => {
    prism.highlightAll();
  }, []);


  return <>
    <div className="bg-neutral-100/80 p-4 md:p-8 border-black border">
        <h2 className={`font-semibold font-sansSerif text-lg ${link ? 'hover:text-blue' : null}`}><a href={link} target="blank_">{title}</a></h2>
        <div><PostBodyContent content={content}/></div>
    </div>

  </>;
};

export default StreamPostDisplay;
