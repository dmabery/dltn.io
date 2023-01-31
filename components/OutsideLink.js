export default function OutsideLink({ link, text }) {
  return (
    <a
      href={link}
      rel="noreferrer"
      target="_blank"
      className="all hover:decoration-none flex w-fit items-center justify-between gap-1 rounded-lg border-gray-900/40 text-gray-900/70 transition hover:translate-x-1 hover:text-gray-900 hover:no-underline"
    >
      <div>↗︎</div>
      <div>{text}</div>
    </a>
  );
}
