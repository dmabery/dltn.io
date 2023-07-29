---
Title: "Building a Custom React Form Hook"
Tags: ['programming', 'react']
Date: "July 14, 2022"
Description: "Learning in public and using the Feynman technique to teach myself."
Published: True
Slug: "react-form-hook"
Type: "Aside"
---

I'm taking an [advanced React course][1] and instead of powering through the tutorials to finish as fast as I can, I'm trying to slow down and make sure I understand each line of code. Naturally, I wanted to share for others to see and potentially benefit from.

The following lines of code come from a custom React hook to handle basic form submissions.

## The Code

First, I created a function and initialized state for my form inputs. When the hook is called, I can pass default properties to it.

```js
    import  {  useState  }  from  "react";

    export  default  function  useForm(initial  =  [])  {
	    // create a state object for our inputs
	    const  [inputs,  setInputs]  =  useState(initial);
```
I then created a function to handle the change of the form. It first destructures values from the event handler (using let because they will change). I then have some if statements checking to see if the input is a number or file because the behavior will change if either of those are true. Finally, I use the `setInputs` function to copy the current inputs and assign them to the value of the form. The spread operator copies the current inputs and overrides whatever is changed on the form.  I wrote `[name]` because it allows the function to be dynamically used on a form that changes the price, the name, or something else.

 ```js
    function  handleChange(e)  {
	    let  {  value,  name,  type  }  =  e.target;

	    if(type  ===  'number')  {
		value  =  parseInt(value);
    }
	    if(type  ===  'file'){
		    value[0]  =  e.target.files;
	    }

	    setInputs({
		    // copy the exisisting state
		    ...inputs,
		    [name]:  e.target.value,
		 });
	  }
```
Finally, I have some simple functions to reset the form to the initial properties (what was passed when the `useForm` function was called) and clear the form so it's empty.

The `clearForm` function is a bit confusing, but necessary. The `Object.entries` converts each of the inputs to arrays. Within each of those arrays are two other arrays, one for the property and one for the value. I then map over those arrays, destructure the key and value from them and assign new values of empty strings to them all. Finally, that's wrapped in an outer `Object.entries` function to convert those arrays back into an object. Next, I pass the `blankSlate` function to our `setInputs` state to clear the forms with the empty values passed during the mapping.

```js
    function  resetForm()  {
    	setInputs(initial);
    }

    function  clearForm()  {
    	const  blankState  =  Object.fromEntries(
    	Object.entries(inputs).map(([key,  value])  =>  [key,  ''])
	  );
	  setInputs(blankState);
    }
```

In the end, I return each of the functions I want available when I use the hook.

```js
    return  {
	    inputs,
	    handleChange,
	    resetForm,
	    clearForm,
    }
```

[1]: https://advancedreact.com/