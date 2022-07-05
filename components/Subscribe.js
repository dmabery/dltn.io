import { useState } from 'react';



const Subscribe = () => {

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
        <div id="revue-embed" className="p-4 bg-white rounded-lg border border-gray-200 shadow-md sm:p-4 lg:p-6 dark:bg-slate-800 mt-10 mb-10">
            <form action="https://www.getrevue.co/profile/maberydalton/add_subscriber" className="space-y-6" method="post" id="revue-form" name="revue-form"  target="_blank" onSubmit={subscribeMe}>
            <h3 className="text-xl font-medium text-gray-900 dark:text-white -mb-5 -mt-1">Subscribe to My Newsletter</h3>
            <div className="text-sm text-gray-300">
                The Bookshelf is a weekly newsletter for the most thoughtful wonderers in the world. I share the the books, people, and ideas that made the world what it is today.
            </div>
            <div className="flex gap-2">
                <div className="revue-form-group basis-2/3">
                    <input placeholder="Your email address..." type="email" name="member[email]" id="member_email" className="revue-form-field bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" onChange={changeEmail} />
                </div>
                <button className="revue-form-actions basis-1/3">
                    <input type="submit" value="Subscribe" name="member[subscribe]" id="member_submit" className="w-full text-white bg-slate-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-slate-500 dark:hover:bg-slate-400  00 dark:focus:ring-slate-400"/>
                </button>
            </div>
            <div className="text-sm text-white">
                See <a href="https://www.getrevue.co/profile/maberydalton"><span className="text-slate-900 hover:underline hover:decoration-amber-700 hover:decoration-2">past issues</span></a>
            </div>
            </form>

            { success ?
            <span className="text-sm ">{success}</span>

            :

            <span className="text-xs">{error} </span>
        }
    

        </div>
                        
    )
}

export default Subscribe;