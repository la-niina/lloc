import { Container, Card, Row, Text, Spacer, Image, Grid } from "@nextui-org/react"
import { Box } from "./Box.js"

export const Content = () => (
    <Box css={{ px: "$12", mt: "$8", "@xsMax": { px: "$10" } }}>
        <Text h2 size={40}
            justify="center"
            css={{
                textAlign: "center",
                textGradient: "45deg, $blue600 -20%, $pink600 50%",
            }}
            weight="bold">About IIo</Text>
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

        <Grid.Container gap={1} justify="center">
            <Grid>
                <Card>
                    <Card.Image
                        width={300}
                        height={300}
                        objectFit="cover"
                        alt="windows 11"
                        src="https://imgs.search.brave.com/vspsbjrgL1YEHqXsDiiu8_F9bYOBI49roMP7y0TNfII/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly8xLmJw/LmJsb2dzcG90LmNv/bS8tTGR4dGRRVjlF/ZHMvWU5kTDF5Z1Fn/TUkvQUFBQUFBQUFj/cTgvc1AwZktKRzUz/bmdVaGFFbHNGVnBW/MEI1YzdsYU9RT3N3/Q0xjQkdBc1lIUS9z/MjA0OC93aW5kb3dz/LTExLWZlYXR1cmVk/LWltYWdlLmpwZw" />
                </Card>
            </Grid>

            <Grid>
                <Card>
                    <Card.Image
                        width={300}
                        height={300}
                        objectFit="cover"
                        alt="ventura mac os"
                        src="https://imgs.search.brave.com/jFhr6THQlk41Z0j94o5tQ-rh5PtDD_VtwGQyKt66jfw/rs:fit:1200:750:1/g:ce/aHR0cHM6Ly93d3cu/cmVhbG1pY2VudHJh/bC5jb20vd3AtY29u/dGVudC91cGxvYWRz/LzIwMjIvMDYvbWFj/T1MtVmVudHVyYS5w/bmc" />
                </Card>
            </Grid>

            <Grid>
                <Card>
                    <Card.Image
                        width={300}
                        height={300}
                        objectFit="cover"
                        alt="cutfish"
                        src="https://imgs.search.brave.com/kGcSUSK-UmbGAuuO3fAuGjsRT7pP0txAykBpVtqQlCM/rs:fit:1200:1080:1/g:ce/aHR0cHM6Ly8xNDkz/NjYwODgudjIucHJl/c3NhYmxlY2RuLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/MS8wNi9jdXRlZmlz/aC1saW51eC1zY3Jl/ZW5zaG90LTQuanBn" />
                </Card>
            </Grid>

            <Grid>
                <Card>
                    <Card.Image
                        width={300}
                        height={300}
                        objectFit="cover"
                        alt="cloud"
                        src="https://imgs.search.brave.com/NTxp1tIW--6FQZYhfhA3VYllYG-fcuRKFU3vzuKnWTI/rs:fit:1200:1184:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2ZiL2E4/LzEwL2ZiYTgxMGQ1/NTFlMjcwNTAzNjlk/ZWFjN2VmYWI4YTYz/LmpwZw" />
                </Card>
            </Grid>

            <Grid>
                <Card>
                    <Card.Image
                        width={300}
                        height={300}
                        objectFit="cover"
                        alt="Card image background"
                        src="https://imgs.search.brave.com/Sy9TP6DDSsQKSUf7MhNqiV8UyLEKHIQMj_MM-RbR010/rs:fit:1000:664:1/g:ce/aHR0cHM6Ly9yMy53/aGlzdGxlb3V0LmNv/bS5hdS9wdWJsaWMv/aW1hZ2VzL2FydGlj/bGVzLzIwMjEvMDUv/YW5kcm9pZF8xMi5q/cGc" />
                </Card>
            </Grid>

            <Grid>
                <Card>
                    <Card.Image
                        width={300}
                        height={300}
                        objectFit="cover"
                        alt="Card image background"
                        src="https://cdn.wccftech.com/wp-content/uploads/2020/11/iOS-15-Concept.jpg" />
                </Card>
            </Grid>

        </Grid.Container>

        <Spacer y={1} />
        <Spacer y={1} />
    </Box>
);