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
      <img
        className="w-full"
        src="https://res.cloudinary.com/dde1q4ekv/image/upload/v1677422401/41dff408ec203f444b0140923834ab3d_fjf6iz.jpg"
      />

      <PostBodyContent content={data} />
      <Subscribe />
    </>
  );
}
