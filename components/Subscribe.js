import { useState } from 'react';



const Subscribe = ({title, caption}) => {

    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const subscribeMe = async (event) => {
        event.preventDefault();
        
        const res = await fetch('/api/subscribe', {
        body: JSON.stringify({ email: email }),
        headers: {'Content-Type': 'application/json'},
        method: "POST",
    });
    
        const { error, message } = await res.json();
            if (error) {
                setError(error)
            } else {
                setSuccess(message);
            }
        };
    
    const changeEmail = (event) => {
            const email = event.target.value;
            setEmail(email);
        }

    return (
        <div id="revue-embed" className="rounded-lg border p-5 bg-slate-700 border border-blue-300 mb-10">
            <form action="https://www.getrevue.co/profile/maberydalton/add_subscriber" className="space-y-6" method="post" id="revue-form" name="revue-form"  target="_blank" onSubmit={subscribeMe}>
                <h3 className="text-xl font-medium text-neutral-100 text-white -mb-5">{title}</h3>
                <div className="text-sm text-neutral-300">
                    {caption}
                </div>
                <div className="flex gap-2">
                    <div className="revue-form-group basis-2/3">
                        <input placeholder="Your email address..." type="email" name="member[email]" id="member_email" className="revue-form-field bg-gray-50 border border-gray-300 text-neutral-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" onChange={changeEmail} />
                    </div>
                    <button className="revue-form-actions basis-1/3">
                        <input type="submit" value="Subscribe" name="member[subscribe]" id="member_submit" className="w-full text-white bg-slate-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-slate-500 dark:hover:bg-slate-400  00 dark:focus:ring-slate-400"/>
                    </button>
                </div>
            </form>

            { success ?
            <span>{success}</span>

            :

            <span>{error} </span>
        }
    

        </div>
                        
    )
}

export default Subscribe;