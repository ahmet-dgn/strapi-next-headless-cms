import Card from "./ui/card";
import Container from "./ui/container";
import Row from "./ui/row";

export function IconBox() {
  return (
    <Container>
      <Row rowCol="grid-cols-2 sm:grid-cols-4 md:grid-cols-4 ">
        <Card
          cardImg="/icons/phone.svg"
          cardImgHeight="h-12"
          cardTitle="Customer Support"
          cardDesc="Esse voluptate pariatur esse aliqua Lorem nisi commodo esse."
          cardPadding="p-2 sm:p-4"
          textAlign="text-center"
          titleCustom="justify-center items-center"
        ></Card>
        <Card
          cardImg="/icons/truck.svg"
          cardImgHeight="h-12"
          cardTitle="Free Shipping & Return"
          cardDesc="Esse voluptate pariatur esse aliqua Lorem nisi commodo esse."
          cardPadding="p-2 sm:p-4"
          textAlign="text-center"
          titleCustom="justify-center items-center"
        ></Card>
        <Card
          cardImg="/icons/wallet.svg"
          cardImgHeight="h-12"
          cardTitle="Moneyback Guarantee"
          cardDesc="Esse voluptate pariatur esse aliqua Lorem nisi commodo esse."
          cardPadding="p-2 sm:p-4"
          textAlign="text-center"
          titleCustom="justify-center items-center"
        ></Card>
        <Card
          cardImg="/icons/sell.svg"
          cardImgHeight="h-12"
          cardTitle="20% Off Your First Order"
          cardDesc="Esse voluptate pariatur esse aliqua Lorem nisi commodo esse."
          cardPadding="p-2 sm:p-4"
          textAlign="text-center"
          titleCustom="justify-center items-center"
        ></Card>
      </Row>
    </Container>
  );
}
