import Link from "next/link";

function checkType(type) { 
    switch (type) {
        case 'nav' :
            return "underline-offset-2 hover:decoration-blue-900 hover:underline hover:decoration"
        case 'small' :
            return "text-xs text-slate-900 underline"
        case 'bright' :
            return "text-blue-700 hover:text-blue-900"
    }}

const LinkText = ({ slug, text, type }) => {
    return (
        <Link href ={slug} passHref >
            <a className={`${checkType(type)} transition-all font-medium mb-1`}>{text}</a>
         </Link>  
    )
}

export default LinkText;