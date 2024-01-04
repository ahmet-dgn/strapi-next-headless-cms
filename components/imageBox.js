import Container from "./ui/container";
import Row from "./ui/row";
import Title from "./ui/title";
import Card from "./ui/card";
import Link from "next/link";

export function ImageBox() {
  return (
    <Container>
      <Row rowCol="grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-6">
        <Card
          cardImg="/employee/Image-1.jpg"
          textAlign="text-center"
          titleCustom="justify-center"
          cardImgClass="aspect-[1/1] "
        />

        <Card
          cardImg="/employee/Image-2.jpg"
          cardTitle="Lindsay Walton"
          cardImgClass="aspect-[1/1] "
          textAlign="text-center"
          titleCustom="justify-center"
        />

        <Card
          cardImg="/employee/Image-3.jpg"
          cardTitle="Dries Vincent"
          cardImgClass="aspect-[1/1] "
          textAlign="text-center"
          titleCustom="justify-center"
        />
        <Card
          cardImg="/employee/Image-4.jpg"
          cardTitle="Floyd Miles"
          cardImgClass="aspect-[1/1] "
          textAlign="text-center"
          titleCustom="justify-center"
        />
        <Card
          cardImg="/employee/Image-5.jpg"
          cardImgClass="aspect-[1/1] "
          cardTitle="Leonard Krasner"
          textAlign="text-center"
          titleCustom="justify-center"
        />
        <Card
          cardImg="/employee/Image-6.jpg"
          cardImgClass="aspect-[1/1] "
          cardTitle="Leslie Alexander"
          textAlign="text-center"
          titleCustom="justify-center"
        />
      </Row>
    </Container>
  );
}

export function ImageBox2({ products, activeLocale, defaultLocale }) {
  return (
    <Container>
      <Title
        titleDesc={`${
          activeLocale == defaultLocale
            ? "PVC granüller, çeşitli endüstrilerde kullanılarak farklı ürünlerin üretiminde önemli bir rol oynar. PVC'nin esneklik, dayanıklılık ve direnç gibi özellikleri, çeşitli sektörlerde çeşitli kullanım alanlarına olanak sağlar."
            : activeLocale == "en"
            ? "PVC granules play a significant role in the production of various products across different industries. The characteristics of PVC such as flexibility, durability, and resistance enable diverse applications in various sectors."
            : "PVC granüller, çeşitli endüstrilerde kullanılarak farklı ürünlerin üretiminde önemli bir rol oynar. PVC'nin esneklik, dayanıklılık ve direnç gibi özellikleri, çeşitli sektörlerde çeşitli kullanım alanlarına olanak sağlar."
        } `}
      >
        {`${
          activeLocale == defaultLocale
            ? "PVC Granül Kullanım Alanları"
            : activeLocale == "en"
            ? "Uses of PVC Granules "
            : "PVC Granül Kullanım Alanları"
        } `}
      </Title>
      <Row rowCol="grid-cols-1  lg:grid-cols-2  ">
        <Link
          href={
            activeLocale == defaultLocale
              ? products[4].uri
              : `${activeLocale}` + products[4].uri
          }
        >
          <Card
            cardImg={products[4].products.anaResim.node.mediaItemUrl}
            cardImgClass="w-full h-[250px]  md:h-[350px] brightness-50 hover:brightness-[.75] cursor-pointer transition duration-500"
            textAlign="text-center"
            cardImgAlt={
              activeLocale == defaultLocale
                ? products[4].title
                : activeLocale == "en"
                ? products[4].products.ingilizceBaslik
                : products[4].title
            }
            overleyText={
              activeLocale == defaultLocale
                ? products[4].title
                : activeLocale == "en"
                ? products[4].products.ingilizceBaslik
                : products[4].title
            }
          />
        </Link>
        <Row rowCol="grid-cols-1 md:grid-cols-2  ">
          <Link
            href={
              activeLocale == defaultLocale
                ? products[5].uri
                : `${activeLocale}` + products[5].uri
            }
          >
            <Card
              cardImg={products[5].products.anaResim.node.mediaItemUrl}
              cardImgClass="w-full h-[250px]  md:h-[350px] brightness-50 hover:brightness-[.75] cursor-pointer transition duration-500"
              textAlign="text-center"
              cardImgAlt={
                activeLocale == defaultLocale
                  ? products[5].title
                  : activeLocale == "en"
                  ? products[5].products.ingilizceBaslik
                  : products[5].title
              }
              overleyText={
                activeLocale == defaultLocale
                  ? products[5].title
                  : activeLocale == "en"
                  ? products[5].products.ingilizceBaslik
                  : products[5].title
              }
            />
          </Link>
          <Link
            href={
              activeLocale == defaultLocale
                ? products[1].uri
                : `${activeLocale}` + products[1].uri
            }
          >
            <Card
              cardImg={products[1].products.anaResim.node.mediaItemUrl}
              cardImgClass="w-full h-[250px]  md:h-[350px] brightness-50 hover:brightness-[.75] cursor-pointer transition duration-500"
              textAlign="text-center"
              cardImgAlt={
                activeLocale == defaultLocale
                  ? products[1].title
                  : activeLocale == "en"
                  ? products[1].products.ingilizceBaslik
                  : products[1].title
              }
              overleyText={
                activeLocale == defaultLocale
                  ? products[1].title
                  : activeLocale == "en"
                  ? products[1].products.ingilizceBaslik
                  : products[1].title
              }
            />
          </Link>
        </Row>
        <Row rowCol="grid-cols-1 md:grid-cols-2 ">
          <Link
            href={
              activeLocale == defaultLocale
                ? products[0].uri
                : `${activeLocale}` + products[0].uri
            }
          >
            <Card
              cardImg={products[0].products.anaResim.node.mediaItemUrl}
              cardImgClass="w-full h-[250px]  md:h-[350px] brightness-50 hover:brightness-[.75] cursor-pointer transition duration-500"
              textAlign="text-center"
              cardImgAlt={
                activeLocale == defaultLocale
                  ? products[0].title
                  : activeLocale == "en"
                  ? products[0].products.ingilizceBaslik
                  : products[0].title
              }
              overleyText={
                activeLocale == defaultLocale
                  ? products[0].title
                  : activeLocale == "en"
                  ? products[0].products.ingilizceBaslik
                  : products[0].title
              }
            />
          </Link>
          <Link
            href={
              activeLocale == defaultLocale
                ? products[2].uri
                : `${activeLocale}` + products[2].uri
            }
          >
            <Card
              cardImg={products[2].products.anaResim.node.mediaItemUrl}
              cardImgClass="w-full h-[250px]  md:h-[350px] brightness-50 hover:brightness-[.75] cursor-pointer transition duration-500"
              textAlign="text-center"
              cardImgAlt={
                activeLocale == defaultLocale
                  ? products[2].title
                  : activeLocale == "en"
                  ? products[2].products.ingilizceBaslik
                  : products[2].title
              }
              overleyText={
                activeLocale == defaultLocale
                  ? products[2].title
                  : activeLocale == "en"
                  ? products[2].products.ingilizceBaslik
                  : products[2].title
              }
            />
          </Link>
        </Row>
        <Link
          href={
            activeLocale == defaultLocale
              ? products[3].uri
              : `${activeLocale}` + products[3].uri
          }
        >
          <Card
            cardImg={products[3].products.anaResim.node.mediaItemUrl}
            cardImgClass="w-full h-[250px]  md:h-[350px] brightness-50 hover:brightness-[.75] cursor-pointer transition duration-500"
            textAlign="text-center"
            cardImgAlt={
              activeLocale == defaultLocale
                ? products[3].title
                : activeLocale == "en"
                ? products[3].products.ingilizceBaslik
                : products[3].title
            }
            overleyText={
              activeLocale == defaultLocale
                ? products[3].title
                : activeLocale == "en"
                ? products[3].products.ingilizceBaslik
                : products[3].title
            }
          />
        </Link>
      </Row>
    </Container>
  );
}
