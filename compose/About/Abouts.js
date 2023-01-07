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
                                            lloc is a start up software company that provides a multitude of
                                            services . IIo services include : | Android Applications Development
                                            | Ios Applications Development
                                            | Windows Applications Development
                                            | Linux Applications Development
                                            | Mac os Applications Development
                                            | Server/Web Applications Development etc
                                            <br />
                                            <br />
                                            We also provide services link information sharing , tutoring in software dev,
                                            creating installing media for different devices e.g installing mac os on a windows
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
                                    justifyContent: "flex-end"
                                }}>
                                <Button auto color="gradient" flat css={{
                                    width: "30%",
                                    marginTop: "10px",
                                    marginBottom: "50px",
                                }} rounded={20} >Send</Button>
                            </Container>
                        </Row>
                        <Spacer y={1} />
                    </Grid.Container>
                </Card>

                <Spacer y={1} />
                <Spacer y={1} />
            </Grid.Container>
        </Container>
    </>
);