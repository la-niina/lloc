import { Container, Dropdown, Modal, useModal, Card, Row, Text, Spacer, Image, Grid, Button, Loading, Col, Popover, User } from "@nextui-org/react"
import { Box } from "./Box.js";
import { UserTwitterCard } from "./Icons/UserTwitterCard";
import { DeleteUser } from "./Icons/DeleteUser";

export const Content = () => (
    <>
        <Grid.Container gap={1} justify="center">
            <Grid>
                <Card isPressable
                    onClick={() => {

                    }}
                    css={{ mw: "300px" }}>
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

            <Grid>
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

            <Grid>
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

            <Grid>
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

            <Grid>
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

            <Grid>
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

        <Spacer y={1} />
        <Spacer y={1} />
    </>
);