import Image from 'next/image';

const SideNote = (props) => {
    return (
        <div className="mt-4">
            <div className="text-md translate-y-6 font-mono font-bold text-slate-900 bg-slate-100 inline px-3 py-2 rounded-md ml-5 translate-y-6">{props.title}</div>
            <div className="-mt-1 text-slate-100 text-md font-mono bg-slate-700 pl-6 rounded py-3 border border-blue-300">{props.content}</div>
        </div>
        
    )
}

export default SideNote;