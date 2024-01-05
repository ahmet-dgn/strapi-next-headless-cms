import { useState } from "react";
import Container from "./ui/container";
import Row from "./ui/row";
import Title from "./ui/title";
import Card from "./ui/card";
import Link from "next/link";

export default function FeaturedProducts({ data, backendUrl, translation }) {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const products = data.products.data;

  const handleCategoryFilter = (category) => {
    setSelectedCategory(category === `${translation}` ? null : category);
  };

  const filteredProducts = selectedCategory
    ? products.filter(
        (product) =>
          product.attributes.category &&
          product.attributes.category.data.attributes.Title.toLowerCase() ===
            selectedCategory.toLowerCase()
      )
    : products;

  const categories = [
    translation,
    ...new Set(
      products
        .filter((product) => product.attributes.category)
        .map((product) => product.attributes.category.data.attributes.Title)
    ),
  ];

  return (
    <Container>
      <Title titleDesc={data.Description}>{data.Title}</Title>
      <div className="flex gap-4 justify-center flex-wrap">
        {categories.map((category, index) => (
          <span
            key={index}
            className={`min-h-[2.5rem] px-4 text-link-normal text-primary-color border-2 border-primary-color hover:bg-primary-color/20 flex items-center justify-center w-fit rounded cursor-pointer ${
              selectedCategory === category ? "bg-primary-color text-white" : ""
            } `}
            onClick={() => handleCategoryFilter(category)}
          >
            {category}
          </span>
        ))}
      </div>

      <Row rowCol="grid-cols-2 min-[475px]:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-6">
        {filteredProducts.map((product) => (
          <Link href={`/products/${product.attributes.Slug}`} key={product.id}>
            <Card
              cardInfo={product.attributes.Writer}
              cardTitle={product.attributes.Title}
              cardImg={product.attributes.MainImage.data.attributes.url}
              cardPadding="p-2 xl:p-4"
              cardBorder="border hover:shadow-xl transition-shadow duration-300 hover:border-gray-400"
              cardBgColor="bg-surface-color"
              cardImgClass="aspect-[3/5]"
            />
          </Link>
        ))}
      </Row>
    </Container>
  );
}
