/* eslint-disable react/no-unescaped-entities */
import { Container, Dropdown, Modal, useModal, Card, Row, Text, Spacer, Image, Grid, Button, Loading, Col, Popover, User, Input } from "@nextui-org/react"
import { Box } from "./Box.js";
import { UserTwitterCard } from "./Icons/UserTwitterCard";
import { UserInterface } from "./Icons/UserInterface";
import { DeleteUser } from "./Icons/DeleteUser";

export const Content = () => {
    const { setVisible, bindings } = useModal();

    return (
        <>
            <Container fluid sm justify="center">
                <Grid.Container gap={2} justify="center">
                    <Grid>
                        <Row justify="center">
                            <Text h1
                                size={40}
                                css={{
                                    textAlign: "center",
                                    textGradient: "45deg, $blue600 -20%, $pink600 50%",
                                }}
                                weight="bold">
                                Start. learn. Build. produce. Grow.
                            </Text>
                        </Row>
                    </Grid>

                    <Grid justify="center">
                        <Row justify="center">
                            <Text justify="center"
                                css={{
                                    textAlign: "center"
                                }}>
                                Whether you’re starting out, or scaling to meet
                                <br />demand, connect with the right people, products, and best practices
                                <br />to help your startup grow.
                            </Text>
                        </Row>
                    </Grid>


                    <Grid.Container justify="center">
                        <Grid>
                            <Button auto color="gradient" flat rounded css={{
                                display: "flex",
                                justifyContent: "center",
                                marginBottom: "10px"
                            }}>
                                Get Started
                            </Button>
                        </Grid>
                    </Grid.Container>

                </Grid.Container>
            </Container>

            <Container>
                <Grid xs={13} sm={12} md={12} justify="flex-end" alignContent="center">
                    <Grid.Container gap={1} justify="flex-start">
                        <Grid xs={12} sm={3}>
                            <Card isPressable
                                onClick={() => {

                                }}
                                css={{ mw: "300px" }}>
                                <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
                                    <Col>
                                        <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
                                            lloc web development
                                        </Text>
                                        <Loading color="currentColor" size="md" />
                                    </Col>
                                </Card.Header>
                                <Card.Image
                                    width={300}
                                    height={200}
                                    objectFit="cover"
                                    alt="windows 11"
                                    src="https://raw.githubusercontent.com/la-niina/lloc/main/public/la-niina.png" />

                                <Card.Footer
                                    isBlurred
                                    css={{ color: "#94f9f0", bg: "#0f111466", zIndex: 5 }}>
                                    <Grid>
                                        <Row justify="flex-start">
                                            <Text
                                                h1
                                                size={20}
                                                css={{
                                                    textGradient: "45deg, $blue600 -20%, $pink600 50%",
                                                }}
                                                weight="bold"
                                            >
                                                lloc web development
                                            </Text>
                                        </Row>
                                        <Row justify="center">
                                            <Text size="sm">
                                                Make beautiful websites regardless of your design and experience.
                                                <br />design fast React UI.
                                            </Text>
                                        </Row>

                                        <Row justify="flex-end">
                                            <Button auto color="secondary" rounded flat onClick={() => setVisible(true)}>Read More</Button>
                                        </Row>

                                    </Grid>
                                </Card.Footer>
                            </Card>
                        </Grid>

                        <Grid xs={12} sm={3}>
                            <Card isPressable css={{ mw: "300px" }}>
                                <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
                                    <Col>
                                        <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
                                            New
                                        </Text>
                                        <Loading color="currentColor" size="md" />
                                    </Col>
                                </Card.Header>
                                <Card.Image
                                    width={300}
                                    height={200}
                                    objectFit="cover"
                                    alt="windows 11"
                                    src="https://imgs.search.brave.com/vspsbjrgL1YEHqXsDiiu8_F9bYOBI49roMP7y0TNfII/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly8xLmJw/LmJsb2dzcG90LmNv/bS8tTGR4dGRRVjlF/ZHMvWU5kTDF5Z1Fn/TUkvQUFBQUFBQUFj/cTgvc1AwZktKRzUz/bmdVaGFFbHNGVnBW/MEI1YzdsYU9RT3N3/Q0xjQkdBc1lIUS9z/MjA0OC93aW5kb3dz/LTExLWZlYXR1cmVk/LWltYWdlLmpwZw" />

                                <Card.Footer
                                    isBlurred
                                    css={{ color: "#94f9f0", bg: "#0f111466", zIndex: 5 }}>
                                    <Grid>
                                        <Row justify="flex-start">
                                            <Text
                                                h1
                                                size={20}
                                                css={{
                                                    textGradient: "45deg, $blue600 -20%, $pink600 50%",
                                                }}
                                                weight="bold"
                                            >
                                                Let's
                                            </Text>
                                        </Row>
                                        <Row justify="center">
                                            <Text size="sm">
                                                Some quick example text to build on the card title and make up the
                                                bulk of the card's content.
                                            </Text>
                                        </Row>
                                        <Row justify="flex-end">
                                            <Popover >
                                                <Popover.Trigger>
                                                    <Button auto color="secondary" rounded flat>read more</Button>
                                                </Popover.Trigger>
                                                <Popover.Content css={{ px: '$4', py: '$2' }}>
                                                    <UserTwitterCard />
                                                </Popover.Content>
                                            </Popover>
                                        </Row>
                                    </Grid>
                                </Card.Footer>
                            </Card>
                        </Grid>

                        <Grid xs={12} sm={3}>
                            <Card isPressable css={{ mw: "300px" }}>
                                <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
                                    <Col>
                                        <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
                                            New
                                        </Text>
                                        <Loading color="currentColor" size="md" />
                                    </Col>
                                </Card.Header>
                                <Card.Image
                                    width={300}
                                    height={200}
                                    objectFit="cover"
                                    alt="windows 11"
                                    src="https://imgs.search.brave.com/vspsbjrgL1YEHqXsDiiu8_F9bYOBI49roMP7y0TNfII/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly8xLmJw/LmJsb2dzcG90LmNv/bS8tTGR4dGRRVjlF/ZHMvWU5kTDF5Z1Fn/TUkvQUFBQUFBQUFj/cTgvc1AwZktKRzUz/bmdVaGFFbHNGVnBW/MEI1YzdsYU9RT3N3/Q0xjQkdBc1lIUS9z/MjA0OC93aW5kb3dz/LTExLWZlYXR1cmVk/LWltYWdlLmpwZw" />

                                <Card.Footer
                                    isBlurred
                                    css={{ color: "#94f9f0", bg: "#0f111466", zIndex: 5 }}>
                                    <Grid>
                                        <Row justify="flex-start">
                                            <Text
                                                h1
                                                size={20}
                                                css={{
                                                    textGradient: "45deg, $blue600 -20%, $pink600 50%",
                                                }}
                                                weight="bold"
                                            >
                                                Let's
                                            </Text>
                                        </Row>
                                        <Row justify="center">
                                            <Text size="sm">
                                                Some quick example text to build on the card title and make up the
                                                bulk of the card's content.
                                            </Text>
                                        </Row>
                                        <Row justify="flex-end">
                                            <Popover >
                                                <Popover.Trigger>
                                                    <Button auto color="secondary" rounded flat>read more</Button>
                                                </Popover.Trigger>
                                                <Popover.Content css={{ px: '$4', py: '$2' }}>
                                                    <UserTwitterCard />
                                                </Popover.Content>
                                            </Popover>
                                        </Row>
                                    </Grid>
                                </Card.Footer>
                            </Card>
                        </Grid>

                        <Grid xs={12} sm={3}>
                            <Card isPressable css={{ mw: "300px" }}>
                                <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
                                    <Col>
                                        <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
                                            New
                                        </Text>
                                        <Loading color="currentColor" size="md" />
                                    </Col>
                                </Card.Header>
                                <Card.Image
                                    width={300}
                                    height={200}
                                    objectFit="cover"
                                    alt="windows 11"
                                    src="https://imgs.search.brave.com/vspsbjrgL1YEHqXsDiiu8_F9bYOBI49roMP7y0TNfII/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly8xLmJw/LmJsb2dzcG90LmNv/bS8tTGR4dGRRVjlF/ZHMvWU5kTDF5Z1Fn/TUkvQUFBQUFBQUFj/cTgvc1AwZktKRzUz/bmdVaGFFbHNGVnBW/MEI1YzdsYU9RT3N3/Q0xjQkdBc1lIUS9z/MjA0OC93aW5kb3dz/LTExLWZlYXR1cmVk/LWltYWdlLmpwZw" />

                                <Card.Footer
                                    isBlurred
                                    css={{ color: "#94f9f0", bg: "#0f111466", zIndex: 5 }}>
                                    <Grid>
                                        <Row justify="flex-start">
                                            <Text
                                                h1
                                                size={20}
                                                css={{
                                                    textGradient: "45deg, $blue600 -20%, $pink600 50%",
                                                }}
                                                weight="bold"
                                            >
                                                Let's
                                            </Text>
                                        </Row>
                                        <Row justify="center">
                                            <Text size="sm">
                                                Some quick example text to build on the card title and make up the
                                                bulk of the card's content.
                                            </Text>
                                        </Row>
                                        <Row justify="flex-end">
                                            <Popover >
                                                <Popover.Trigger>
                                                    <Button auto color="secondary" rounded flat>read more</Button>
                                                </Popover.Trigger>
                                                <Popover.Content css={{ px: '$4', py: '$2' }}>
                                                    <UserTwitterCard />
                                                </Popover.Content>
                                            </Popover>
                                        </Row>

                                    </Grid>
                                </Card.Footer>
                            </Card>
                        </Grid>

                        <Grid xs={12} sm={3}>
                            <Card isPressable css={{ mw: "300px" }}>
                                <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
                                    <Col>
                                        <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
                                            New
                                        </Text>
                                        <Loading color="currentColor" size="md" />
                                    </Col>
                                </Card.Header>
                                <Card.Image
                                    width={300}
                                    height={200}
                                    objectFit="cover"
                                    alt="windows 11"
                                    src="https://imgs.search.brave.com/vspsbjrgL1YEHqXsDiiu8_F9bYOBI49roMP7y0TNfII/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly8xLmJw/LmJsb2dzcG90LmNv/bS8tTGR4dGRRVjlF/ZHMvWU5kTDF5Z1Fn/TUkvQUFBQUFBQUFj/cTgvc1AwZktKRzUz/bmdVaGFFbHNGVnBW/MEI1YzdsYU9RT3N3/Q0xjQkdBc1lIUS9z/MjA0OC93aW5kb3dz/LTExLWZlYXR1cmVk/LWltYWdlLmpwZw" />

                                <Card.Footer
                                    isBlurred
                                    css={{ color: "#94f9f0", bg: "#0f111466", zIndex: 5 }}>
                                    <Grid>
                                        <Row justify="flex-start">
                                            <Text
                                                h1
                                                size={20}
                                                css={{
                                                    textGradient: "45deg, $blue600 -20%, $pink600 50%",
                                                }}
                                                weight="bold"
                                            >
                                                Let's
                                            </Text>
                                        </Row>
                                        <Row justify="center">
                                            <Text size="sm">
                                                Some quick example text to build on the card title and make up the
                                                bulk of the card's content.
                                            </Text>
                                        </Row>
                                        <Row justify="flex-end">
                                            <Popover >
                                                <Popover.Trigger>
                                                    <Button auto color="secondary" rounded flat>read more</Button>
                                                </Popover.Trigger>
                                                <Popover.Content css={{ px: '$4', py: '$2' }}>
                                                    <UserTwitterCard />
                                                </Popover.Content>
                                            </Popover>
                                        </Row>

                                    </Grid>
                                </Card.Footer>
                            </Card>
                        </Grid>

                        <Grid xs={12} sm={3}>
                            <Card isPressable css={{ mw: "300px" }}>
                                <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
                                    <Col>
                                        <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
                                            New
                                        </Text>
                                        <Loading color="currentColor" size="md" />
                                    </Col>
                                </Card.Header>
                                <Card.Image
                                    width={300}
                                    height={200}
                                    objectFit="cover"
                                    alt="windows 11"
                                    src="https://imgs.search.brave.com/vspsbjrgL1YEHqXsDiiu8_F9bYOBI49roMP7y0TNfII/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly8xLmJw/LmJsb2dzcG90LmNv/bS8tTGR4dGRRVjlF/ZHMvWU5kTDF5Z1Fn/TUkvQUFBQUFBQUFj/cTgvc1AwZktKRzUz/bmdVaGFFbHNGVnBW/MEI1YzdsYU9RT3N3/Q0xjQkdBc1lIUS9z/MjA0OC93aW5kb3dz/LTExLWZlYXR1cmVk/LWltYWdlLmpwZw" />

                                <Card.Footer
                                    isBlurred
                                    css={{ color: "#94f9f0", bg: "#0f111466", zIndex: 5 }}>
                                    <Grid>
                                        <Row justify="flex-start">
                                            <Text
                                                h1
                                                size={20}
                                                css={{
                                                    textGradient: "45deg, $blue600 -20%, $pink600 50%",
                                                }}
                                                weight="bold"
                                            >
                                                Let's
                                            </Text>
                                        </Row>
                                        <Row justify="center">
                                            <Text size="sm">
                                                Some quick example text to build on the card title and make up the
                                                bulk of the card's content.
                                            </Text>
                                        </Row>
                                        <Row justify="flex-end">
                                            <Popover >
                                                <Popover.Trigger>
                                                    <Button auto color="secondary" rounded flat>read more</Button>
                                                </Popover.Trigger>
                                                <Popover.Content css={{ px: '$4', py: '$2' }}>
                                                    <UserTwitterCard />
                                                </Popover.Content>
                                            </Popover>
                                        </Row>

                                    </Grid>
                                </Card.Footer>
                            </Card>
                        </Grid>
                    </Grid.Container>
                </Grid>
            </Container>

            <Modal
                scroll
                fullScreen
                closeButton
                css={{
                    backgroundColor: "rgba(0,0,0)",
                }}
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
                {...bindings}
            >
                <Modal.Header>
                    <Text id="modal-title" size={30}
                        css={{
                            textGradient: "45deg, $purple600 -20%, $pink600 100%",
                        }}
                        weight="bold">
                        lloc web development
                    </Text>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <Grid xs={13} sm={12} md={12} justify="flex-end" alignContent="center">
                            <Grid>
                                <Card css={{ w: "100%", h: "400px" }} 
                                isPressable
                                isHoverable
                                    {...bindings}
                                >
                                    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
                                        <Col>
                                            <Text size={20}
                                                css={{
                                                    textGradient: "45deg, $blue600 -20%, $pink600 50%",
                                                }}
                                                weight="bold">
                                                Next UI
                                            </Text>
                                        </Col>
                                    </Card.Header>
                                    <Card.Body css={{ p: 0 }}>
                                        <Image src="/nextui.png"
                                            objectFit="cover"
                                            width="100%"
                                            height="100%"
                                            alt="Relaxing app background"
                                        />
                                    </Card.Body>

                                    <Card.Footer
                                        isBlurred
                                        css={{
                                            position: "absolute",
                                            bgBlur: "#0f111466",
                                            borderTop: "$borderWeights$light solid $gray800",
                                            bottom: 0,
                                            zIndex: 1,
                                        }}
                                    >
                                        <Row>
                                            <Col>
                                                <Row>
                                                    <Col span={3}>
                                                        <Card.Image
                                                            src="https://nextui.org/images/breathing-app-icon.jpeg"
                                                            css={{ bg: "black", br: "50%" }}
                                                            height={40}
                                                            width={40}
                                                            alt="Breathing app icon"
                                                        />
                                                    </Col>
                                                    <Col>
                                                        <Text color="#d1d1d1" size={12}>
                                                            Breathing App
                                                        </Text>
                                                        <Text color="#d1d1d1" size={12}>
                                                            Get a good night's sleep.
                                                        </Text>
                                                    </Col>
                                                </Row>
                                            </Col>
                                            <Col>
                                                <Row justify="flex-end">
                                                    <Button
                                                        flat
                                                        auto
                                                        rounded
                                                        css={{ color: "#94f9f0", bg: "#94f9f026" }}
                                                    >
                                                        <Text
                                                            css={{ color: "inherit" }}
                                                            size={12}
                                                            weight="bold"
                                                            transform="uppercase"
                                                        >
                                                            Get App
                                                        </Text>
                                                    </Button>
                                                </Row>
                                            </Col>
                                        </Row>
                                    </Card.Footer>

                                </Card>
                            </Grid>

                            <Grid.Container gap={2} justify="flex-start">
                                <Grid xs={12} sm={12}>
                                    <Text size={20}
                                        css={{
                                            textGradient: "45deg, $blue600 -20%, $pink600 50%",
                                        }}
                                        weight="bold">
                                        Make beautiful websites regardless of your design experience.
                                        <br />Beautiful, fast and modern React UI library.
                                    </Text>
                                </Grid>
                            </Grid.Container>

                            <Grid.Container gap={2} justify="flex-start">
                                <Grid xs={12} sm={12}>
                                    <Button  flat
                                        auto
                                        rounded
                                        onClick={{
                                            action: () => {
                                                window.location.href = "https://nextui.org/";
                                            },
                                        }}
                                        css={{ color: "#94f9f0", bg: "#94f9f026"
                                        }} xs={12}>
                                        <Text size={20}
                                            css={{
                                                textGradient: "45deg, $blue600 -20%, $pink600 50%",
                                            }}>
                                            Get started
                                        </Text>
                                    </Button>
                                    <Button
                                        flat
                                        auto
                                        rounded
                                        css={{ color: "#94f9f0", bg: "#94f9f026",
                                        marginLeft: "20px"
                                        }}
                                    >
                                        <Text
                                            css={{ color: "white" }}
                                            size={12}
                                            weight="bold"
                                        >
                                            npm install @nextui-org/react
                                        </Text>
                                    </Button>
                                </Grid>
                            </Grid.Container>
                        </Grid>
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <Button auto color="error" rounded flat onClick={() => setVisible(false)}>
                        Close
                    </Button>
                    <Button auto color="secondary" rounded flat onClick={() => setVisible(false)}>Agree</Button>
                </Modal.Footer>
            </Modal>

            <Spacer y={1} />
            <Spacer y={1} />
        </>
    )
} 