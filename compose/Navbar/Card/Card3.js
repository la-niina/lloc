import { Card, Col, Text } from "@nextui-org/react";

export const Card3 = () => (
  <Card css={{ bg: "$black", w: "100%" }}>
    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
      <Col>
        <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
          Supercharged
        </Text>
        <Text h4 color="white">
          Creates beauty like a beast
        </Text>
      </Col>
    </Card.Header>
    <Card.Image
      src="https://cdn.dribbble.com/users/1998175/screenshots/18078238/media/944b1672ad0ba5173440b129ea834573.jpg"
      width="100%"
      height={340}
      objectFit="cover"
      alt="Card image background"
    />
  </Card>
);
