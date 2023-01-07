import React from "react";
import { User, Row, Col, Text, Button, Spacer, Grid, Container, Input, Card, Modal, useModal } from "@nextui-org/react";
import { SendButton } from "./Card/SendButton";
import { SendIcon } from "./Card/SendIcon";

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


export const UserInterface = () => {
    const [following, setFollowing] = React.useState(false);
    const { setVisible, bindings } = useModal();

    return (
        <Grid.Container
            className="user-twitter-card__container"
            css={{
                mw: "100%",
                h: "100%",
                borderRadius: "$lg",
                padding: "$sm",
            }}
        >

            <Grid.Container className="user-twitter-card__username-container">
                <Grid xs={12} md={12}>
                    <Container>
                        <Row justify="center">
                            <Container>
                                <Grid.Container gap={2} justify="flex-start">
                                    <Grid>
                                        <Row justify="flex-start">
                                            <Text h1 size="$4xl" xs={0} md={0}>
                                                IIo we <a css={{ textGradient: "45deg, $yellow600 -20%, $red600 100%" }}>develop</a> beautiful
                                                <br />softwares regardless of your
                                                <br /> √design.
                                            </Text>
                                        </Row>

                                        <Row justify="flex-start">
                                            <Text weight="bold">
                                                we design and develop beautiful, fast and modern softwares
                                                <br />for your preferences.
                                            </Text>
                                        </Row>

                                        <Spacer y={1} />

                                        <Grid.Container>
                                            <Grid xs={12} md={6}>
                                                <Button auto color="gradient" flat rounded css={{
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
                                                    <Card isPressable
                                                        css={{ color: "#94f9f0", bg: "#1F0A33", zIndex: 5, }}>
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
                        </Row>
                    </Container>
                </Grid>
            </Grid.Container>

            <Grid.Container
                className="user-twitter-card__metrics-container"
                justify="flex-start"
                alignContent="center"
            >
                <Text className="user-twitter-card__text" size={14} color="#888888">
                    <Text
                        b
                        color="foreground"
                        className="user-twitter-card__text"
                        size={14}
                    >
                        4
                    </Text>
                    Following
                </Text>
                <Spacer inline x={0.5} />
                <Text className="user-twitter-card__text" size={14} color="#888888">
                    <Text
                        b
                        color="foreground"
                        className="user-twitter-card__text"
                        size={14}
                    >
                        97.1K
                    </Text>
                    Followers
                </Text>
            </Grid.Container>
        </Grid.Container >
    );
};