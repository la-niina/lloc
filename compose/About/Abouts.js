import { Container, Card, Row, Textarea, User, Text, Spacer, useInput, Image, Grid, Button, Link, Input } from "@nextui-org/react"
import { SendButton } from "./Card/SendButton";
import { SendIcon } from "./Card/SendIcon";
import { Box } from "./Box.js"

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
            <Grid.Container gap={1} justify="center">
                <Card
                    css={{ color: "#94f9f0", bg: "#0f111466", zIndex: 5, borderRadius: "20px" }}>
                    <Grid.Container gap={1}>
                        <Spacer y={1} />
                        <Row justify="center">
                            <Text size={30}
                                css={{
                                    textAlign: "center",
                                    textGradient: "45deg, $blue600 -20%, $pink600 50%",
                                    margin: "10px"
                                }}
                                weight="bold">
                                Contact us
                            </Text>
                        </Row>

                        <Row justify="center">
                            <Container fluid sm justify="center">
                                <Card isPressable isHoverable
                                    css={{
                                        mw: "100%",
                                        marginTop: "10px",
                                        marginBottom: "10px",
                                        color: "#94f9f0",
                                        bg: "#16181A"
                                    }}
                                    flat>
                                    <Card.Body>
                                        <Text
                                            css={{
                                                textAlign: "flex-start",
                                            }}>
                                            lloc is a start-up software company that provides a multitude of
                                            services | Android, iOS, Windows ,Linux, Mac os, Web Applications Development etc.
                                            <br />
                                            <br />
                                            We also provide services like information sharing , tutoring software devs,
                                            creating installation media's for different devices e.g installing mac os on a windows
                                            laptop | desktop
                                        </Text>
                                    </Card.Body>
                                    <Card.Footer>
                                        <Link
                                            icon
                                            color="primary"
                                            target="_blank"
                                            href="https://github.com/la-niina"
                                        >
                                            Visit source codes on GitHub.
                                        </Link>
                                    </Card.Footer>
                                </Card>
                            </Container>
                        </Row>

                        <Spacer y={1} />

                        <Row justify="center">
                            <Container fluid sm>
                                <Input
                                    size="xl"
                                    css={{
                                        width: "100%",
                                        marginTop: "5px"
                                    }}
                                    clearable
                                    label="Name"
                                    placeholder="Name"
                                    initialValue="Name" />
                            </Container>
                        </Row>
                        <Row justify="center">
                            <Container fluid sm>
                                <Input
                                    size="xl"
                                    css={{
                                        width: "100%",
                                        marginTop: "5px"
                                    }}
                                    clearable
                                    label="Email"
                                    placeholder="Name"
                                    initialValue="Email Address" />
                            </Container>
                        </Row>

                        <Row justify="center">
                            <Container fluid sm>
                                <Textarea
                                    css={{
                                        width: "100%",
                                        marginTop: "15px",
                                        marginBottom: "10px"
                                    }}
                                    placeholder="write your message right here..."
                                    minRows={8}
                                />
                            </Container>
                        </Row>

                        <Row justify="flex-end">
                            <Container fluid sm justify="flex-end"
                                css={{
                                    justifyContent: "flex-end",
                                    alignItems: "flex-end",
                                }}>
                                <Button auto color="gradient" rounded flat css={{
                                    width: "20%",
                                    marginTop: "10px",
                                    marginBottom: "50px",
                                }} >Send</Button>
                            </Container>
                        </Row>

                        <Row justify="flex-end">
                            <Container fluid sm justify="flex-end"
                                css={{
                                    justifyContent: "flex-end"
                                }}>
                                <Text
                                    css={{
                                        width: "100%",
                                        textAlign: "center",
                                    }}>
                                    Your can also directly email me on my email address if your not interested in filling in the informations above or also contact me throught my social media handles below</Text>

                                <Card xm={12} md={4}
                                    css={{
                                        width: "100%",
                                        marginTop: "10px"
                                    }}>
                                    <Text
                                        xm={12} md={12}
                                        css={{
                                            textAlign: "flex-start",
                                            padding: "5px"
                                        }}><a href="mailto:la.niina.me@gmail.com">
                                            lloc.email@me.com</a></Text>
                                </Card>
                            </Container>
                        </Row>

                        <Row justify="flex-end">
                            <Container
                                css={{
                                    display: "flex",
                                    justifyContent: "center",
                                }}>

                                <Grid justify="center">
                                    <Row justify="center">
                                        <Text h1 size={60} css={{ textGradient: "45deg, $blue600 -20%, $pink600 50%", }} weight="bold">
                                            Social media handles
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
                                                css={{ color: "#94f9f0", bg: "#16181A", zIndex: 5, }}>
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
                                                css={{ color: "#94f9f0", bg: "#16181A", zIndex: 5, }}>
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
                                                onClick={() => {
                                                    window.location.href = "https://t.me/llocdev"
                                                }}
                                                css={{ color: "#94f9f0", bg: "#16181A", zIndex: 5, }}>
                                                <Card.Header>
                                                    <img
                                                        alt="nextui logo"
                                                        src="/telegram.svg"
                                                        width="34px"
                                                        height="34px"
                                                    />
                                                    <Grid.Container css={{ pl: "$6" }}>
                                                        <Grid xs={12} sm={4}>
                                                            <Text h4 css={{ textGradient: "45deg, $blue600 -20%, $pink600 50%" }}>
                                                                telegram
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
                        </Row>
                    </Grid.Container>
                    <Spacer y={1} />
                    <Spacer y={1} />
                    <Spacer y={1} />
                    <Spacer y={1} />
                    <Spacer y={1} />
                </Card>

                <Spacer y={1} />
                <Spacer y={1} />
            </Grid.Container>
        </Container>
    </>
);