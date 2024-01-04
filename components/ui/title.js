export default function Title({ children, titleDesc, align }) {
  const textAlign =
    align === "left"
      ? (align = "text-left")
      : align === "right"
      ? (align = "text-right")
      : (align = "text-center mx-auto");

  const titleClass = `text-h4 lg:text-h3 mb-4 text-on-background-color ${textAlign}`;
  const descClass = `text-small-regular lg:text-normal-regular  text-on-background-color max-w-xl  ${textAlign}`;
  return (
    <div>
      <h3 className={titleClass}>{children}</h3>
      {titleDesc && <p className={descClass}>{titleDesc}</p>}
    </div>
  );
}
