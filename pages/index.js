import Slider from "@/components/slider";
import NewProdcuts from "@/components/newProducts";
import HeroSection from "@/components/heroSection";
import Blog from "@/components/blog";
import TextWithOverlayImage from "@/components/textWithOverlayImage";
import FeaturedProducts from "@/components/featuredProducts";
import SEO from "@/components/seo";
import { useTranslation } from "next-i18next";
import Layout from "@/components/layout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { dataUrl } from "@/config";

export default function Home({ menu, generalSettings, homePageData, blogs }) {
  const homePage = homePageData.Blocks;
  const { t } = useTranslation("common");

  return (
    <>
      <SEO generalSettings={generalSettings} seoData={homePageData.SEO} />
      <Layout menuItems={menu}>
        {homePage.map((item, index) => {
          switch (item.__component) {
            case "blocks.slider":
              return <Slider key={index} data={item} backendUrl={dataUrl} />;
            case "blocks.hero":
              return (
                <HeroSection key={index} data={item} backendUrl={dataUrl} />
              );
            case "blocks.text-with-overlay-image":
              return (
                <TextWithOverlayImage
                  key={index}
                  data={item}
                  backendUrl={dataUrl}
                />
              );
            case "blocks.new-products":
              return (
                <NewProdcuts
                  key={index}
                  data={item}
                  backendUrl={dataUrl}
                  translation={t("new_label")}
                />
              );
            case "blocks.featured-products":
              return (
                <FeaturedProducts
                  key={index}
                  data={item}
                  backendUrl={dataUrl}
                  translation={t("all_categories")}
                />
              );
            case "blocks.last-blogs":
              return (
                <Blog
                  key={index}
                  data={blogs}
                  title={item.Title}
                  description={item.Description}
                  backendUrl={dataUrl}
                  translation={t("read_more")}
                />
              );
            default:
              return null;
          }
        })}
      </Layout>
    </>
  );
}

export async function getStaticProps({ locale, defaultLocale }) {
  const res = await fetch(
    `${dataUrl}/api/navigation/render/main-navigation${
      locale === defaultLocale ? "" : "-" + locale
    }`
  );
  const menu = await res.json();

  const resSettings = await fetch(
    `${dataUrl}/api/general-site-setting?populate=* `
  );
  const settings = await resSettings.json();
  const generalSettings = settings.data.attributes;

  const resIndex = await fetch(
    `${dataUrl}/api/home?populate=Blocks.Content.Image&populate=Blocks.Image&populate=Blocks.products.MainImage&populate=Blocks.products.category&populate=SEO&locale=${
      locale === defaultLocale ? defaultLocale : locale
    }`
  );
  const index = await resIndex.json();
  const homePageData = index.data.attributes;

  const resBlogs = await fetch(
    `${dataUrl}/api/blogs?populate=Image&populate=blog_categories&populate=MainImage&locale=${
      locale === defaultLocale ? defaultLocale : locale
    }`
  );
  const blogs = await resBlogs.json();
  return {
    props: {
      menu,
      generalSettings,
      homePageData,
      blogs,
      ...(await serverSideTranslations(locale, ["common"])),
    },
    revalidate: 10,
  };
}
