import { Card, Col, Text } from "@nextui-org/react";

export const Card1 = () => (
  <Card
  isPressable>
    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
      <Col>
        <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
          What to watch
        </Text>
        <Text h4 color="white">
          Stream the Acme event
        </Text>
      </Col>
    </Card.Header>
    <Card.Image
      src="https://cdn.dribbble.com/users/1998175/screenshots/18078238/media/0fa91e011befeab7cdffd8de678c630d.jpg"
      objectFit="cover"
      width="100%"
      height={340}
      alt="Card image background"
    />
  </Card>
);
