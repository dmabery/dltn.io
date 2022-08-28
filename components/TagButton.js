const TagButton = (props) => {
    return (
        <div className={`${props.btnColor || 'bg-emerald-800'} text-white text-sm inline px-1 rounded py-1 mr-2`}>Title</div>
    )
};

export default TagButton;