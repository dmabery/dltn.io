import fs from "fs";
import path from "path";
import PageTitle from "../components/PageTitle";
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
    <div className="flex flex-col gap-2 border border-black bg-white p-5">
      <PageTitle title="Newsletter" />
      <PostBodyContent content={data} />
      <Subscribe />
    </div>
  );
}
