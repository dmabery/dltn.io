export default async function handler(req, res) {

    const { email } = req.body;
    if (!email) {
        return res.status(400).json({error: 'Please provide an email id.'});
    }

    try{
        const API_KEY = '1RNwsmlm1zPRHbI9baVM3cQk4PS6xMbH';
        const response = await fetch(
                        'https://www.getrevue.co/api/v2/subscribers',
                {
                    method: 'POST',
                    body: JSON.stringify({email: email, double_opt_in: true}),
                    headers: {
                        'Authorization': `Token ${API_KEY}`,
                        'Content-Type': 'application/json'
                    }
            }
        )

        if (response.status >=400) {
            const message = await response.json();
            console.log(message.error.email[0]);
            return res.status(400).json({error: message.error.email[0]});
        }

        res.status(201).json({
            message: `Thanks! Please check your email and verify it. Happy learning.`,
            error: ''
        });
    }

    catch (err) {

        return res.status(500).json({error: err.message || error.toString()});
    }
}