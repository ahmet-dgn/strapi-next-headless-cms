import Container from "./ui/container";
import Image from "next/image";
import Row from "./ui/row";
import TextContent from "./ui/textContent";

export default function HeroSection({ data, backendUrl }) {
  const HeroSectionData = data;

  return (
    <div>
      <Container>
        <Row rowCol="grid-cols-1 md:grid-cols-2 ">
          <div className="lg:pr-8 ">
            {HeroSectionData.Image.data && (
              <Image
                src={`${backendUrl}${HeroSectionData.Image.data.attributes.url}`}
                width={700}
                height={475}
                className="object-contain rounded aspect-[4/3]"
                alt={HeroSectionData.Title || "About Us"}
              />
            )}
          </div>
          <div
            className={`flex flex-col justify-center ${
              HeroSectionData.ImagePosition === "Right" ? "order-first" : ""
            }`}
          >
            <TextContent
              description={HeroSectionData.Description || ""}
              title={HeroSectionData.Title || ""}
              subTitle={HeroSectionData.SubTitle || ""}
              link={HeroSectionData.Link || ""}
              ctaText={HeroSectionData.ButtonName || ""}
              overLineText={HeroSectionData.OverLineText || ""}
            />
          </div>
        </Row>
      </Container>
    </div>
  );
}
