import { Navbar } from "./navbar";
import Footer from "./footer";
import { Poppins } from "next/font/google";
import TopHeader from "./topHeader";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "700"],
});

export default function Layout({ children, menuItems, info }) {
  return (
    <div
      className={`${poppins.variable} font-sans bg-background-color text-normal-regular `}
    >
      {" "}
      <header>
        <TopHeader />
        <Navbar menuData={menuItems} />
      </header>
      <main>{children}</main>
      <Footer menuData={menuItems} />
    </div>
  );
}
