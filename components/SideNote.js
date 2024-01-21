const SideNote = (props) => (
  <aside className="mt-8 mb-5 border border-[#b3b3b3] bg-grayAccent px-10 py-5 text-slate-700">
    <div className="text-md mb-2 font-sansSerif font-bold text-gray-900">
      {props.title}
    </div>
    <div className="leading-md leading-normal text-gray-900/90">
      {props.content}
    </div>
  </aside>
);

export default SideNote;
