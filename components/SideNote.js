const SideNote = (props) => {
    return (
        <div className="mt-4 mb-5">
            <div className="font-mono text-sm text-white bg-gray-700 inline px-3 py-2 rounded-md ml-5 translate-y-6">{props.title}</div>
            <div className="-mt-3 text-slate-700 text-md bg-gray-200/60 py-6 pl-6 pr-6 rounded py-3">{props.content}</div>
        </div>
        
    )
}

export default SideNote;