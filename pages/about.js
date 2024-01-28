import fs from "fs";
import path from "path";
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
    <div className="border border-black bg-white p-5">
      <PageTitle title="About me" />
      <PostBodyContent content={data} />
    </div>
  );
}
