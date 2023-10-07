import Link from "next/link";

export default function PostCard({
  tags,
  image,
  slug,
  title,
  description,
  date,
}) {
  return (
    <div className="min-w-10 mb-5">
      <img
        src={
          image ||
          "https://res.cloudinary.com/dde1q4ekv/image/upload/v1685821933/codioful-formerly-gradienta-n2XqPm7Bqhk-unsplash_adomvu.jpg"
        }
        className="mb-2 rounded-md"
      />
      <div className="mb-1 flex font-mono text-sm text-gray-600">{date}</div>
      <div className="mb-1 flex items-center">
        <h3 className="text-xl leading-tight">
          <Link href={slug} legacyBehavior>{title}</Link>
        </h3>
      </div>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}
