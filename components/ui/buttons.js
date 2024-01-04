import Link from "next/link";

export default function Button({ children, href, size, type, color }) {
  const btnSizeClass =
    size === "sm"
      ? "min-h-[2rem] px-3 text-link-small "
      : size === "md"
      ? "min-h-[2.5rem] px-4 text-link-normal"
      : size === "lg"
      ? "min-h-[3rem] px-5 text-link-big"
      : "min-h-[2.5rem] px-4 text-link-normal";

  let btnTypeClass = `bg-primary-color text-on-primary-color hover:bg-primary-color/80`;

  if (color === "white") {
    btnTypeClass =
      type === "solid"
        ? `bg-white text-black hover:bg-gray-200`
        : type === "outline"
        ? `text-white border-2 border-white hover:bg-gray-200`
        : type === "link"
        ? `text-white hover:text-gray-200 !px-0`
        : `bg-white text-black hover:bg-gray-200`;
  } else if (color === "red") {
    btnTypeClass =
      type === "solid"
        ? `bg-red-700 text-white hover:bg-red-900`
        : type === "outline"
        ? `text-red-700  border-2 border-red-700  hover:bg-red-900`
        : type === "link"
        ? `text-red-700 hover:text-red-900 !px-0`
        : `bg-red-700 text-white hover:bg-red-900`;
  } else {
    btnTypeClass =
      type === "solid"
        ? `bg-primary-color text-on-primary-color hover:bg-primary-color/80`
        : type === "outline"
        ? `text-primary-color border-2 border-primary-color hover:bg-primary-color/20`
        : type === "link"
        ? `text-primary-color hover:text-primary-color/60 !px-0`
        : `bg-primary-color text-on-primary-color hover:bg-primary-color/80`;
  }

  const buttonClassName = `flex items-center justify-center w-fit rounded  ${btnSizeClass} ${btnTypeClass}`;
  return (
    <Link href={href} className={buttonClassName}>
      {children}
    </Link>
  );
}
