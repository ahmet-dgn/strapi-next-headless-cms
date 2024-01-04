import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import Button from "./ui/buttons";

export default function TopHeader() {
  const { locale: activeLocale, locales, asPath, defaultLocale } = useRouter();
  const activeLocales = locales.filter((locale) => locale !== activeLocale);

  return (
    <div className="border-b">
      <div className="flex justify-between items-center 2xl:container mx-auto px-4 xl:px-8 h-10">
        <div className="flex">
          {/* <div className="hidden sm:flex  justify-center items-center">
            {twitter || instagram || facebook ? (
              <p className="text-small-regular text-on-top-header">
                Bizi Takip Edin!
              </p>
            ) : null}
            <div className="flex justify-center items-center ml-4 space-x-1">
              {twitter && (
                <Link href={twitter}>
                  <svg
                    className={`fill-on-top-header hover:fill-on-top-header/60 mr-1`}
                    width="15"
                    height="15"
                    viewBox="0 0 1001 937"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2.44 0L388.83 516.64L0 936.69H87.51L427.93 568.93L702.98 936.69H1000.78L592.65 390.99L954.57 0H867.06L553.55 338.7L300.24 0H2.44ZM131.13 64.46H267.94L872.07 872.22H735.26L131.13 64.46Z" />
                  </svg>
                </Link>
              )}

              {instagram && (
                <Link href={instagram}>
                  <svg
                    className={`fill-primary-color hover:fill-primary-color/60 mr-1`}
                    width="18"
                    height="18"
                    viewBox="0 0 25 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M8.83289 12.0074C8.829 9.79857 10.6167 8.00424 12.8251 8.00039C15.0339 7.99608 16.8286 9.78301 16.8329 11.9922C16.8371 14.2015 15.0494 15.9954 12.8402 15.9997C10.6319 16.0039 8.83716 14.2166 8.83289 12.0074ZM6.67158 12.0117C6.67819 15.4149 9.44217 18.1676 12.8446 18.161C16.2473 18.1544 19.0016 15.3912 18.995 11.988C18.9884 8.58591 16.224 5.83158 12.8208 5.83823C9.41841 5.84484 6.66497 8.60921 6.67158 12.0117ZM17.7858 5.58548C17.7874 6.3802 18.4335 7.0237 19.2283 7.02216C20.0233 7.02056 20.6668 6.37476 20.6657 5.58004C20.6641 4.78532 20.0179 4.14145 19.2228 4.14304C18.4278 4.14459 17.7843 4.79076 17.7858 5.58548ZM8.0032 21.7761C6.8333 21.7252 6.198 21.5308 5.77462 21.3679C5.21395 21.151 4.81387 20.8909 4.39279 20.4729C3.97251 20.0533 3.7116 19.6544 3.4927 19.0949C3.32826 18.6715 3.13035 18.037 3.07551 16.8671C3.01602 15.6023 3.00243 15.2228 2.99662 12.0187C2.99038 8.81532 3.00206 8.43582 3.05727 7.16986C3.10738 6.00075 3.30299 5.36461 3.46551 4.94161C3.68245 4.38018 3.94181 3.98085 4.36054 3.55982C4.78003 3.13874 5.17893 2.87863 5.73881 2.65973C6.16186 2.49445 6.79636 2.29809 7.96589 2.24254C9.23143 2.18263 9.6105 2.16984 12.8139 2.1636C16.0179 2.15737 16.3974 2.16866 17.6634 2.22426C18.8324 2.27516 19.4685 2.46881 19.8912 2.63249C20.4522 2.84943 20.8523 3.10804 21.273 3.52753C21.6936 3.94706 21.9545 4.34517 22.1734 4.90626C22.3386 5.32809 22.535 5.96339 22.5903 7.13255C22.6505 8.39808 22.6641 8.77758 22.6699 11.9809C22.6761 15.1851 22.6645 15.5646 22.6089 16.8298C22.558 17.9996 22.3639 18.6354 22.2007 19.0592C21.9837 19.6195 21.7244 20.0195 21.3052 20.4406C20.8861 20.8601 20.4872 21.1218 19.927 21.3407C19.5047 21.5055 18.8694 21.7023 17.7007 21.7579C16.4351 21.8173 16.056 21.831 12.8515 21.8368C9.64819 21.843 9.26916 21.831 8.0032 21.7761ZM7.86324 0.0830978C6.58641 0.143379 5.71434 0.347848 4.95225 0.646489C4.16339 0.954037 3.49467 1.36616 2.82946 2.03413C2.16341 2.70248 1.75438 3.37237 1.44918 4.16203C1.15372 4.92604 0.953474 5.79853 0.897084 7.07616C0.841115 8.35613 0.828271 8.76436 0.834505 12.0229C0.84074 15.2811 0.855084 15.6902 0.916115 16.9705C0.977146 18.247 1.18091 19.1186 1.47951 19.8811C1.78743 20.67 2.19918 21.3384 2.86752 22.004C3.53549 22.6696 4.20581 23.0783 4.99584 23.3839C5.75906 23.6789 6.63187 23.88 7.90913 23.936C9.18905 23.9923 9.59766 24.0048 12.8554 23.9986C16.1147 23.9923 16.5234 23.978 17.8033 23.9173C19.0802 23.8563 19.9514 23.6518 20.7143 23.3539C21.5031 23.0452 22.1719 22.6342 22.8372 21.9659C23.5024 21.2979 23.9114 20.6276 24.2166 19.8376C24.5121 19.0744 24.7131 18.2014 24.7686 16.925C24.8247 15.6443 24.8379 15.2352 24.8316 11.977C24.8254 8.71847 24.8107 8.31024 24.75 7.03069C24.6894 5.75306 24.4849 4.88175 24.1866 4.1189C23.8783 3.33004 23.467 2.66202 22.799 1.99602C22.1311 1.33077 21.4608 0.920943 20.6707 0.616536C19.9071 0.321036 19.0346 0.11966 17.7574 0.0644415C16.4775 0.0076758 16.0689 -0.0047461 12.8099 0.00144141C9.55177 0.0076758 9.14316 0.0216446 7.86324 0.0830978Z" />
                  </svg>
                </Link>
              )}

              {facebook && (
                <Link href={facebook}>
                  <svg
                    className={`fill-primary-color hover:fill-primary-color/60 mr-1`}
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M13.6026 13.4992V23.5H9.85541V13.4992V12.9992H9.35541H6V9.65772H9.35541H9.85541V9.15772V5.84737C9.85541 4.06649 10.3902 2.74425 11.2764 1.86725C12.1638 0.989053 13.4613 0.5 15.0974 0.5C15.9013 0.5 16.7314 0.570829 17.3649 0.642662C17.6127 0.670752 17.8289 0.69883 18 0.722541V3.48869H16.586C15.5356 3.48869 14.7641 3.81584 14.2639 4.38795C13.7747 4.94743 13.6095 5.66801 13.6095 6.33578V9.15772V9.65772H14.1095H17.7382L17.2208 12.9992H14.1026H13.6026V13.4992Z" />
                  </svg>
                </Link>
              )}
            </div>
          </div> */}
        </div>{" "}
        <div className="flex">
          {/* <div className="px-4 group items-center hidden md:flex ">
            <Button
              href={`mailto:${ePostaData} `}
              size="sm"
              type="link"
              color="white"
            >
              <svg
                className={`fill-on-top-header group-hover:fill-on-top-header/60 mr-1`}
                width="20"
                height="20"
                viewBox="0 0 30 30"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M25 5H5C3.625 5 2.5125 6.125 2.5125 7.5L2.5 22.5C2.5 23.875 3.625 25 5 25H25C26.375 25 27.5 23.875 27.5 22.5V7.5C27.5 6.125 26.375 5 25 5ZM23.75 22.5H6.25C5.5625 22.5 5 21.9375 5 21.25V10L13.675 15.425C14.4875 15.9375 15.5125 15.9375 16.325 15.425L25 10V21.25C25 21.9375 24.4375 22.5 23.75 22.5ZM15 13.75L5 7.5H25L15 13.75Z" />
              </svg>
              {ePostaData}
            </Button>
          </div>
          <div className="px-4 group flex items-center">
            <Button
              href={`tel:${telefon} `}
              size="sm"
              type="link"
              color="white"
            >
              <svg
                className={`fill-on-top-header group-hover:fill-on-top-header/60 mr-1`}
                width="20"
                height="20"
                viewBox="0 0 50 50"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.95459 31.8087L15.2463 31.2045C16.5171 31.0587 17.7671 31.4962 18.6629 32.392L22.4963 36.2253C28.3921 33.2253 33.2254 28.4128 36.2254 22.4962L32.3713 18.642C31.4754 17.7462 31.0379 16.4962 31.1838 15.2253L31.7879 9.97534C32.0379 7.87118 33.8088 6.28784 35.9338 6.28784H39.5379C41.8921 6.28784 43.8504 8.24618 43.7046 10.6003C42.6004 28.392 28.3713 42.6003 10.6004 43.7045C8.24626 43.8503 6.28792 41.892 6.28792 39.5378V35.9337C6.26709 33.8295 7.85042 32.0587 9.95459 31.8087Z" />
              </svg>
              {telefon}
            </Button>
          </div> */}
          <ul className="group flex flex-col relative pl-4  ">
            <li className=" cursor-pointer  text-on-top-header hover:text-on-top-header/60 min-h-[2rem] text-link-tiny flex justify-center items-center">
              <Image
                className="object-contain mr-2"
                src={`/icons/flags/${activeLocale}.svg`}
                width={20}
                height={15}
                alt={`${
                  activeLocale == defaultLocale
                    ? "Türkçe"
                    : activeLocale == "en"
                    ? "English"
                    : "Türkçe"
                } `}
              />
              {activeLocale.toUpperCase()}
              <svg
                className={`ml-0.8 inline-block fill-on-top-header group-hover:fill-on-top-header/60`}
                width="24"
                height="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8.12498 8.99999L12.005 12.88L15.885 8.99999C16.275 8.60999 16.905 8.60999 17.295 8.99999C17.685 9.38999 17.685 10.02 17.295 10.41L12.705 15C12.315 15.39 11.685 15.39 11.295 15L6.70498 10.41C6.31498 10.02 6.31498 9.38999 6.70498 8.99999C7.09498 8.61999 7.73498 8.60999 8.12498 8.99999Z" />
              </svg>
            </li>
            <ul className=" h-0 overflow-hidden group-hover:h-fit absolute top-8 left-0 z-50 rounded bg-gray-50 lg:absolute lg:shadow-md lg:bg-white">
              {activeLocales.map((locale) => {
                return (
                  <li key={locale}>
                    <Link
                      className="min-h-[2rem]  text-link-tiny text-on-background-color hover:text-on-background-color/60 flex justify-center items-center px-4"
                      href={asPath}
                      locale={locale}
                    >
                      <Image
                        className="object-contain mr-2"
                        src={`/icons/flags/${locale}.svg`}
                        width={20}
                        height={15}
                        alt={activeLocale}
                      />
                      {locale.toUpperCase()}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </ul>
        </div>
      </div>
    </div>
  );
}
