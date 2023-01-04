import { Container, Card, Row, Text, Spacer, Image, Grid, Button, Loading, Col } from "@nextui-org/react"
import { Box } from "./Box.js"

export const Content = () => (
    <Box css={{ px: "$12", mt: "$8", "@xsMax": { px: "$10" } }}>
        <Grid.Container gap={1} justify="flex-start">

            <Grid>
                <Card css={{ mw: "300px" }}>
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

                    <Card.Footer>
                        <Grid>
                            <Row justify="center">
                                <Text size="sm">
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Text>
                            </Row>
                            <Row justify="flex-end">
                                <Loading type="points-opacity" color="currentColor" size="xl" />
                            </Row>
                        </Grid>
                    </Card.Footer>
                </Card>
            </Grid>


            <Grid>
                <Card css={{ mw: "300px" }}>
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
                        height={300}
                        objectFit="cover"
                        alt="ventura mac os"
                        src="https://imgs.search.brave.com/jFhr6THQlk41Z0j94o5tQ-rh5PtDD_VtwGQyKt66jfw/rs:fit:1200:750:1/g:ce/aHR0cHM6Ly93d3cu/cmVhbG1pY2VudHJh/bC5jb20vd3AtY29u/dGVudC91cGxvYWRz/LzIwMjIvMDYvbWFj/T1MtVmVudHVyYS5w/bmc" />
                    <Card.Footer>
                    <Grid>
                            <Row justify="center">
                                <Text size="sm">
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Text>
                            </Row>
                            <Row justify="flex-end">
                                <Loading type="points-opacity" color="currentColor" size="xl" />
                            </Row>
                        </Grid>
                    </Card.Footer>
                </Card>
            </Grid>

            <Grid>
                <Card css={{ mw: "300px" }}>
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
                        height={300}
                        objectFit="cover"
                        alt="cutfish"
                        src="https://imgs.search.brave.com/kGcSUSK-UmbGAuuO3fAuGjsRT7pP0txAykBpVtqQlCM/rs:fit:1200:1080:1/g:ce/aHR0cHM6Ly8xNDkz/NjYwODgudjIucHJl/c3NhYmxlY2RuLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/MS8wNi9jdXRlZmlz/aC1saW51eC1zY3Jl/ZW5zaG90LTQuanBn" />
                    <Card.Footer>
                    <Grid>
                            <Row justify="center">
                                <Text size="sm">
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Text>
                            </Row>
                            <Row justify="flex-end">
                                <Loading type="points-opacity" color="currentColor" size="xl" />
                            </Row>
                        </Grid>
                    </Card.Footer>
                </Card>
            </Grid>

            <Grid>
                <Card css={{ mw: "300px" }}>
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
                        height={300}
                        objectFit="cover"
                        alt="cloud"
                        src="https://imgs.search.brave.com/NTxp1tIW--6FQZYhfhA3VYllYG-fcuRKFU3vzuKnWTI/rs:fit:1200:1184:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2ZiL2E4/LzEwL2ZiYTgxMGQ1/NTFlMjcwNTAzNjlk/ZWFjN2VmYWI4YTYz/LmpwZw" />
                    <Card.Footer>
                    <Grid>
                            <Row justify="center">
                                <Text size="sm">
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Text>
                            </Row>
                            <Row justify="flex-end">
                                <Loading type="points-opacity" color="currentColor" size="xl" />
                            </Row>
                        </Grid>
                    </Card.Footer>
                </Card>
            </Grid>

            <Grid>
                <Card css={{ mw: "300px" }}>
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
                        height={300}
                        objectFit="cover"
                        alt="Card image background"
                        src="https://imgs.search.brave.com/Sy9TP6DDSsQKSUf7MhNqiV8UyLEKHIQMj_MM-RbR010/rs:fit:1000:664:1/g:ce/aHR0cHM6Ly9yMy53/aGlzdGxlb3V0LmNv/bS5hdS9wdWJsaWMv/aW1hZ2VzL2FydGlj/bGVzLzIwMjEvMDUv/YW5kcm9pZF8xMi5q/cGc" />
                    <Card.Footer>
                    <Grid>
                            <Row justify="center">
                                <Text size="sm">
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Text>
                            </Row>
                            <Row justify="flex-end">
                                <Loading type="points-opacity" color="currentColor" size="xl" />
                            </Row>
                        </Grid>
                    </Card.Footer>
                </Card>
            </Grid>

            <Grid>
                <Card css={{ mw: "300px" }}>
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
                        height={300}
                        objectFit="cover"
                        alt="Card image background"
                        src="https://cdn.wccftech.com/wp-content/uploads/2020/11/iOS-15-Concept.jpg" />
                    <Card.Footer>
                    <Grid>
                            <Row justify="center">
                                <Text size="sm">
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Text>
                            </Row>
                            <Row justify="flex-end">
                                <Loading type="points-opacity" color="currentColor" size="xl" />
                            </Row>
                        </Grid>
                    </Card.Footer>
                </Card>
            </Grid>

        </Grid.Container>

        <Spacer y={1} />
        <Spacer y={1} />
    </Box>
);