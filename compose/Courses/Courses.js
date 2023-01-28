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
import YouTube from "react-youtube";

export const Content = () => {
  const list = [
    {
      title: "NextJS + Firebase V9 Authentication tutorial",
      read_me: "Let's look at how can we add Authentication with Firebase in a Next.js project...",
      url_link: "ZmpO65DhRN0",
    },
    {
      title: "The Ultimate NEXT.JS 13 Tutorial (Complete Walkthrough w/ Examples)",
      read_me:
        "📬 Do you want DAILY coding problems sent DIRECTLY to your Inbox? (with solutions the next day)...",
      url_link: "6aP9nyTcd44",
    },
    {
      title: "The Ultimate NEXT.JS 13 Tutorial (Complete Walkthrough w/ Examples)",
      read_me:
        "📬 Do you want DAILY coding problems sent DIRECTLY to your Inbox? (with solutions the next day)...",
      url_link: "6aP9nyTcd44",
    },
    {
      title: "The Ultimate NEXT.JS 13 Tutorial (Complete Walkthrough w/ Examples)",
      read_me:
        "📬 Do you want DAILY coding problems sent DIRECTLY to your Inbox? (with solutions the next day)...",
      url_link: "6aP9nyTcd44",
    },
    {
      title: "The Ultimate NEXT.JS 13 Tutorial (Complete Walkthrough w/ Examples)",
      read_me:
        "📬 Do you want DAILY coding problems sent DIRECTLY to your Inbox? (with solutions the next day)...",
      url_link: "6aP9nyTcd44",
    },
    {
      title: "The Ultimate NEXT.JS 13 Tutorial (Complete Walkthrough w/ Examples)",
      read_me:
        "📬 Do you want DAILY coding problems sent DIRECTLY to your Inbox? (with solutions the next day)...",
      url_link: "6aP9nyTcd44",
    },
    {
      title: "The Ultimate NEXT.JS 13 Tutorial (Complete Walkthrough w/ Examples)",
      read_me:
        "📬 Do you want DAILY coding problems sent DIRECTLY to your Inbox? (with solutions the next day)...",
      url_link: "6aP9nyTcd44",
    }
  ];

  return (
    <>
      <Container>
        <Grid.Container gap={2} justify="flex-start">
          {list.map((item, index) => (
            <Grid xs={12} sm={4} key={index}>
              <Card
                variant="bordered"
                css={{ mw: "400px", zIndex: 2 }}
                isHoverable
                isPressable
                onClick={() => {
                  window.location.href =
                    "https://www.youtube.com/watch?v="+item.url_link;
                }}
              >
                <Card.Body css={{ p: 0 }}>
                  <YouTube
                    videoId={item.url_link}
                    opts={{
                      height: "250",
                      width: "100%",
                      borderRadius: "30px",
                      playerVars: {
                        autoplay: 1,
                      },
                      pauseVideo: true,
                    }}
                    rounded
                    css={{
                      borderRadius: "30px",
                    }}
                    onReady={(event) => {
                      event.target.pauseVideo();
                    }}
                  />
                </Card.Body>

                <Card.Footer
                  isBlurred
                  css={{
                    top: 0,
                    p: 0,
                    bottom: 0,
                    zIndex: 1,
                  }}
                >
                  <Grid>
                    <Text h3
                      css={{
                        textGradient: "45deg, $blue600 -20%, $pink600 50%",
                      }}
                     size={16}
                     weight="bold">
                      {item.title}
                    </Text>
                    <Text>
                      {item.read_me}
                    </Text>
                  </Grid>
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
