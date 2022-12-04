const TagButton = ({ btnColor, btnText }) => {
    return (
        <div className={`${btnColor || 'bg-sky-800'} text-white grow-0 flex-none inline text-xs font-mono tracking-wide px-2 rounded py-0.5 mr-2 hover:bg-blue-500`}>{btnText}</div>
    )
};

export default TagButton;