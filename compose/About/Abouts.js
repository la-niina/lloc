import {
  Container,
  Card,
  Row,
  Textarea,
  User,
  Text,
  Spacer,
  useInput,
  Image,
  Grid,
  Button,
  Link,
  Input,
  Col,
  Progress,
} from "@nextui-org/react";
import { SendButton } from "./Card/SendButton";
import { SendIcon } from "./Card/SendIcon";
import { Box } from "./Box.js";

const list = [
  {
    title: "hardware",
    img: "motherboard.png",
    price: "@",
  },
  {
    title: "phone",
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
    <Spacer y={1} />
    <Container>
      <Grid.Container gap={2} justify="flex-start">
        <Grid>
          <Text
            h2
            size={40}
            css={{
              textAlign: "center",
              textGradient: "45deg, $blue600 -20%, $pink600 50%",
            }}
            weight="bold"
          >
            Contact us
          </Text>

          <Card css={{ $$cardColor: "#16181A" }}>
            <Card.Body>
              <Row justify="center" align="center">
                <Text
                  h6
                  size="$lg"
                  color="white"
                  css={{
                    textAlign: "flex-start",
                  }}
                >
                  lloc is a start-up software company that provides a multitude
                  of services. We specialize in developing software solutions
                  for both mobile and web platforms. We offer services such as
                  custom software development, UI/UX design, software testing,
                  and maintenance. Additionally, we provide consulting services
                  to help our clients understand their technology needs and
                  create solutions that are tailored to their requirements. We
                  strive to provide the best customer experience through our
                  highly professional and experienced team.
                  <br />
                  <br />
                  <a b>
                    We can provide various services related to software
                    development, such as:
                  </a>
                  <br />✅ consulting and advising on best practices for
                  software development
                  <br />✅ tutoring and training on software development topics,
                  such as programming languages and frameworks
                  <br />✅ creating installation media for different devices,
                  such as installing Mac OS on a Windows laptop/desktop
                  <br />✅ sharing information and resources on software
                  development
                  <br />✅ assistance with debugging and troubleshooting
                  existing software
                  <br />✅ building custom software solutions or customizing
                  existing software products
                  <br />✅ providing technical support for software-related
                  issues
                  <br />✅ creating automated build, test, and release processes
                  for software applications.
                  <br />
                  <br />
                  <a b>
                    We are also experienced in providing services related to
                    cloud computing, such as:
                  </a>
                  <br />✅ migrating applications to the cloud
                  <br />✅ deploying and managing cloud-hosted applications
                  <br />✅ building cloud-native applications
                  <br />✅ developing and deploying serverless architectures
                  <br />✅ designing and managing cloud infrastructure
                  <br />✅ building secure and compliant cloud applications
                  <br />✅ implementing DevOps and CI/CD pipelines in the cloud
                  <br />✅ monitoring and optimizing cloud performance. We look
                  forward to helping you with your software development needs!
                </Text>
              </Row>
            </Card.Body>
          </Card>

          <Spacer y={1} />
        </Grid>
      </Grid.Container>

      <Grid.Container gap={2} justify="flex-start">
        <Grid>
          <Row justify="center">
            <Input
              size="xl"
              css={{
                width: "100%",
                marginTop: "5px",
              }}
              clearable
              label="Name"
              placeholder="Name"
              initialValue="Name"
            />
          </Row>

          <Row justify="center">
            <Input
              size="xl"
              css={{
                width: "100%",
                marginTop: "5px",
              }}
              clearable
              label="Email"
              placeholder="Name"
              initialValue="Email Address"
            />
          </Row>

          <Row justify="center">
            <Textarea
              css={{
                width: "100%",
                marginTop: "15px",
                marginBottom: "10px",
              }}
              placeholder="write your message right here..."
              minRows={8}
            />
          </Row>

          <Row justify="flex-end">
            <Container
              justify="flex-end"
              css={{
                justifyContent: "flex-end",
                alignItems: "flex-end",
              }}
            >
              <Button
                auto
                color="gradient"
                rounded
                flat
                css={{
                  width: "20%",
                  marginTop: "10px",
                  marginBottom: "50px",
                }}
              >
                Send
              </Button>
            </Container>
          </Row>

          <Row justify="flex-end">
            <Text
              css={{
                width: "100%",
                textAlign: "center",
              }}
            >
              Your can also directly email me on my email address if your not
              interested in filling in the informations above or also contact
              <br />
              me throught my social media handles below
            </Text>
          </Row>

          <Row justify="flex-end">
            <Card
              xm={12}
              md={4}
              css={{
                width: "100%",
                marginTop: "10px",
              }}
            >
              <Text
                xm={12}
                md={12}
                css={{
                  textAlign: "flex-start",
                  padding: "5px",
                }}
              >
                <a href="mailto:la.niina.me@gmail.com">lloc.email@me.com</a>
              </Text>
            </Card>
          </Row>

          <Row justify="center">
            <Text
              h1
              size={60}
              css={{
                textAlign: "center",
                textGradient: "45deg, $blue600 -20%, $pink600 50%",
              }}
              weight="bold"
            >
              Social media handles
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
              for you to join us on social media and take part in our
              discussions. If you have an idea for an event or activity, or
              would like to volunteer, please reach out and let us know. We look
              forward to hearing from you!
            </Text>
          </Row>

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
                        To get involved in the community, ask questions and
                        share tips.
                      </Text>
                    </Row>
                  </Card.Body>
                </Card>
              </Grid>
            </Grid.Container>
          </Row>
        </Grid>
      </Grid.Container>

      <Spacer y={1} />
      <Spacer y={1} />
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
