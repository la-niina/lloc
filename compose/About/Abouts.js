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
                                            services. We specialize in developing software solutions for both mobile
                                            and web platforms. We offer services such as custom software development,
                                            UI/UX design, software testing, and maintenance. Additionally, we provide
                                            consulting services to help our clients understand their technology needs and
                                            create solutions that are tailored to their requirements. We strive to  provide
                                            the best customer experience through our highly professional and experienced team.
                                            <br />
                                            <br />
                                            <a b>We can provide various services related to software development, such as:</a>
                                            <br />✅ consulting and advising on best practices for software development
                                            <br />✅ tutoring and training on software development topics, such as programming languages and frameworks
                                            <br />✅ creating installation media for different devices, such as installing Mac OS on a Windows laptop/desktop
                                            <br />✅ sharing information and resources on software development
                                            <br />✅ assistance with debugging and troubleshooting existing software
                                            <br />✅ building custom software solutions or customizing existing software products
                                            <br />✅ providing technical support for software-related issues
                                            <br />✅ creating automated build, test, and release processes for software applications.
                                            <br />
                                            <br />
                                            <a b>We are also experienced in providing services related to cloud computing, such as:</a>
                                            <br />✅ migrating applications to the cloud
                                            <br />✅ deploying and managing cloud-hosted applications
                                            <br />✅ building cloud-native applications
                                            <br />✅ developing and deploying serverless architectures
                                            <br />✅ designing and managing cloud infrastructure
                                            <br />✅ building secure and compliant cloud applications
                                            <br />✅ implementing DevOps and CI/CD pipelines in the cloud
                                            <br />✅ monitoring and optimizing cloud performance.

                                            We look forward to helping you with your software development needs!
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
                                    Your can also directly email me on my email address if
                                    your not interested in filling in the informations above
                                    or also contact me throught my social media handles below
                                </Text>

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
                                        <Container fluid sm justify="center">
                                            <Text justify="flex-start"
                                                css={{
                                                    textAlign: "flex-start",
                                                }}>
                                                Get involved in our community. Everyone is welcome!
                                                <br />
                                                <br />
                                                We want everyone to be a part of our community! We host events and activities throughout
                                                the year and encourage everyone to participate. We also have an active online presence
                                                and would love for you to join us on social media and take part in our discussions.
                                                If you have an idea for an event or activity, or would like to volunteer,
                                                please reach out and let us know. We look forward to hearing from you!
                                            </Text>
                                        </Container>
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