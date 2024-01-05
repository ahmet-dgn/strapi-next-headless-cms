import Layout from "@/components/layout";
import Container from "@/components/ui/container";
import Row from "@/components/ui/row";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import SEO from "@/components/seo";
import { dataUrl } from "@/config";

export default function ProductDetail({ product, menu, generalSettings }) {
  const data = product.data[0];

  const imagesArray = data.attributes.MainImage.data
    ? [
        data.attributes.MainImage.data.attributes.url,
        ...(data.attributes.Image.data?.map((image) => image.attributes.url) ||
          []),
      ].filter((url) => url !== undefined && url !== null && url !== "")
    : [];

  const { t } = useTranslation("common");

  const elementRef = useRef(null);
  const [clientWidth, setClientWidth] = useState(0);

  useEffect(() => {
    if (elementRef.current) {
      const width = elementRef.current.clientWidth;
      setClientWidth(width); // State'e atama yapılıyor
    }
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);

  const sliderForward = (event) => {
    event.preventDefault();
    if (currentIndex >= imagesArray.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const sliderBackward = (event) => {
    event.preventDefault();
    if (currentIndex <= 0) {
      setCurrentIndex(imagesArray.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const sliderMoveByIndex = (index) => {
    setCurrentIndex(index);
  };
  const sliderPosition = clientWidth * currentIndex;

  const seo = {
    metaTitle: data.attributes.Title,
    metaDescription: data.attributes.Description,
  };

  return (
    <>
      <SEO generalSettings={generalSettings} seoData={seo} />

      <Layout menuItems={menu}>
        <Container>
          <Row rowCol="grid-cols-1 md:grid-cols-2">
            <div className="space-y-2">
              <div
                className="relative aspect-[4/3] flex overflow-hidden  select-none w-[728] h-[728] bg-white border rounded group"
                ref={elementRef}
              >
                <div
                  className=" hidden group-hover:block bg-white/20 group-hover:bg-black/60  transition duration-300 ease-linear p-1 lg:p-2 absolute bottom-2/4 z-20 left-4 rounded-full cursor-pointer"
                  onClick={sliderBackward}
                >
                  <svg
                    className="fill-white/75 "
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.0019 2.98505C16.5119 2.49505 15.7219 2.49505 15.2319 2.98505L6.92186 11.2951C6.53186 11.6851 6.53186 12.3151 6.92186 12.7051L15.2319 21.0151C15.7219 21.5051 16.5119 21.5051 17.0019 21.0151C17.4919 20.5251 17.4919 19.7351 17.0019 19.2451L9.76186 11.9951L17.0119 4.74505C17.4919 4.26505 17.4919 3.46505 17.0019 2.98505Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div
                  className="hidden group-hover:block bg-white/20 group-hover:bg-black/60 p-1 lg:p-2 absolute bottom-2/4 z-20 right-4 rotate-180 rounded-full cursor-pointer"
                  onClick={sliderForward}
                >
                  <svg
                    className="fill-white/75"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17.0019 2.98505C16.5119 2.49505 15.7219 2.49505 15.2319 2.98505L6.92186 11.2951C6.53186 11.6851 6.53186 12.3151 6.92186 12.7051L15.2319 21.0151C15.7219 21.5051 16.5119 21.5051 17.0019 21.0151C17.4919 20.5251 17.4919 19.7351 17.0019 19.2451L9.76186 11.9951L17.0119 4.74505C17.4919 4.26505 17.4919 3.46505 17.0019 2.98505Z" />
                  </svg>
                </div>
                {imagesArray.map((image) => (
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={image}
                      fill
                      alt="/"
                      className="object-contain rounded border-transparent transition-transform duration-500 touch-pan-x select-none"
                      style={{ transform: `translateX(-${sliderPosition}px)` }}
                    />
                  </div>
                ))}
              </div>

              <div className=" h-16 md:h-24 flex space-x-2 overflow-hidden rounded">
                {imagesArray.map((image, index) => (
                  <div className="aspect-[1/1] relative  rounded cursor-pointer">
                    <Image
                      src={image}
                      fill
                      alt="/"
                      className={`object-cover rounded  aspect-[1/1]  border-2 hover:border-blue-700 ${
                        currentIndex === index
                          ? `border-blue-700 `
                          : `border-transparent`
                      } `}
                      onClick={() => sliderMoveByIndex(index)}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:px-8 space-y-4">
              <h1 className="text-h2 text-on-background-color">
                {" "}
                {data.attributes.Title}
              </h1>
              <div className="space-y-4">
                <div className="space-y-4 border rounded p-4 bg-gray-100">
                  <p className="lg:flex lg:items-center">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className="ml-0.8 inline-block fill-on-background-color"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M2.99805 21.0013H6.74805L17.808 9.94128L14.058 6.19128L2.99805 17.2513V21.0013ZM4.99805 18.0813L14.058 9.02128L14.978 9.94128L5.91805 19.0013H4.99805V18.0813Z" />
                      <path d="M18.368 3.29128C17.978 2.90128 17.348 2.90128 16.958 3.29128L15.128 5.12128L18.878 8.87128L20.708 7.04128C21.098 6.65128 21.098 6.02128 20.708 5.63128L18.368 3.29128Z" />
                    </svg>
                    <span className="mx-2 text-on-background-color">
                      <span className=" font-bold"> {t("writer")} : </span>{" "}
                      {data.attributes.Writer}
                    </span>{" "}
                  </p>
                  <p className="lg:flex lg:items-center">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className="ml-0.8 inline-block fill-on-background-color w-6"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z" />
                    </svg>
                    <span className="mx-2 text-on-background-color">
                      <span className=" font-bold">{t("publisher")} : </span>{" "}
                      {data.attributes.Publisher}
                    </span>{" "}
                  </p>
                  <p className="lg:flex lg:items-center">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className="ml-0.8 inline-block fill-on-background-color"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M3 11H11V3H3V11ZM5 5H9V9H5V5Z" />
                      <path d="M3 21H11V13H3V21ZM5 15H9V19H5V15Z" />
                      <path d="M13 3V11H21V3H13ZM19 9H15V5H19V9Z" />
                      <path d="M21 19H19V21H21V19Z" />
                      <path d="M15 13H13V15H15V13Z" />
                      <path d="M17 15H15V17H17V15Z" />
                      <path d="M15 17H13V19H15V17Z" />
                      <path d="M17 19H15V21H17V19Z" />
                      <path d="M19 17H17V19H19V17Z" />
                      <path d="M19 13H17V15H19V13Z" />
                      <path d="M21 15H19V17H21V15Z" />
                    </svg>
                    <span className="mx-2 text-on-background-color">
                      <span className=" font-bold">
                        {" "}
                        {t("product_code")} :{" "}
                      </span>{" "}
                      {data.attributes.ProductCode}
                    </span>{" "}
                  </p>
                </div>

                <ReactMarkdown>{data.attributes.Description}</ReactMarkdown>
              </div>
            </div>
          </Row>
        </Container>
      </Layout>
    </>
  );
}

export const getStaticPaths = async ({ locales }) => {
  const localeAll = locales;
  const paths = [];

  for (const locale of localeAll) {
    try {
      const res = await fetch(`${dataUrl}/api/products?locale=${locale}`);
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const products = await res.json();

      const localePaths = products.data.map((product) => ({
        params: { productSlug: product.attributes.Slug.toString() },
        locale: locale,
      }));

      paths.push(...localePaths);
      console.log(localePaths);
    } catch (error) {
      console.error(`Fetch failed for ${locale}:`, error);
    }
  }

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params, locale, defaultLocale }) => {
  const resNav = await fetch(
    `${dataUrl}/api/navigation/render/main-navigation${
      locale === defaultLocale ? "" : "-" + locale
    }`
  );
  const menu = await resNav.json();

  const resSettings = await fetch(
    `${dataUrl}/api/general-site-setting?populate=*`
  );
  const settings = await resSettings.json();
  const generalSettings = settings.data.attributes;

  let translation = undefined;
  const { productSlug } = params;
  const initialRes = await fetch(
    `${dataUrl}/api/products?populate=*&locale=all&filters[Slug][$eq]=${productSlug}`
  );
  const initial = await initialRes.json();

  if (
    locale ===
    initial.data[0].attributes.localizations.data[0].attributes.locale
  ) {
    // Assuming you have a field for storing translated slugs in your products
    const translatedSlug =
      initial.data[0].attributes.localizations.data[0].attributes.Slug;

    const translationRes = await fetch(
      `${dataUrl}/api/products?populate=*&locale=${locale}&filters[Slug][$eq]=${translatedSlug}`
    );
    translation = await translationRes.json();
  }

  return {
    props: {
      menu,
      generalSettings,
      product: translation ? translation : initial,
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
};
