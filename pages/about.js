import fs from "fs";
import path from "path";
import Meta from "../components/Meta";
import PageTitle from "../components/PageTitle";
import PostBodyContent from "../components/PostBodyContent";

export const getStaticProps = async () => {
  const data = fs.readFileSync(path.join("content", "about.md"), {
    encoding: "utf8",
  });
  return {
    props: { data },
  };
};

export default function About({ data }) {
  return (
    <div>
      <Meta title="About me" />
      <PageTitle title="About me" />
      <PostBodyContent content={data} />
    </div>
  );
}
