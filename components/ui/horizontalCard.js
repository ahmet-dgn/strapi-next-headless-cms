import Image from "next/image";
import Button from "./buttons";
import Label from "./labels";
import Link from "next/link";
import Row from "./row";

export default function HorizontalCard({
  cardInfo,
  cardTitle,
  cardDesc,
  cardBtn,
  cardBtnType,
  cardPadding,
  cardImg,
  cardLink,
  cardBorder,
  cardBgColor,
  cardImgAlt,
  cardImgClass,
  textAlign,
  titleCustom,
  overleyText,
  label,
  labelColor,
}) {
  const cardImageContainer = `relative w-full  `;
  const titleClasses = `text-small-bold text-on-surface-color  overflow-hidden text-ellipsis line-clamp-2 flex ${titleCustom} `;
  const cardImageClass = `object-cover rounded ${cardImgClass}`;
  const cardTextAreClasses = `space-y-2 ${textAlign} flex flex-col justify-center`;
  //Aşağıda ki değişken sitiller eğer kompenenten gelmiyorsa card csslerine eklenmiyor.
  const cardContainerClasses = [
    cardPadding && `${cardPadding}`,
    "h-fit",
    "overflow-hidden",
    "rounded",
    cardBorder && `${cardBorder}`,
    "border-gray-300",
    " transition-shadow duration-300 ",
    "space-y-4",
    cardBgColor && `${cardBgColor}`,
    ,
  ]
    .filter(Boolean)
    .join(" ");
  return (
    <>
      <div className={cardContainerClasses}>
        <Row rowCol="grid-cols-1 md:grid-cols-2 ">
          <div className={cardImageContainer}>
            <Image
              src={cardImg}
              width={700}
              height={300}
              className={cardImageClass}
              alt={cardImgAlt}
            />
            <p className=" w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  text-center text-white text-h5">
              {overleyText}
            </p>
          </div>

          {cardInfo || cardTitle || cardDesc || cardBtn ? (
            <div className={cardTextAreClasses}>
              {label && <Label color={labelColor}>{label}</Label>}
              <div>
                {cardInfo && (
                  <p className="text-link-tiny text-on-surface-color h-5 overflow-hidden text-ellipsis line-clamp-1">
                    {cardInfo}
                  </p>
                )}
                {cardTitle && <p className={titleClasses}>{cardTitle}</p>}
              </div>

              {cardDesc && (
                <p className="text-small-regular text-on-surface-color line-clamp-3 h-20 overflow-hidden text-ellipsis">
                  {cardDesc}
                </p>
              )}
              <div className="w-full flex justify-end !mt-4">
                {cardBtn && (
                  <Button href={cardLink} size="sm" type={cardBtnType}>
                    {cardBtn}{" "}
                  </Button>
                )}
              </div>
            </div>
          ) : null}
        </Row>
      </div>
    </>
  );
}
