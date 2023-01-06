import { Card, Col, Text } from "@nextui-org/react";

export const Card2 = () => (
  <Card css={{ w: "100%" }} isPressable>
    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
      <Col>
        <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
          Plant a tree
        </Text>
        <Text h4 color="white">
          Contribute to the planet
        </Text>
      </Col>
    </Card.Header>
    <Card.Image
      src="https://cdn.dribbble.com/users/1998175/screenshots/18078238/media/fc3cac71913895a3cdcdbbb23dc105ba.jpg"
      width="100%"
      height={340}
      objectFit="cover"
      alt="Card image background"
    />
  </Card>
);
