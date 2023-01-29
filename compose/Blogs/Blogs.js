/* eslint-disable react/no-unescaped-entities */
import {
  Container,
  Dropdown,
  Modal,
  useModal,
  Card,
  Row,
  Text,
  Spacer,
  Image,
  Grid,
  Button,
  Loading,
  Col,
  Link,
  Progress,
  Popover,
  User,
  Input,
} from "@nextui-org/react";
import React from "react";

export const Content = () => {
  const list = [
    {
      title: "dribbble",
      sub_title: "Login / Register - Mobile App",
      img: "https://cdn.dribbble.com/users/3894633/screenshots/15889044/media/cb1be7f656b2f2337d9fbfd935fb78c4.png",
      redirect: "https://cdn.dribbble.com/users/3894633/screenshots/15889044/media/cb1be7f656b2f2337d9fbfd935fb78c4.png",
    },
    {
      title: "dribbble",
      sub_title: "Street Assets 🌞🌴🔥",
      img: "https://cdn.dribbble.com/users/999849/screenshots/20503976/media/3706af6e5ff1740a69cf51ba7ba704b4.png",
      redirect: "https://cdn.dribbble.com/users/999849/screenshots/20503976/media/3706af6e5ff1740a69cf51ba7ba704b4.png",
    },
    {
      title: "dribbble",
      sub_title: "Ecommerce app - Mobile App",
      img: "https://cdn.dribbble.com/userupload/4407453/file/original-ea78a92e449240adb154239a6578d99f.jpg?compress=1&resize=1024x768",
      redirect: "https://cdn.dribbble.com/userupload/4407453/file/original-ea78a92e449240adb154239a6578d99f.jpg?compress=1&resize=1024x768",
    },
    {
      title: "dribbble",
      sub_title: "E/D Mobile Version",
      img: "https://cdn.dribbble.com/userupload/3899021/file/original-05b464f4fb3f16465792ba0f042470c0.png?compress=1&resize=1024x768",
      redirect: "https://cdn.dribbble.com/userupload/3899021/file/original-05b464f4fb3f16465792ba0f042470c0.png?compress=1&resize=1024x768",
    },
    {
      title: "dribbble",
      sub_title: "File manager mobile app",
      img: "https://cdn.dribbble.com/users/7476807/screenshots/20000207/media/5b431a62af52d169cd4918af64922586.png",
      redirect: "https://cdn.dribbble.com/users/7476807/screenshots/20000207/media/5b431a62af52d169cd4918af64922586.png",
    },
  ];

  const { setVisible, bindings } = useModal();

  return (
    <>
      <Container fluid sm justify="center">
        <Grid.Container gap={2} justify="center">
          <Grid>
            <Row justify="center">
              <Text
                h1
                size={40}
                css={{
                  textAlign: "center",
                  textGradient: "45deg, $blue600 -20%, $pink600 50%",
                }}
                weight="bold"
              >
                Start. learn. Build. produce. Grow.
              </Text>
            </Row>
          </Grid>

          <Grid justify="center">
            <Row justify="center">
              <Text
                justify="center"
                css={{
                  textAlign: "center",
                }}
              >
                Whether you’re starting out, or scaling to meet
                <br />
                demand, connect with the right people, products, and best
                practices
                <br />
                to help your startup grow.
              </Text>
            </Row>
          </Grid>

          <Grid.Container justify="center">
            <Grid>
              <Button
                auto
                color="gradient"
                flat
                rounded
                css={{
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: "10px",
                }}
              >
                UI/UX Concepts below
              </Button>
            </Grid>
          </Grid.Container>
        </Grid.Container>
      </Container>

      <Container>
        <Col>
          <Grid.Container gap={2} justify="flex-start">
            {list.map((item, index) => (
              <Grid xs={12} sm={6} md={4} key={index}>
                <Card
                  css={{ w: "100%", h: "400px" }}
                  isHoverable
                  isPressable
                  variant="bordered"
                  //onClick={() => {
                  //  window.location.href = item.redirect;
                  //}}
                >
                  <Card.Body css={{ p: 0 }}>
                    <Card.Image
                      src={item.img}
                      width="100%"
                      height="100%"
                      objectFit="cover"
                      alt="Card example background"
                    />
                  </Card.Body>

                  <Card.Footer
                    isBlurred
                    css={{
                      position: "absolute",
                      bgBlur: "#ffffff66",
                      borderTop:
                        "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
                      bottom: 0,
                      zIndex: 1,
                    }}
                  >
                    <Row>
                      <Col>
                        <Text color="#000" size={12}>
                          {item.title}
                        </Text>
                        <Text color="#000" size={12}>
                          {item.sub_title}
                        </Text>
                      </Col>
                      <Col>
                        <Row justify="flex-end">
                          <Button
                            flat
                            auto
                            rounded
                            color="secondary"
                            size="sm"
                            onClick={() => {
                              window.location.href = item.redirect;
                            }}
                          >
                            <Text css={{ color: "inherit" }}>download</Text>
                          </Button>
                        </Row>
                      </Col>
                    </Row>
                  </Card.Footer>
                </Card>
              </Grid>
            ))}
          </Grid.Container>
        </Col>
      </Container>

      <Spacer y={1} />

      <Container>
        <Grid.Container>
          <Grid xs={12} sm={6} justify="flex-start">
            <Col>
              <Text>Lets Talk</Text>
              <Text h3>Let’s stay in touch!</Text>
            </Col>
          </Grid>

          <Grid xs={12} sm={6} justify="flex-end">
            <Button
              flat
              rounded
              size="md"
              color="gradient"
              auto
              css={{
                color: "#fff",
              }}
            >
              contact
            </Button>
          </Grid>
        </Grid.Container>
      </Container>

      <Spacer y={1} />

      <Container>
        <Grid.Container xs={12} sm={12}>
          <Grid>
            <Progress color="secondary" size="xs" value={100} />
          </Grid>
        </Grid.Container>
      </Container>

      <Container>
        <Grid.Container>
          <Grid xs={12} sm={6} justify="flex-start">
            <Col>
              <Text>
                A group of simple, open source Android apps without ads and
                unnecessary permissions, with customizable colors.
              </Text>
            </Col>
          </Grid>
        </Grid.Container>
      </Container>

      <Spacer y={1} />
      <Spacer y={1} />

      <Container>
        <Grid.Container>
          <Grid xs={12} sm={6} justify="flex-start">
            <Image
              alt="twitter"
              src="/logo_autum.png"
              height="35px"
              width="35px"
              objectFit="cover"
            />

            <Container>
              <Col>
                <Text>Replacing your Android apps one by one since 2016.</Text>
                <Text>Copyright © 2023, All Rights Reserved.</Text>
              </Col>
            </Container>
          </Grid>

          <Grid xs={12} sm={6} justify="flex-end">
            <Grid justify="center">
              <Row justify="center">
                <Grid xs={12} sm={6} gap={2} justify="center">
                  <Image
                    alt="icon "
                    height="35px"
                    width="100%"
                    src="/icon-socials.svg"
                  />
                </Grid>
                <Grid xs={12} sm={6} gap={2} justify="center">
                  <Image
                    alt="twitter"
                    src="/telegram.svg"
                    height="35px"
                    width="35px"
                    objectFit="cover"
                  />
                  <Image
                    alt="twitter"
                    src="/twitter.svg"
                    height="35px"
                    width="35px"
                    objectFit="cover"
                  />
                  <Image
                    alt="twitter"
                    src="/github.svg"
                    height="35px"
                    width="35px"
                    objectFit="cover"
                  />
                  <Image
                    alt="twitter"
                    src="/gmail.svg"
                    height="35px"
                    width="35px"
                    objectFit="cover"
                  />
                </Grid>
              </Row>
            </Grid>
          </Grid>
        </Grid.Container>
      </Container>

      <Spacer y={1} />
      <Spacer y={1} />
    </>
  );
};
