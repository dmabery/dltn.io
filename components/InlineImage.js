import Image from "next/image";

const InlineImage = (props) => (
  <div className="float-right ml-3 mb-3">
    <a href={props.url} target="_blank">
      <Image src={props.src} height={300} width={200} />
    </a>
  </div>
);

export default InlineImage;
