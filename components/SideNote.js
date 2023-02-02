const SideNote = (props) => (
  <aside className="mt-8 mb-5 px-10 py-5 border-blue-700 border-l-4 rounded-r-md text-slate-700 bg-secondaryBlue">
    <div className="font-bold text-md mb-2">
      {props.title}
    </div>
    <div className="leading-md leading-normal">
      {props.content}
    </div>
  </aside>
);

export default SideNote;
