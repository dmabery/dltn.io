import Subscribe from "./Subscribe";

const SubscribeGroup = ({ title, caption }) => (
  <div className="border border-black bg-[#f8f8f8] px-6 py-6">
    <div className="mb-4 font-sansSerif text-xl font-bold">
      {title || "Subscribe to my newsletter"}
    </div>
    <div className="smt-1 mb-7 leading-tight">
      {caption || (
        <>
          Weekly essays, books, ideas, and other timeless finds that will stoke
          your curiosity and teach you something new.
        </>
      )}
    </div>
    <Subscribe />
  </div>
);
export default SubscribeGroup;
