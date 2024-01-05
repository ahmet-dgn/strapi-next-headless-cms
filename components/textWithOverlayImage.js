import Container from "./ui/container";
import Image from "next/image";
import TextContent from "./ui/textContent";

export default function TextWithOverlayImage({ data }) {
  const TextWithOverlayImageData = data;
  return (
    <div className="relative w-full h-[40rem] ">
      <Image
        src={TextWithOverlayImageData.Image.data.attributes.url}
        fill
        sizes="100vw"
        className="object-cover brightness-[0.35] "
        alt={TextWithOverlayImageData.Title || "Featured"}
      />
      <Container>
        <div className="absolute  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  sm:text-center  flex justify-center w-full p-4 sm:max-w-lg xl:max-w-6xl ">
          <TextContent
            link={TextWithOverlayImageData.Link || ""}
            ctaText={TextWithOverlayImageData.ButtonName || ""}
            description={TextWithOverlayImageData.Description || ""}
            subTitle={TextWithOverlayImageData.SubTitle || ""}
            title={TextWithOverlayImageData.Title || ""}
            align="center"
            textColor="white"
            btnColor="red"
          />
        </div>
      </Container>
    </div>
  );
}
