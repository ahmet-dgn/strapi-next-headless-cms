import Head from "next/head";
import { dataUrl } from "@/config";

export default function SEO({ generalSettings, seoData }) {
  const domain = generalSettings.FrontUrl;
  const companyName = generalSettings.CompanyName;
  const logo = generalSettings.Logo.data
    ? generalSettings.Logo.data[0].attributes.url
    : "";
  const favicon = generalSettings.Favicon.data
    ? generalSettings.Favicon.data[0].attributes.url
    : "";
  const index = generalSettings.Index;
  return (
    <Head>
      <title>
        {seoData && seoData.metaTitle
          ? `${seoData.metaTitle} | ${companyName} `
          : companyName && companyName
          ? companyName
          : ""}
      </title>
      {!index ? <meta name="robots" content="noindex, nofollow" /> : null}
      <link rel="icon" href={favicon} sizes="any" />
      <meta
        name="description"
        content={
          seoData && seoData.metaDescription ? seoData.metaDescription : ""
        }
      />
      <meta
        property="og:title"
        content={
          seoData && seoData.metaTitle
            ? `${seoData.metaTitle} | ${companyName} `
            : companyName && companyName
            ? companyName
            : ""
        }
      />
      <meta
        property="og:description"
        content={
          seoData && seoData.metaDescription ? seoData.metaDescription : ""
        }
      />
      <meta property="og:image" content={logo} />
      <meta property="og:url" content={domain} />
    </Head>
  );
}
