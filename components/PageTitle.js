import Link from 'next/link'

const PageTitle = ({title, description}) => {
    return (
        <div className="flex flex-row">
            <div className="basis-2/3">
                <h2 className="text-[50px] text-gray-900 font-bold"><span className="underline decoration-amber-700">{title}</span></h2>
                {description.length > 0 &&
                    <p className="text-gray-900">{description}</p>
                }
                <br />
            </div>
      </div>
    )
}

export default PageTitle;