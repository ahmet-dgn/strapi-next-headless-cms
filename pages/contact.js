import Container from "@/components/ui/container";
import Title from "@/components/ui/title";
import Row from "@/components/ui/row";
import Layout from "@/components/layout";
import Link from "next/link";
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { dataUrl } from "@/config";

export default function Contact({ generalSettings, menu }) {
  const companyName = generalSettings.CompanyName;
  const dataUrl = generalSettings.dataUrl;
  const domain = generalSettings.FrontUrl;
  const logo = generalSettings.Logo.data
    ? `${dataUrl}${generalSettings.Logo.data[0].attributes.url}`
    : "";
  const favicon = generalSettings.Favicon.data
    ? `${dataUrl}${generalSettings.Favicon.data[0].attributes.url}`
    : "";
  const index = generalSettings.Index;
  const { t } = useTranslation("common");
  const { locale, defaultLocale, asPath } = useRouter();

  return (
    <>
      <Head>
        <title>
          {generalSettings && companyName
            ? `${t("contact_title")} - ${companyName}`
            : t("contact_title")}
        </title>
        {!index ? <meta name="robots" content="noindex, nofollow" /> : null}
        <link rel="icon" href={favicon} sizes="any" />
        <meta name="description" content={t("contact_description")} />
        <meta
          property="og:title"
          content={
            generalSettings && companyName
              ? `${t("contact_title")} - ${companyName}`
              : t("contact_title")
          }
        />
        <meta property="og:description" content={t("contact_description")} />
        <meta property="og:image" content={logo} />
        <meta
          property="og:url"
          content={
            locale === defaultLocale
              ? domain + asPath
              : domain + "/" + locale + asPath
          }
        />
      </Head>
      <Layout menuItems={menu}>
        <Container>
          <Row rowCol="grid-cols-1 md:grid-cols-2">
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d192697.88850536282!2d28.8473727310983!3d41.005463242987815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa7040068086b%3A0xe1ccfe98bc01b0d0!2zxLBzdGFuYnVs!5e0!3m2!1str!2str!4v1704184302484!5m2!1str!2str"
                width="600"
                height="450"
                className="rounded w-full"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div className="mt-4 md:mt-0 lg:ml-8 space-y-8 flex flex-col justify-center ">
              <Title align="left" titleDesc={t("contact_description")}>
                {t("contact_title")}
              </Title>
              <div className="space-y-2">
                <div className="flex space-x-2 items-center">
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    className="fill-on-background-color"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1.25 13.75V26.25H8.75V20H11.25V26.25H18.75V13.75L10 7.5L1.25 13.75ZM16.25 23.75H13.75V17.5H6.25V23.75H3.75V15.0375L10 10.575L16.25 15.0375V23.75Z" />
                    <path d="M23.75 8.75H21.25V11.25H23.75V8.75Z" />
                    <path d="M23.75 13.75H21.25V16.25H23.75V13.75Z" />
                    <path d="M23.75 18.75H21.25V21.25H23.75V18.75Z" />
                    <path d="M12.5 3.75V6.2125L15 8V6.25H26.25V23.75H21.25V26.25H28.75V3.75H12.5Z" />
                  </svg>
                  <p className="text-on-background-color text-h5">
                    {" "}
                    {t("contact_address")}
                  </p>
                </div>
                <p className="text-on-background-color text-small-regular lg:text-normal-regular max-w-md">
                  {generalSettings.Address}
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex space-x-2 items-center">
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 50 50"
                    className="fill-on-background-color"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.95459 31.8087L15.2463 31.2045C16.5171 31.0587 17.7671 31.4962 18.6629 32.392L22.4963 36.2253C28.3921 33.2253 33.2254 28.4128 36.2254 22.4962L32.3713 18.642C31.4754 17.7462 31.0379 16.4962 31.1838 15.2253L31.7879 9.97534C32.0379 7.87118 33.8088 6.28784 35.9338 6.28784H39.5379C41.8921 6.28784 43.8504 8.24618 43.7046 10.6003C42.6004 28.392 28.3713 42.6003 10.6004 43.7045C8.24626 43.8503 6.28792 41.892 6.28792 39.5378V35.9337C6.26709 33.8295 7.85042 32.0587 9.95459 31.8087Z" />
                  </svg>

                  <p className="text-on-background-color text-h5">
                    {t("contact_telephone")}
                  </p>
                </div>
                <Link
                  href={`tel:${generalSettings.Telephone}`}
                  className="text-on-background-color text-small-regular lg:text-normal-regular"
                >
                  {generalSettings.Telephone}
                </Link>
              </div>
              <div className="space-y-2">
                <div className="flex space-x-2 items-center">
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    className="fill-on-background-color"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M25 5H5C3.625 5 2.5125 6.125 2.5125 7.5L2.5 22.5C2.5 23.875 3.625 25 5 25H25C26.375 25 27.5 23.875 27.5 22.5V7.5C27.5 6.125 26.375 5 25 5ZM23.75 22.5H6.25C5.5625 22.5 5 21.9375 5 21.25V10L13.675 15.425C14.4875 15.9375 15.5125 15.9375 16.325 15.425L25 10V21.25C25 21.9375 24.4375 22.5 23.75 22.5ZM15 13.75L5 7.5H25L15 13.75Z" />
                  </svg>

                  <p className="text-on-background-color text-h5">
                    {" "}
                    {t("contact_email")}
                  </p>
                </div>
                <Link
                  href={`mailto:${generalSettings.Email}`}
                  className="text-on-background-color text-small-regular lg:text-normal-regular"
                >
                  {generalSettings.Email}
                </Link>
              </div>
            </div>
          </Row>
        </Container>
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
    `${dataUrl}/api/general-site-setting?populate=*`
  );
  const settings = await resSettings.json();
  const generalSettings = settings.data.attributes;

  return {
    props: {
      menu,
      generalSettings,

      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
