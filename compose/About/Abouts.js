import { Container, Card, Row, Textarea, Text, Spacer, useInput, Image, Grid, Button, Input } from "@nextui-org/react"
import { SendButton } from "./Card/SendButton";
import { SendIcon } from "./Card/SendIcon";
import { Box } from "./Box.js"

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
            <Text h2 size={40}
                justify="flex-start"
                css={{
                    textAlign: "flex-start",
                    textGradient: "45deg, $blue600 -20%, $pink600 50%",
                    margin: "10px"
                }}
                weight="bold">About</Text>
        </Container>

        <Container>
            <Grid.Container gap={2} justify="center">
                <Card
                    css={{ color: "#94f9f0", bg: "#0f111466", zIndex: 5, }}>
                    <Grid.Container gap={2}>
                        <Row justify="center">
                            <Text size={40}
                                css={{
                                    textAlign: "center",
                                    textGradient: "45deg, $blue600 -20%, $pink600 50%",
                                    margin: "10px"
                                }}>
                                Contact us
                            </Text>
                        </Row>
                        <Row>
                            <Input
                                css={{
                                    width: "100%",
                                    marginLeft: "20%",
                                    marginRight: "20%",
                                    marginTop: "5px"
                                }}
                                clearable
                                label="Name"
                                placeholder="Name"
                                initialValue="Name" />
                        </Row>
                        <Row>
                            <Input
                                css={{
                                    width: "100%",
                                    marginLeft: "20%",
                                    marginRight: "20%",
                                    marginTop: "5px"
                                }}
                                clearable
                                label="Email"
                                placeholder="Name"
                                initialValue="Email Address" />
                        </Row>

                        <Row>
                            <Textarea
                                css={{
                                    width: "100%",
                                    marginLeft: "20%",
                                    marginRight: "20%",
                                    marginTop: "10px",
                                    marginBottom: "10px",
                                    resize: "both"
                                }}
                                placeholder="write your message right here..."
                                minRows={8}
                            />
                        </Row>

                        <Row justify="flex-end">
                            <Button auto color="gradient" flat css={{
                                width: "30%",
                                marginLeft: "20%",
                                marginRight: "20%",
                                marginTop: "10px",
                                marginBottom: "10px",
                            }} rounded >Send</Button>
                            <Spacer y={1} />
                        </Row>
                    </Grid.Container>
                </Card>
                <Spacer y={1} />
            </Grid.Container>
        </Container>
    </>
);