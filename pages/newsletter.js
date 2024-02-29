import fs from "fs";
import path from "path";
import Meta from "../components/Meta";
import PageTitle from "../components/PageTitle";
import PostBodyContent from "../components/PostBodyContent";

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
    <div className="flex flex-col gap-2">
      <Meta title="Newsletter" />
      <PageTitle title="Newsletter" />
      <PostBodyContent content={data} />
    </div>
  );
}
