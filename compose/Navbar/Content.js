import { Container, Input, Text, User, Spacer, Grid, Card, Col, Row, Button, Loading } from "@nextui-org/react"
import { Box } from "./Box.js"
import { SendButton } from "./Card/SendButton";
import { SendIcon } from "./Card/SendIcon";
import { Card1 } from './Card/Card1';
import { Card2 } from './Card/Card2';
import { Card3 } from './Card/Card3';
import { Card4 } from './Card/Card4';
import { Card5 } from './Card/Card5';
const list = [
  {
    title: "Orange",
    img: "/images/fruit-1.jpeg",
    price: "$5.50",
  },
  {
    title: "Tangerine",
    img: "/images/fruit-2.jpeg",
    price: "$3.00",
  },
  {
    title: "Cherry",
    img: "/images/fruit-3.jpeg",
    price: "$10.00",
  },
];

export const Content = () => (
  <>
    <Container>
      <Grid.Container gap={2} justify="flex-start">
        <Grid>
          <Row justify="center">
            <Text h1>
              Make <a css={{ textGradient: "45deg, $blue600 -20%, $pink600 50%" }}>beautiful</a> websites
              <br />regardless of your design
              <br />experience.
            </Text>
          </Row>

          <Row justify="flex-start">
            <Text weight="bold">
              Beautiful, fast and modern React UI library.
            </Text>
          </Row>

          <Spacer y={1} />

          <Grid.Container>
            <Grid xs={12} md={6} wrap='wrap'>
              <Button auto color="primary" rounded css={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "10px"
              }}>
                Get Started
              </Button>
            </Grid>

            <Grid xs={12} md={6}>
              <Input
                bordered
                labelLeft="https://"
                labelRight=".app"
                placeholder="iiio.vercel"
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
          <Grid.Container gap={1} justify="center" alignContent="center"
            css={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "10px"
            }}>
            {list.map((item, index) => (
              <Grid xs={6} sm={4} key={index} css={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "10px"
              }}>
                <Card isPressable>
                  <Card.Body css={{ p: 0 }}>
                    <Card.Image
                      src={"https://nextui.org" + item.img}
                      objectFit="cover"
                      width="100%"
                      height={140}
                      alt={item.title}
                    />
                  </Card.Body>
                  <Card.Footer css={{ justifyItems: "flex-start" }}>
                    <Row wrap="wrap" justify="space-between" align="center">
                      <Text b>{item.title}</Text>
                      <Text css={{ color: "$accents7", fontWeight: "$semibold", fontSize: "$sm" }}>
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
          <User
            src="/kotlin.svg"
            name="Kotlin"
            size="lg"
            squared
          />
        </Grid>
        <Grid>
          <User
            src="/java.svg"
            name="Java"
            size="lg"
            squared
          />
        </Grid>
        <Grid>
          <User
            src="/golang.svg"
            name="Golang"
            size="lg"
            squared
          />
        </Grid>
        <Grid>
          <User
            src="/nextjs.svg"
            name="Next.Js"
            size="lg"
            squared
          />
        </Grid>
        <Grid>
          <User
            src="/android.svg"
            name="Android"
            size="lg"
            squared
          />
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
      }}>

      <Grid justify="center">
        <Row justify="center">
          <Text h1 size={60} css={{ textGradient: "45deg, $blue600 -20%, $pink600 50%", }} weight="bold">
            Community
          </Text>
        </Row>
        <Row justify="center">
          <Text justify="center">
            Get involved in our community. Everyone is welcome!
          </Text>
        </Row>
      </Grid>

      <Row justify="center" css={{ top: '$15' }}>
        <Grid.Container gap={2} justify="center">
          <Grid xs={12} sm={4}>
            <Card
              isPressable
              onClick={() => {
                window.location.href = "https://github.com/la-niina"
              }}
              css={{ color: "#94f9f0", bg: "#0f111466", zIndex: 5, }}>
              <Card.Header>
                <img
                  alt="nextui logo"
                  src="/github.svg"
                  width="34px"
                  height="34px"
                />
                <Grid.Container css={{ pl: "$6" }}>
                  <Grid xs={12} sm={4}>
                    <Text h4 css={{ textGradient: "45deg, $blue600 -20%, $pink600 50%" }}>
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
                window.location.href = "https://twitter.com/la_nniina"
              }}
              css={{ color: "#94f9f0", bg: "#0f111466", zIndex: 5, }}>
              <Card.Header>
                <img
                  alt="twitter"
                  src="/twitter.svg"
                  width="34px"
                  height="34px"
                />
                <Grid.Container css={{ pl: "$6" }}>
                  <Grid xs={12} sm={4}>
                    <Text h4 css={{ textGradient: "45deg, $blue600 -20%, $pink600 50%" }}>
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
              css={{ color: "#94f9f0", bg: "#0f111466", zIndex: 5, }}>
              <Card.Header>
                <img
                  alt="nextui logo"
                  src="/discord.svg"
                  width="34px"
                  height="34px"
                />
                <Grid.Container css={{ pl: "$6" }}>
                  <Grid xs={12} sm={4}>
                    <Text h4 css={{ textGradient: "45deg, $blue600 -20%, $pink600 50%" }}>
                      Discord
                    </Text>
                  </Grid>
                </Grid.Container>
              </Card.Header>
              <Card.Body>
                <Row justify="center">
                  <Text size="sm">
                    To get involved in the community, ask questions and share tips.
                  </Text>
                </Row>
              </Card.Body>
            </Card>
          </Grid>
        </Grid.Container>
      </Row>

    </Container>

    <Spacer y={1} />
  </>
);