export default function Label({ children, size, color }) {
  const lableSizeClass =
    size === "md "
      ? "text-link-tiny  "
      : size === "lg"
      ? "text-link-normal "
      : "text-link-tiny ";
  const labelColorClass =
    color === "yellow"
      ? "bg-yellow-400 text-gray-900"
      : color === "red"
      ? "bg-red-700 text-white"
      : "bg-gray-300 text-gray-900";

  const labelClasName = `text-link-normal w-fit h-fit rounded-sm py-1 px-2 inline-block ${lableSizeClass} ${labelColorClass}`;
  return <span className={labelClasName}>{children}</span>;
}
