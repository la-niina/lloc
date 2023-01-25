import {
  Container,
  Input,
  Text,
  User,
  Spacer,
  Grid,
  Card,
  Col,
  Row,
  Button,
  Loading,
  Image,
  Progress,
} from "@nextui-org/react";
import { Box } from "./Box.js";
import { SendButton } from "./Card/SendButton";
import { SendIcon } from "./Card/SendIcon";
import { Card1 } from "./Card/Card1";
import { Card2 } from "./Card/Card2";
import { Card3 } from "./Card/Card3";
import { Card4 } from "./Card/Card4";
import { Card5 } from "./Card/Card5";
const list = [
  {
    title: "desktop",
    img: "motherboard.png",
    price: "@",
  },
  {
    title: "mobile",
    img: "phone.png",
    price: "@",
  },
  {
    title: "web",
    img: "websites.png",
    price: "@",
  },
];

export const Content = () => (
  <>
    <Container>
      <Grid.Container gap={2} justify="flex-start">
        <Grid>
          <Row justify="flex-start">
            <Text h1 size="$4xl" xs={0} md={0}>
              lloc we{" "}
              <a css={{ textGradient: "45deg, $yellow600 -20%, $red600 100%" }}>
                develop
              </a>{" "}
              beautiful
              <br />
              softwares regardless of your
              <br /> √design.
            </Text>
          </Row>

          <Row justify="flex-start">
            <Text weight="bold">
              we design and develop beautiful, fast and modern softwares
              <br />
              for your preferences.
            </Text>
          </Row>

          <Spacer y={1} />

          <Grid.Container>
            <Grid xs={12} md={6}>
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

            <Grid xs={12} md={6}>
              <Input
                bordered
                labelLeft="https://"
                labelRight=".app"
                placeholder="lloc.vercel"
                contentRight={
                  <SendButton>
                    <SendIcon />
                  </SendButton>
                }
              />
            </Grid>
          </Grid.Container>
        </Grid>

        <Grid xs={12} sm={6} justify="flex-end" alignContent="center">
          <Grid.Container
            gap={1}
            justify="center"
            alignContent="center"
            css={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "10px",
            }}
          >
            {list.map((item, index) => (
              <Grid
                xs={6}
                sm={4}
                key={index}
                css={{
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: "10px",
                }}
              >
                <Card
                  isPressable
                  css={{ color: "#94f9f0", bg: "#1F0A33", zIndex: 5 }}
                >
                  <Card.Body css={{ p: 0 }}>
                    <Card.Image
                      src={"/" + item.img}
                      objectFit="cover"
                      width="100%"
                      height={140}
                      alt={item.title}
                    />
                  </Card.Body>
                  <Card.Footer css={{ justifyItems: "flex-start" }}>
                    <Row wrap="wrap" justify="space-between" align="center">
                      <Text b>{item.title}</Text>
                      <Text
                        css={{
                          color: "$accents7",
                          fontWeight: "$semibold",
                          fontSize: "$sm",
                        }}
                      >
                        {item.price}
                      </Text>
                    </Row>
                  </Card.Footer>
                </Card>
              </Grid>
            ))}
          </Grid.Container>
        </Grid>
      </Grid.Container>
    </Container>

    <Container>
      <Grid.Container gap={1} justify="center" alignContent="center">
        <Grid>
          <User src="/kotlin.svg" name="Kotlin" size="lg" squared />
        </Grid>
        <Grid>
          <User src="/java.svg" name="Java" size="lg" squared />
        </Grid>
        <Grid>
          <User src="/golang.svg" name="Golang" size="lg" squared />
        </Grid>
        <Grid>
          <User src="/nextjs.svg" name="Next.Js" size="lg" squared />
        </Grid>
        <Grid>
          <User src="/android.svg" name="Android" size="lg" squared />
        </Grid>

        <Grid>
          <User src="/swift.svg" name="Swift" size="lg" squared />
        </Grid>
        <Grid>
          <User src="/flutter.svg" name="Flutter" size="lg" squared />
        </Grid>

        <Grid>
          <User src="/firebase.svg" name="Firebase" size="lg" squared />
        </Grid>
        <Grid>
          <User src="/xcode.svg" name="Xcode" size="lg" squared />
        </Grid>

        <Grid>
          <User src="/nodejs.svg" name="NodeJS" size="lg" squared />
        </Grid>
      </Grid.Container>
    </Container>

    <Container>
      <Grid.Container gap={1} justify="center">
        <Grid>
          <Card
            css={{
              display: "flex",
              justifyContent: "center",
              borderRadius: "30px",
              color: "#94f9f0",
              bg: "#1F0A33",
              zIndex: 5,
            }}
          >
            <Card.Body css={{ p: 0 }}>
              <Text
                xs={12}
                md={8}
                css={{
                  padding: "20px",
                  color: "#fff",
                  textGradient: "45deg, $yellow600 -20%, $red600 100%",
                }}
              >
                <a
                  href="mailto:la.niina.me@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  css={{
                    padding: "20px",
                    color: "#fff",
                    textGradient: "45deg, $yellow600 -20%, $red600 100%",
                  }}
                >
                  hourly rates : $18.00/hr Overtime pay is usually 1.5 times the
                  normal hourly rate,
                  <br /> so for hourly rates of $18.00/hr, overtime pay would be
                  $27.00/hr.
                </a>
              </Text>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </Container>

    <Spacer y={1} />

    <Container>
      <Grid.Container gap={1}  justify="center" alignContent="center"
        css={{
          display: "flex",
          justifyContent: "center"
        }}>
        <Grid  xs={6} sm={2}>
          <Col>
            <Text
            h1
            size={60}
            css={{
              textGradient: "45deg, $purple600 -20%, $pink600 100%",
            }}
            weight="bold">60M+</Text>
            <Text>Downloads</Text>
          </Col>
        </Grid>

        <Grid xs={6} sm={2}>
          <Col>
            <Text
            h1
            size={60}
            css={{
              textGradient: "45deg, $purple600 -20%, $pink600 100%",
            }}
            weight="bold">24</Text>
            <Text>Apps</Text>
          </Col>
        </Grid>

        <Grid xs={6} sm={2}>
          <Col>
            <Text
            h1
            size={60}
            css={{
              textGradient: "45deg, $purple600 -20%, $pink600 100%",
            }}
            weight="bold">5.6</Text>
            <Text>Average Rating</Text>
          </Col>
        </Grid>

      </Grid.Container>
    </Container>

    <Container>
      <Grid.Container gap={2} justify="center">
        <Grid xs={12} sm={4}>
          <Card1 />
        </Grid>
        <Grid xs={12} sm={4}>
          <Card2 />
        </Grid>
        <Grid xs={12} sm={4}>
          <Card3 />
        </Grid>
        <Grid xs={12} sm={5}>
          <Card4 />
        </Grid>
        <Grid xs={12} sm={7}>
          <Card5 />
        </Grid>
      </Grid.Container>
    </Container>

    <Container
      css={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Grid justify="center">
        <Row justify="center">
          <Text
            h1
            size={60}
            css={{ textGradient: "45deg, $blue600 -20%, $pink600 50%" }}
            weight="bold"
          >
            Community
          </Text>
        </Row>
        <Row justify="center">
          <Text
            justify="center"
            css={{
              textAlign: "center",
            }}
          >
            Get involved in our community. Everyone is welcome!
            <br />
            <br />
            We want everyone to be a part of our community! We host events and
            activities throughout the year and encourage everyone to
            participate. We also have an active online presence and would love
            for you to join us on social media and take part in our discussions.
            If you have an idea for an event or activity, or would like to
            volunteer, please reach out and let us know. We look forward to
            hearing from you!
          </Text>
        </Row>
      </Grid>

      <Row justify="center" css={{ top: "$15" }}>
        <Grid.Container gap={2} justify="center">
          <Grid xs={12} sm={4}>
            <Card
              isPressable
              onClick={() => {
                window.location.href = "https://github.com/la-niina";
              }}
              css={{ color: "#94f9f0", bg: "#16181A", zIndex: 5 }}
            >
              <Card.Header>
                <Image
                  alt="nextui logo"
                  src="/github.svg"
                  width="34px"
                  height="34px"
                />
                <Grid.Container css={{ pl: "$6" }}>
                  <Grid xs={12} sm={4}>
                    <Text
                      h4
                      css={{
                        textGradient: "45deg, $blue600 -20%, $pink600 50%",
                      }}
                    >
                      GitHub
                    </Text>
                  </Grid>
                </Grid.Container>
              </Card.Header>
              <Card.Body>
                <Row justify="center">
                  <Text size="sm">
                    For issues, feature requests and contribute.
                  </Text>
                </Row>
              </Card.Body>
            </Card>
          </Grid>

          <Grid xs={12} sm={4}>
            <Card
              isPressable
              onClick={() => {
                window.location.href = "https://twitter.com/la_nniina";
              }}
              css={{ color: "#94f9f0", bg: "#16181A", zIndex: 5 }}
            >
              <Card.Header>
                <Image
                  alt="twitter"
                  src="/twitter.svg"
                  width="34px"
                  height="34px"
                />
                <Grid.Container css={{ pl: "$6" }}>
                  <Grid xs={12} sm={4}>
                    <Text
                      h4
                      css={{
                        textGradient: "45deg, $blue600 -20%, $pink600 50%",
                      }}
                    >
                      Twitter
                    </Text>
                  </Grid>
                </Grid.Container>
              </Card.Header>
              <Card.Body>
                <Row justify="center">
                  <Text size="sm">
                    For announcements, tips and general information.
                  </Text>
                </Row>
              </Card.Body>
            </Card>
          </Grid>

          <Spacer y={1} />

          <Grid xs={12} sm={4}>
            <Card
              isPressable
              onClick={() => {
                window.location.href = "https://t.me/llocdev";
              }}
              css={{ color: "#94f9f0", bg: "#16181A", zIndex: 5 }}
            >
              <Card.Header>
                <Image
                  alt="nextui logo"
                  src="/telegram.svg"
                  width="34px"
                  height="34px"
                />
                <Grid.Container css={{ pl: "$6" }}>
                  <Grid xs={12} sm={4}>
                    <Text
                      h4
                      css={{
                        textGradient: "45deg, $blue600 -20%, $pink600 50%",
                      }}
                    >
                      telegram
                    </Text>
                  </Grid>
                </Grid.Container>
              </Card.Header>
              <Card.Body>
                <Row justify="center">
                  <Text size="sm">
                    To get involved in the community, ask questions and share
                    tips.
                  </Text>
                </Row>
              </Card.Body>
            </Card>
          </Grid>
        </Grid.Container>
      </Row>
    </Container>

    <Spacer y={1} />
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
