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
import { Box } from "./Box.js";
import { UserTwitterCard } from "./Icons/UserTwitterCard";
import { UserInterface } from "./Icons/UserInterface";
import { DeleteUser } from "./Icons/DeleteUser";

export const Content = () => {
  const { setVisible, bindings } = useModal();
  const list = [
    {
      title: "Googling Users",
      sub_title: "Next UI",
      url_title: "Google",
      img: "https://avatars.githubusercontent.com/u/86160567?s=200&v=4",
      read_me: "Make beautiful websites regardless of your design experience.",
      url_link: "https://www.google.com/",
      redirect: "/",
    },
    {
      title: "Googling Users",
      sub_title: "Next UI",
      url_title: "Google",
      img: "https://avatars.githubusercontent.com/u/86160567?s=200&v=4",
      read_me: "Make beautiful websites regardless of your design experience.",
      url_link: "https://www.google.com/",
      redirect: "/",
    },
  ];

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
                Get Started
              </Button>
            </Grid>
          </Grid.Container>
        </Grid.Container>
      </Container>

      <Container>
        <Grid.Container gap={2} justify="flex-start">
          {list.map((item, index) => (
            <Grid xs={12} sm={4} key={index}>
              <Card
                css={{ mw: "400px" }}
                isHoverable
                isPressable
                onClick={() => {
                  window.location.href = item.redirect;
                }}
              >
                <Card.Header>
                  <Image
                    alt={item.title}
                    src={item.img}
                    width="55px"
                    height="55px"
                  />
                  <Grid.Container css={{ pl: "$6" }}>
                    <Grid xs={12}>
                      <Text h4 css={{ lineHeight: "$xs" }}>
                        {item.title}
                      </Text>
                    </Grid>
                    <Grid xs={12}>
                      <Text css={{ color: "$accents8" }}>{item.sub_title}</Text>
                    </Grid>
                  </Grid.Container>
                </Card.Header>
                <Card.Body css={{ py: "$2" }}>
                  <Text>{item.read_me}</Text>
                </Card.Body>
                <Card.Footer>
                  <Row>
                    <Button
                      flat
                      auto
                      rounded
                      css={{ color: "#94f9f0", bg: "#94f9f026" }}
                    >
                      {" "}
                      <Link
                        icon
                        color="primary"
                        target="_blank"
                        href={item.url_link}
                      >
                        {item.url_title}
                      </Link>
                    </Button>

                    <Text
                      flat
                      auto
                      rounded
                      css={{ color: "#94f9f0", margin: "5px" }}
                    >
                      {" "}
                      <Link
                        icon
                        color="primary"
                        target="_blank"
                        href={item.url_link}
                      >
                        {item.url_title}
                      </Link>
                    </Text>

                    <Text
                      flat
                      auto
                      rounded
                      css={{ color: "#94f9f0", margin: "5px" }}
                    >
                      {" "}
                      <Link
                        icon
                        color="default"
                        target="_blank"
                        href={item.url_link}
                      >
                        {item.url_title}
                      </Link>
                    </Text>
                  </Row>
                </Card.Footer>
              </Card>
            </Grid>
          ))}
        </Grid.Container>
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
