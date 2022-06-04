import Image from 'next/image';

const Callout = (props) => {
    return (
        <div className="rounded-sm bg-gray-300 p-4 border border-neutral-700 prose mt-4">
            <div className="flex">
            <div className="flex-shrink-0 mt-8 mr-2">
                <Image src="/astronaut waving.png" height={60} width={50}  />
                </div>
            <div className="ml-3 pr-10">
                <p className="text-lg mb-3 font-bold text-neutral-700">{props.title}</p>
                <p className="text-neutral-700">{props.content}</p>
            </div>
        </div>
        </div>
        
    )
}

export default Callout;