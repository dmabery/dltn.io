/* eslint-disable import/no-anonymous-default-export */
export default async (req, res) => {
    const { email, tags } = req.query;
 
    if (!email) {
       return res.status(400).json({ error: "Email is required" });
    }
 
    try {
       const MAIN_SUBSCRIBE_FORM = process.env.CONVERTKIT_MAIN_SUBSCRIBE_FORM;
       const API_KEY = process.env.CONVERTKIT_API_KEY;
 
       const data = { email, api_key: API_KEY };
       const response = await fetch(`https://api.convertkit.com/v3/forms/${MAIN_SUBSCRIBE_FORM}/subscribe`, {
          body: JSON.stringify(data),
          headers: {
          "Content-Type": "application/json",
          },
          method: "POST",
       });

       
 
       // Any error from CK return custom message
       if (response.status >= 400) {
          return res.status(400).json({
          error: `There was an error subscribing to the list.`,
          });
       }
 
       return res.status(201).json({ error: "" });
    } catch (error) {
       return res.status(500).json({ error: error.message || error.toString() });
    }
 };