import { useEffect } from "react";
import PostBodyContent from "./PostBodyContent";
const prism = require("prismjs");

const HomePagePostDisplay = ({
  title,
  content,
  link,
}) => {
  useEffect(() => {
    prism.highlightAll();
  }, []);

  return <>
    <div className="gap-10 border-b border-black flex font-sansSerif">
      <div className="pb-10">
        <h2 className="font-semibold pt-10 pb-3"><a href={link} target="_blank?">{title}</a></h2>
        <div><PostBodyContent content={content} /></div>
      </div>
    </div>

  </>;
};

export default HomePagePostDisplay;
