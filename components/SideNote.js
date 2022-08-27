import Image from 'next/image';

const SideNote = (props) => {
    return (
        <div className="mt-4">
                <div className="text-lg translate-y-6 font-bold text-slate-100 bg-slate-900 inline px-3 py-2 rounded-md ml-5">{props.title}</div>
                <div className="text-slate-900 bg-slate-100 pl-6 rounded py-2 border border-blue-300">{props.content}</div>
        </div>
        
    )
}

export default SideNote;