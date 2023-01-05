import { Container, Card, Row, Text, Spacer, Image, Grid, Button, Input } from "@nextui-org/react"
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
                   
                </Grid>


                <Grid xs={12} sm={6} justify="flex-end" alignContent="center" alignItems="center">
                    <Grid.Container gap={1} justify="center" alignContent="center" alignItems="center"
                        css={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            marginBottom: "10px"
                        }}>
                        {list.map((item, index) => (
                            <Grid xs={6} sm={4} key={index} css={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
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
            <Card css={{ $$cardColor: '#16181A' }}>
                <Card.Body>
                    <Row justify="center" align="center">
                        <Text h6 size="$lg" color="white"
                            css={{
                                m: 0,
                                textGradient: "45deg, $blue600 -20%, $pink600 50%",
                            }}
                        >
                            IIo is a start-up technology company that provides services to do with software development in the field of
                            mobile , desktop , and server . IIo also provides service like cloud storage and software upgrades , updates , improvements,
                            and more.<br /><br />
                            We also provide services like installation of different mediums like windows on any desktop|laptop device from windows 10 and 11 fully
                            or from windows 8.1|laptop devices from windows 8.1|desktops. We also provide installation of mac operating systems on windows pc's and
                            desktop devices.<br />
                        </Text>
                    </Row>
                </Card.Body>
            </Card>

            <Spacer y={1} />
            <Spacer y={1} />
        </Container>
    </>
);