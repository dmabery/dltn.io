import SignUpForm from './SubscribeForm';

const SubscribeGroup = ({title, caption}) => {
    return (
        <div id="revue-embed" className="rounded-lg px-5 py-5 bg-slate-800 border border-blue-300 mb-10">
            <div className="md:text-xl font-medium text-neutral-100">{title}</div>
            <div className="text-sm text-neutral-300 mt-1 max-w-xl">
                {caption}
            </div>
            <SignUpForm />
            </div>              
    )
}
export default SubscribeGroup;