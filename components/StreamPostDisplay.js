import { useEffect } from "react";
import PostBodyContent from "./PostBodyContent";
const prism = require("prismjs");

const HomePagePostDisplay = ({
  title,
  content,
  slug,
}) => {
  useEffect(() => {
    prism.highlightAll();
  }, []);

  return <>
    <div className="gap-10 flex font-sansSerif">
      <div className="border-b pb-10">
        <div className="font-bold pt-10 pb-3">{title}</div>
        <div><PostBodyContent content={content} /></div>
      </div>
    </div>

  </>;
};

export default HomePagePostDisplay;
