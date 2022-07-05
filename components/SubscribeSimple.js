import { useState } from 'react';



const SubscribeSimple = () => {

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
                setError(message)
            } else {
                setSuccess(message);
            }
        };
    
    const changeEmail = (event) => {
            const email = event.target.value;
            setEmail(email);
        }

    return (
        <div id="revue-embed">
            <form action="https://www.getrevue.co/profile/maberydalton/add_subscriber" className="space-y-6" method="post" id="revue-form" name="revue-form"  target="_blank" onSubmit={subscribeMe}>
            <div className="flex-row">
                <div className="revue-form-group mb-2">
                    <input placeholder="Your email address..." type="email" name="member[email]" id="member_email" className="revue-form-field border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full pl-1.5 pt-1 pb-1 dark:border-gray-500 dark:placeholder-gray-400" onChange={changeEmail} />
                </div>
                <button className="revue-form-actions">
                    <input type="submit" value="Subscribe" name="member[subscribe]" id="member_submit" className="text-white bg-slate-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xs px-5 py-2.5 text-center dark:hover:bg-slate-400 dark:focus:ring-slate-400"/>
                </button>
            </div>
            </form>

            { success ?
            <span className="text-xs text-green-600">{success}</span>

            :

            <span className="text-xs leading-none text-red-600">{error} </span>
        }
    

        </div>
                        
    )
}

export default SubscribeSimple;