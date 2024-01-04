import Card from "./ui/card";
import Container from "./ui/container";
import Row from "./ui/row";
import Title from "./ui/title";
import Link from "next/link";
export default function NewProdcuts({ backendUrl, data, translation }) {
  const products = data.products.data;

  return (
    <Container>
      <Title titleDesc={data.Description}>{data.Title}</Title>

      <Row rowCol="grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4">
        {products.map((product) => (
          <Link href={`/products/${product.attributes.Slug}`} key={product.id}>
            <Card
              cardInfo={product.attributes.Writer}
              cardTitle={product.attributes.Title}
              cardImg={`${backendUrl}${product.attributes.MainImage.data.attributes.url}`}
              cardPadding="p-2 sm:p-4"
              cardBorder="border hover:shadow-xl transition-shadow duration-300 hover:border-gray-400"
              cardBgColor="bg-surface-color"
              cardImgClass={`aspect-[2/3]`}
              label={translation}
              labelColor="red"
            ></Card>
          </Link>
        ))}
      </Row>
    </Container>
  );
}
