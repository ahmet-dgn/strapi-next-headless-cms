import Button from "./ui/buttons";
import Container from "./ui/container";

export default function Footer({ menuData }) {
  const currentYear = new Date().getFullYear();

  const footerMenu = menuData;
  return (
    <footer>
      <div className="bg-gray-900">
        <Container>
          <ul className="text-link-small pt-4  lg:pt-0 lg:pl-0 flex justify-center flex-wrap ">
            {footerMenu
              .filter((menuItem) => !menuItem.parent)
              .map((menu) => (
                <li className="px-4" key={menu.id}>
                  <Button href={menu.path} size="sm" type="link" color="white">
                    {menu.title}
                  </Button>
                </li>
              ))}
          </ul>

          <p className="text-gray-200 text-center text-tiny-regular">
            © {currentYear} Your Company, Inc. All rights reserved.
          </p>
        </Container>
      </div>
    </footer>
  );
}
