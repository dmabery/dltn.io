const SideNote = (props) => (
  <div className="mt-4 mb-5">
    <div className="ml-5 inline translate-y-6 rounded-md bg-gray-700 px-3 py-2 font-mono text-sm text-white">
      {props.title}
    </div>
    <div className="text-md -mt-3 rounded bg-gray-200/60 py-6 py-3 pl-6 pr-6 text-slate-700">
      {props.content}
    </div>
  </div>
);

export default SideNote;
