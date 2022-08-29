const TagButton = ({ btnColor, btnText }) => {
    return (
        <div className={`${btnColor || 'bg-blue-500'} text-white grow-0 flex-none inline text-xs font-mono tracking-wide  px-1 rounded py-0.5 mr-2`}>{btnText}</div>
    )
};

export default TagButton;