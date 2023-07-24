const SideNote = (props) => (
  <aside className="mt-8 mb-5 rounded-r-md border-l-4 border-blue-700 bg-secondaryBlue px-10 py-5 text-slate-700">
    <div className="text-md mb-2 font-bold">{props.title}</div>
    <div className="leading-md leading-normal">{props.content}</div>
  </aside>
);

export default SideNote;
