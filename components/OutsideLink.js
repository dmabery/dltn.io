export default function OutsideLink({ link, text }) {
  return (
    <a
      href={link}
      rel="noreferrer"
      target="_blank"
      className="flex gap-1 justify-between hover:no-underline items-center w-fit rounded-lg border-gray-900/40 text-gray-900/70 hover:text-gray-900 hover:translate-x-1 transition all hover:decoration-none"
    >
      <div>↗︎</div>
      <div>{text}</div>
    </a>
  );
}
