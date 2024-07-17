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
            I'm a first year law student in Sacramento.
          </p>
          <p>
            I blog about what I learn studying law and reading history.
          </p>
            <p>
            Subscribe for new posts and my monthly digest emails.
            </p>
            <Subscribe />
        </div>
      </div>
    </div>
  );
}
