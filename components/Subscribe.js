import Script from 'next/script'

const Subscribe = () => {
    return (
        <div id="revue-embed" className="p-4 bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8 dark:bg-gray-900 mt-7 mb-7">
            <form action="https://www.getrevue.co/profile/maberydalton/add_subscriber" className="space-y-6" method="post" id="revue-form" name="revue-form"  target="_blank">
            <h3 class="text-xl font-medium text-gray-900 dark:text-white -mb-5">Subscribe to The Bookshelf</h3>
            <div className="text-sm">
                A weekly newsletter that will make you think differently about what you see everyday.
            </div>
            <div className="flex gap-2">
                <div class="revue-form-group basis-2/3">
                    <input placeholder="Your email address..." type="email" name="member[email]" id="member_email" className="revue-form-field bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" />
                </div>
                <div class="revue-form-actions basis-1/3">
                    <input type="submit" value="Subscribe" name="member[subscribe]" id="member_submit" className="w-full text-white bg-slate-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-slate-500 dark:hover:bg-slate-400  00 dark:focus:ring-slate-400"/>
                </div>
            </div>
            <div className="text-sm">
                See <a href="https://www.getrevue.co/profile/maberydalton"><span className="text-amber-300 hover:underline">past issues</span></a>
            </div>
            </form>
        </div>
                        
    )
}

export default Subscribe;