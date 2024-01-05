import Layout from "@/components/layout";
import Container from "@/components/ui/container";
import ReactMarkdown from "react-markdown";
import Head from "next/head";
import Image from "next/image";
import { dataUrl } from "@/config";
import SEO from "@/components/seo";

export default function ProductDetail({ blog, menu, generalSettings }) {
  const data = blog.data[0];

  const seo = {
    metaTitle: data.attributes.Title,
    metaDescription: data.attributes.Description,
  };

  return (
    <>
      <SEO generalSettings={generalSettings} seoData={seo} />

      <Layout menuItems={menu}>
        <Container>
          <div className="max-w-4xl mx-auto space-y-8">
            <Image
              width={896}
              height={400}
              src={
                data.attributes.Image.data
                  ? data.attributes.Image.data.attributes.url
                  : ""
              }
              className="rounded"
            />
            <h1 className="text-h3 text-on-background-color">
              {data.attributes.Title}
            </h1>
            <ReactMarkdown>{data.attributes.Description}</ReactMarkdown>
          </div>
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
      const res = await fetch(`${dataUrl}/api/blogs?locale=${locale}`);
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const blogs = await res.json();

      const localePaths = blogs.data.map((blog) => ({
        params: { blogSlug: blog.attributes.Slug.toString() },
        locale: locale,
      }));

      paths.push(...localePaths);
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
    ` ${dataUrl}/api/general-site-setting?populate=* `
  );
  const settings = await resSettings.json();
  const generalSettings = settings.data.attributes;

  let translation = undefined;
  const { blogSlug } = params;
  const initialRes = await fetch(
    `${dataUrl}/api/blogs?populate=*&locale=all&filters[Slug][$eq]=${blogSlug}`
  );
  const initial = await initialRes.json();

  if (
    locale ===
    initial.data[0].attributes.localizations.data[0].attributes.locale
  ) {
    // Assuming you have a field for storing translated slugs in your blogs
    const translatedSlug =
      initial.data[0].attributes.localizations.data[0].attributes.Slug;

    const translationRes = await fetch(
      `${dataUrl}/api/blogs?populate=*&locale=${locale}&filters[Slug][$eq]=${translatedSlug}`
    );
    translation = await translationRes.json();
  }

  return {
    props: {
      menu,
      generalSettings,
      blog: translation ? translation : initial,
    },
  };
};
