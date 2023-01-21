import Subscribe from './Subscribe';

const SubscribeGroup = ({title, caption}) => {
    return (
        <>
        <div id="revue-embed" className="rounded-lg mb-10">
            <div className="md:text-xl mb-2 font-medium text-slate-600">{title}</div>
            <div className="text-sm mb-4 text-neutral-500 mt-1 max-w-xl">
                {caption}
            </div>
            <Subscribe />
        </div>  
        </>
    )
}
export default SubscribeGroup;