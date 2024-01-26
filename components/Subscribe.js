import classNames from "classnames";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";

const ErrorMessage = ({ message }) => (
  <p className="mt-1 inline-block px-3 text-sm text-red-500">{message}</p>
);

const SuccessMessage = () => (
  <p className="border-success text-success mt-3 rounded-md border border-green-600/80 bg-green-100/80 p-2 text-sm text-green-800">
    The game is afoot! Check your inbox and confirm your email.
  </p>
);

const Subscribe = ({ title, placeholder }) => {
  const subscribe = async ({ email }) => {
    const res = await fetch(`/api/subscribe?email=${email}`);
  };
  // prevent submitting invalid or empty emails
  const { register, errors, handleSubmit } = useForm();

  const { mutate, isLoading, isSuccess, isError, error } = useMutation((data) =>
    subscribe(data)
  );

  // handle form submit
  const onSubmit = (data) => mutate(data);

  const formClass = classNames({
    "flex font-sansSerif items-center rounded-md": true,
    "border-gray-100": isLoading,
  });

  const inputClass = classNames({
    "text-sm appearance-none rounded border border-slate-500 w-full text-gray-900/80 mr-2 py-2 px-2 leading-tight focus:border-gray-900": true,
    "opacity-100 cursor-not-allowed": isLoading,
  });

  const btnClass = classNames({
    "flex-shrink-0 bg-slate-800 hover:bg-gray-900/60 text-sm text-white py-2 px-4 rounded transition-all": true,
    "opacity-50 cursor-not-allowed": isLoading,
  });

  if (isSuccess) {
    return <SuccessMessage />;
  }

  return (
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
              message: "Please enter a valid email.",
            },
          })}
          placeholder={placeholder || "sherlock@holmes.com"}
          aria-label="Full name"
          disabled={isLoading}
        />
        <button className={btnClass} disabled={isLoading} type="submit">
          {isLoading ? "Processing" : "Subscribe"}
        </button>
      </div>
      {isError && <ErrorMessage message={error} />}
    </form>
  );
};

export default Subscribe;
