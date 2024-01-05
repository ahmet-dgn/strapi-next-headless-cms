import Container from "./ui/container";
import Card from "./ui/card";
import Row from "./ui/row";
import Title from "./ui/title";

export default function Blog({
  data,
  title,
  description,
  backendUrl,
  translation,
}) {
  const blogs = data.data;

  return (
    <Container>
      <Title titleDesc={description}>{title}</Title>
      <Row rowCol="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ">
        <Card
          key={blogs[0].id}
          cardPadding="px-2"
          cardBtn={translation}
          cardLink={`/blogs/${blogs[0].attributes.Slug}`}
          cardImg={blogs[0].attributes.Image.data.attributes.url}
          cardInfo={blogs[0].attributes.Date}
          cardTitle={blogs[0].attributes.Title}
          cardDesc={blogs[0].attributes.Description}
          cardImgAlt={blogs[0].attributes.Title}
          titleCustom="text-normal-bold"
          cardBtnType="link"
          cardImgClass=" aspect-[5/3]"
        ></Card>
        <Card
          key={blogs[1].id}
          cardPadding="px-2"
          cardBtn={translation}
          cardLink={`/blogs/${blogs[1].attributes.Slug}`}
          cardImg={blogs[1].attributes.Image.data.attributes.url}
          cardInfo={blogs[1].attributes.Date}
          cardTitle={blogs[1].attributes.Title}
          cardDesc={blogs[1].attributes.Description}
          cardImgAlt={blogs[1].attributes.Title}
          titleCustom="text-normal-bold"
          cardBtnType="link"
          cardImgClass=" aspect-[5/3]"
        ></Card>
        <Card
          key={blogs[2].id}
          cardPadding="px-2"
          cardBtn={translation}
          cardLink={`/blogs/${blogs[2].attributes.Slug}`}
          cardImg={blogs[2].attributes.Image.data.attributes.url}
          cardInfo={blogs[2].attributes.Date}
          cardTitle={blogs[2].attributes.Title}
          cardDesc={blogs[2].attributes.Description}
          cardImgAlt={blogs[2].attributes.Title}
          titleCustom="text-normal-bold"
          cardBtnType="link"
          cardImgClass=" aspect-[5/3]"
        ></Card>
      </Row>
    </Container>
  );
}
