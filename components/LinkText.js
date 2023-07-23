import Link from "next/link";

function checkType(type) {
  switch (type) {
    case "nav":
      return "underline-offset-2 text-white hover:decoration-blue-900 hover:underline hover:decoration";
    case "small":
      return "text-xs text-slate-900 underline";
    case "bright":
      return "text-blue-700 hover:text-blue-900";
    default:
    // do nothging
  }
}

const LinkText = ({ slug, text, type }) => (
  <Link href={slug} passHref>
    <a className={`${checkType(type)} mb-1 transition-all`}>{text}</a>
  </Link>
);

export default LinkText;
