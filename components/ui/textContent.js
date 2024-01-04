import Label from "./labels";
import Button from "./buttons";
export default function TextContent({
  link,
  ctaText,
  description,
  subTitle,
  title,
  overLineText,
  label,
  labelColor,
  align,
  btnColor,
  textColor,
}) {
  const textAlignClass =
    align === "center"
      ? "flex flex-col justify-center space-y-4 lg:max-w-lg xl:max-w-xl mt-4 lg:mt-0 text-center items-center"
      : "flex flex-col justify-center space-y-4 lg:max-w-lg xl:max-w-xl mt-4 lg:mt-0 ";

  let overLineTextClass;
  let titleClass;
  let subTitleClass;
  let descriptionClass;

  if (textColor === "white") {
    overLineTextClass = "text-normal-regular text-white uppercase";
    titleClass = "text-h4 lg:text-h3 text-white";
    subTitleClass = "text-white text-normal-medium";
    descriptionClass = "text-white text-normal-regular ";
  } else {
    overLineTextClass =
      "text-normal-regular  text-on-background-color uppercase";
    titleClass = "text-h4 lg:text-h3 text-on-background-color";
    subTitleClass = "text-on-background-color text-normal-medium ";
    descriptionClass = "text-on-background-color text-normal-regular ";
  }

  return (
    <div className={textAlignClass}>
      {label && (
        <Label size="lg" color={labelColor}>
          {label}
        </Label>
      )}
      {overLineText || title ? (
        <div className="space-y-2">
          <p className={overLineTextClass}>{overLineText}</p>
          <h3 className={titleClass}>{title}</h3>
        </div>
      ) : null}
      {subTitle && <p className={subTitleClass}>{subTitle}</p>}
      {description && <p className={descriptionClass}>{description}</p>}
      {link && (
        <Button href={link} color={btnColor}>
          {ctaText || "İncele"}
        </Button>
      )}
    </div>
  );
}
