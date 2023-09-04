import fs from "fs";
import path from "path";
import PostBodyContent from "../components/PostBodyContent";
import Subscribe from "../components/Subscribe";

export const getStaticProps = async () => {
  const data = fs.readFileSync(path.join("content", "newsletter.md"), {
    encoding: "utf8",
  });

  console.log(data);
  return {
    props: { data },
  };
};

export default function Newsletter({ data }) {
  return (
    <>
      <PostBodyContent content={data} />
      <div className="border border-[#b3b3b3] bg-grayAccent px-5 py-10">
        <Subscribe />
      </div>
    </>
  );
}
