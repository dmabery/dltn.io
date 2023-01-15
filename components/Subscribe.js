import classNames from "classnames";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";


const ErrorMessage = ({ message }) => (
    <p className="text-sm px-3 mt-1 text-red-500 inline-block">{message}</p>
  );

const SuccessMessage = () => (
    <p className="text-sm mt-3 p-3 text-slate-800 bg-green-100 border rounded-md border-success text-success">
      Success. Check your inbox and confirm your email.
    </p>
  );

const Subscribe = ({ title }) => {

    const subscribe = async ({ email }) => {
        const res = await fetch(`/api/subscribe?email=${email}`);
    };
    // prevent submitting invalid or empty emails
    const { register, errors, handleSubmit } = useForm();

    const { 
        mutate,
        isLoading,
        isSuccess,
        isError,
        error
    }  = useMutation((data) => subscribe(data));
    
    // handle form submit
    const onSubmit = (data) => mutate(data);

    const formClass = classNames({
        "flex items-center rounded-md border-gray-300": true,
        "bg-gray-100 border-gray-100": isLoading,
      });
    
      const inputClass = classNames({
        "appearance-none bg-transparent rounded border w-full text-white mr-3 py-2 px-2 leading-tight focus-within:border-slate-200 focus-within:ring-slate-200": true,
        "opacity-50 cursor-not-allowed": isLoading,
      });
    
      const btnClass = classNames({
        "flex-shrink-0 bg-slate-500 hover:bg-slate-700 text-sm text-white py-2 px-4 rounded": true,
        "opacity-50 cursor-not-allowed": isLoading,
      });

      if (isSuccess) {
        return <SuccessMessage />;
      }

    return (
        <>
            <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
            <div className={formClass}>
                <input
                className={inputClass}
                type="text"
                name="email"
                {...register("email", {
                  required: "Email is required.",
                  pattern: { 
                    value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                    message: "Please enter a valid email."
                },
                })}
                placeholder="albert@einstein.com"
                aria-label="Full name"
                disabled={isLoading}
                />
                <button className={btnClass} disabled={isLoading} type="submit">
                {isLoading ? "Processing" : "Subscribe"}
                </button>
            </div>
            {isError && <ErrorMessage message={error} />}
            </form>
        </>
    );
  };
  
  export default Subscribe;