import {
  Container,
  Grid,
  Input,
  Text,
  Col,
  Row,
  Card,
  Image,
} from "@nextui-org/react";

export const Content = () => (
  <>
    <Container
      fluid
      justify="center"
      alignContent="center"
      alignItems="center"
      display="flex"
    >
      <Grid.Container
        justify="center"
        alignContent="center"
        alignItems="center"
      >
        <Grid xs={12} sm={4} justify="center">
          <Col justify="center">
            <Row justify="center">
              <Image
                src={"/404-error.png"}
                objectFit="cover"
                width="50%"
                height="50%"
                alt="404"
              />
            </Row>
            <Row justify="center">
              <Text
                justify="center"
                alignItems="center"
                h1
                size={60}
                css={{
                  textGradient: "45deg, $purple600 -20%, $pink600 100%",
                }}
                weight="bold"
              >
                ERROR 404
              </Text>
            </Row>

            <Row justify="center" xs={5} sm={3} md={3}>
              <Card
                isHoverable
                isPressable
                css={{
                  alignItems: "center",
                }}
                onClick={() => {
                  window.location.href = "/";
                }}
              >
                <Text justify="center" alignItems="center">
                  back to home
                </Text>
              </Card>
            </Row>
          </Col>
        </Grid>
      </Grid.Container>
    </Container>
  </>
);
