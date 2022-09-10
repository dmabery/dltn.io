import Link from "next/link";

function checkType(type) { 
    switch (type) {
        case 'nav' :
            return "text-slate-300 underline-offset-2 hover:decoration-blue-400 hover:underline hover:decoration-2"
        case 'small' :
            return "text-xs text-slate-500 underline"
        case 'bright' :
            return "text-blue-400 hover:text-amber-300"
    }}

const LinkText = ({ slug, text, type }) => {
    return (
        <Link href ={slug} passHref >
            <a className={`${checkType(type)} font-medium mb-1`}>{text}</a>
         </Link>  
    )
}

export default LinkText;