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
    <div className="pb-10 border-black">
        <h2 className="font-semibold pt-10 pb-3">{title}</h2>
        <div><PostBodyContent content={content} /></div>
    </div>

  </>;
};

export default HomePagePostDisplay;
