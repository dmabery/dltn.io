import Subscribe from "./Subscribe";

export default function IndexCallout() {
  return (
    <div className="flex">
      <div className="container mx-auto flex h-full flex-col gap-2">
        <div className="font-sansSerif text-[22px] font-bold">
          Hi, I'm Dalton
        </div>
        <div className="flex flex-col gap-4 text-[19px] leading-tight">
        <p>
            I'm the digital creator and designer at Farnam Street.
          </p>
          <p>
            I spend my free time <span className="italic">learning</span>, <span className="italic">reading</span>, and <span className="italic">writing</span> about history's most interesting people, ideas, essays, and inventions.
          </p>
            <p>
            Subscribe for new posts and my monthly reading list emails.
            </p>
            <Subscribe />
        </div>
      </div>
    </div>
  );
}
