import { Container, Text, Spacer, Grid, Card, Col, Row, Button, Loading } from "@nextui-org/react"
import { Box } from "./Box.js"
import { Card1 } from './Card/Card1';
import { Card2 } from './Card/Card2';
import { Card3 } from './Card/Card3';
import { Card4 } from './Card/Card4';
import { Card5 } from './Card/Card5';

export const Content = () => (
  <>
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

    <Container
      css={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}>

      <Grid justify="center">
        <Row justify="center">
          <Text h1 size={60} css={{ textGradient: "45deg, $blue600 -20%, $pink600 50%", }} weight="bold">
            Community
          </Text>
        </Row>
        <Row justify="center">
          <Text justify="center" alignItems="center">
            Get involved in our community. Everyone is welcome!
          </Text>
        </Row>
      </Grid>

      <Row justify="center" css={{ top: '$15' }}>
        <Grid.Container gap={2} justify="center">
          <Grid xs={12} sm={4}>
            <Card
              isPressable
              isBlurred
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
              isBlurred
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
              isBlurred
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