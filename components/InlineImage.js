import Image from "next/image";

const InlineImage = (props) => (
  <div className="float-right ml-3 mb-3">
    <Image src={props.src} height={300} width={200} />
  </div>
);

export default InlineImage;
