import fs from "fs";
import path from "path";
import PostBodyContent from "../components/PostBodyContent";

export const getStaticProps = async () => {
  const data = fs.readFileSync(path.join("posts", "about.md"), {
    encoding: "utf8",
  });

  console.log(data);
  return {
    props: { data },
  };
};

export default function About({ data }) {
  return <PostBodyContent content={data} />;
}
