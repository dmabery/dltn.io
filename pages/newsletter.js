import fs from "fs";
import path from "path";
import PostBodyContent from "../components/PostBodyContent";
import Subscribe from "../components/Subscribe";

export const getStaticProps = async () => {
  const data = fs.readFileSync(path.join("content", "newsletter.md"), {
    encoding: "utf8",
  });

  return {
    props: { data },
  };
};

export default function Newsletter({ data }) {
  return (
    <>
      <PostBodyContent content={data} />
      <Subscribe />
    </>
  );
}
