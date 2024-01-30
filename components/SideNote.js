const SideNote = (props) => (
  <aside className="mt-8 mb-5 border-2 border-neutral-500 bg-neutral-900 px-10 py-5 text-white">
    <div className="text-md mb-2 font-sansSerif font-bold">{props.title}</div>
    <div className="leading-tight">{props.content}</div>
  </aside>
);

export default SideNote;
