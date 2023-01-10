import { Container, Card, Row, Collapse, Text, Spacer, Image, Grid, Button, Loading, Col, Link, Input } from "@nextui-org/react";
import { SunIcon } from './icons/SunIcon';
import { MoonIcon } from './icons/MoonIcon';
import { AnchorIcon } from './icons/AnchorIcon';
import { SearchIcon } from './icons/SearchIcon';
import { Box } from "./Box.js";

export const Content = () => (
  <>
    <Spacer y={1} />
    <Container>
      <Grid xs={12} sm={12} md={12} justify="flex-end" alignContent="center">
        <Grid.Container gap={2} justify="flex-start">
          <Input
            clearable
            contentLeft={
              <SearchIcon fill="var(--nextui-colors-accents6)" size={16} />
            }
            contentLeftStyling={false}
            css={{
              w: "100%",
              "@xsMax": {
                mw: "300px",
              },
              "& .nextui-input-content--left": {
                h: "100%",
                ml: "$4",
                dflex: "center",
              },
            }}
            size="lg"
            placeholder="Search..."
            list="form-control"
          />
        </Grid.Container>
      </Grid>
    </Container>

    <Container>
      <Grid xs={12} sm={12} md={12} justify="flex-end" alignContent="center">
        <Grid.Container gap={2} justify="flex-start">
          <Grid xs={4} sm={1.5}>
            <Card
              isHoverable
              isPressable>
              <Card.Body css={{ p: 0 }}>
                <Card.Image
                  src="/folder.png"
                  objectFit="cover"
                  width="80%"
                  height="100%"
                  alt="folder"
                />
              </Card.Body>
              <Card.Footer
                isBlurred
                css={{
                  justifyItems: "flex-start",
                  bgBlur: "#0f111466",
                  borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
                  bottom: 0,
                  zIndex: 1,
                }}>
                <Row wrap="wrap" justify="space-between" align="center">
                  <Text size={12} b>New folder</Text>
                  <Text size={8} css={{ color: "$secondary", fontWeight: "$semibold", fontSize: "$sm" }}>
                    12.56 MB
                  </Text>
                </Row>
              </Card.Footer>
            </Card>
          </Grid>

          <Grid xs={4} sm={1.5}>
            <Card
              isHoverable
              isPressable>
              <Card.Body css={{ p: 0 }}>
                <Card.Image
                  src="/folder.png"
                  objectFit="cover"
                  width="80%"
                  height="100%"
                  alt="folder"
                />
              </Card.Body>
              <Card.Footer isBlurred
                css={{
                  justifyItems: "flex-start",
                  bgBlur: "#0f111466",
                  borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
                  bottom: 0,
                  zIndex: 1,
                }}>
                <Row wrap="wrap" justify="space-between" align="center">
                  <Text size={12} b>New folder</Text>
                  <Text size={8} css={{ color: "$secondary", fontWeight: "$semibold", fontSize: "$sm" }}>
                    12.56 MB
                  </Text>
                </Row>
              </Card.Footer>
            </Card>
          </Grid>

          <Grid xs={4} sm={1.5}>
            <Card
              isHoverable
              isPressable>
              <Card.Body css={{ p: 0 }}>
                <Card.Image
                  src="/folder.png"
                  objectFit="cover"
                  width="80%"
                  height="100%"
                  alt="folder"
                />
              </Card.Body>
              <Card.Footer isBlurred
                css={{
                  justifyItems: "flex-start",
                  bgBlur: "#0f111466",
                  borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
                  bottom: 0,
                  zIndex: 1,
                }}>
                <Row wrap="wrap" justify="space-between" align="center">
                  <Text size={12} b>New folder</Text>
                  <Text size={8} css={{ color: "$secondary", fontWeight: "$semibold", fontSize: "$sm" }}>
                    12.56 MB
                  </Text>
                </Row>
              </Card.Footer>
            </Card>
          </Grid>

          <Grid xs={4} sm={1.5}>
            <Card
              isHoverable
              isPressable>
              <Card.Body css={{ p: 0 }}>
                <Card.Image
                  src="/folder.png"
                  objectFit="cover"
                  width="80%"
                  height="100%"
                  alt="folder"
                />
              </Card.Body>
              <Card.Footer isBlurred
                css={{
                  justifyItems: "flex-start",
                  bgBlur: "#0f111466",
                  borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
                  bottom: 0,
                  zIndex: 1,
                }}>
                <Row wrap="wrap" justify="space-between" align="center">
                  <Text size={12} b>New folder</Text>
                  <Text size={8} css={{ color: "$secondary", fontWeight: "$semibold", fontSize: "$sm" }}>
                    12.56 MB
                  </Text>
                </Row>
              </Card.Footer>
            </Card>
          </Grid>

          <Grid xs={4} sm={1.5}>
            <Card
              isHoverable
              isPressable>
              <Card.Body css={{ p: 0 }}>
                <Card.Image
                  src="/folder.png"
                  objectFit="cover"
                  width="80%"
                  height="100%"
                  alt="folder"
                />
              </Card.Body>
              <Card.Footer isBlurred
                css={{
                  justifyItems: "flex-start",
                  bgBlur: "#0f111466",
                  borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
                  bottom: 0,
                  zIndex: 1,
                }}>
                <Row wrap="wrap" justify="space-between" align="center">
                  <Text size={12} b>New folder</Text>
                  <Text size={8} css={{ color: "$secondary", fontWeight: "$semibold", fontSize: "$sm" }}>
                    12.56 MB
                  </Text>
                </Row>
              </Card.Footer>
            </Card>
          </Grid>

          <Grid xs={4} sm={1.5}>
            <Card
              isHoverable
              isPressable>
              <Card.Body css={{ p: 0 }}>
                <Card.Image
                  src="/folder.png"
                  objectFit="cover"
                  width="80%"
                  height="100%"
                  alt="folder"
                />
              </Card.Body>
              <Card.Footer isBlurred
                css={{
                  justifyItems: "flex-start",
                  bgBlur: "#0f111466",
                  borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
                  bottom: 0,
                  zIndex: 1,
                }}>
                <Row wrap="wrap" justify="space-between" align="center">
                  <Text size={12} b>New folder</Text>
                  <Text size={8} css={{ color: "$secondary", fontWeight: "$semibold", fontSize: "$sm" }}>
                    12.56 MB
                  </Text>
                </Row>
              </Card.Footer>
            </Card>
          </Grid>

          <Grid xs={4} sm={1.5}>
            <Card
              isHoverable
              isPressable>
              <Card.Body css={{ p: 0 }}>
                <Card.Image
                  src="/folder.png"
                  objectFit="cover"
                  width="80%"
                  height="100%"
                  alt="folder"
                />
              </Card.Body>
              <Card.Footer isBlurred
                css={{
                  justifyItems: "flex-start",
                  bgBlur: "#0f111466",
                  borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
                  bottom: 0,
                  zIndex: 1,
                }}>
                <Row wrap="wrap" justify="space-between" align="center">
                  <Text size={12} b>New folder</Text>
                  <Text size={8} css={{ color: "$secondary", fontWeight: "$semibold", fontSize: "$sm" }}>
                    12.56 MB
                  </Text>
                </Row>
              </Card.Footer>
            </Card>
          </Grid>

          <Grid xs={4} sm={1.5}>
            <Card
              isHoverable
              isPressable>
              <Card.Body css={{ p: 0 }}>
                <Card.Image
                  src="/folder.png"
                  objectFit="cover"
                  width="80%"
                  height="100%"
                  alt="folder"
                />
              </Card.Body>
              <Card.Footer
                isBlurred
                css={{
                  justifyItems: "flex-start",
                  bgBlur: "#0f111466",
                  borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
                  bottom: 0,
                  zIndex: 1,
                }}>
                <Row wrap="wrap" justify="space-between" align="center">
                  <Text size={12} b>New folder</Text>
                  <Text size={8} css={{ color: "$secondary", fontWeight: "$semibold", fontSize: "$sm" }}>
                    12.56 MB
                  </Text>
                </Row>
              </Card.Footer>
            </Card>
          </Grid>

          <Grid xs={4} sm={1.5}>
            <Card
              isHoverable
              isPressable>
              <Card.Body css={{ p: 0 }}>
                <Card.Image
                  src="/folder.png"
                  objectFit="cover"
                  width="80%"
                  height="100%"
                  alt="folder"
                />
              </Card.Body>
              <Card.Footer
                isBlurred
                css={{
                  justifyItems: "flex-start",
                  bgBlur: "#0f111466",
                  borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
                  bottom: 0,
                  zIndex: 1,
                }}>
                <Row wrap="wrap" justify="space-between" align="center">
                  <Text size={12} b>New folder</Text>
                  <Text size={8} css={{ color: "$secondary", fontWeight: "$semibold", fontSize: "$sm" }}>
                    12.56 MB
                  </Text>
                </Row>
              </Card.Footer>
            </Card>
          </Grid>

          <Grid xs={4} sm={1.5}>
            <Card
              isHoverable
              isPressable>
              <Card.Body css={{ p: 0 }}>
                <Card.Image
                  src="/google-docs.png"
                  objectFit="cover"
                  width="80%"
                  height="100%"
                  alt="folder"
                />
              </Card.Body>
              <Card.Footer
                css={{
                  bgBlur: "#0f111466",
                  borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
                  bottom: 0,
                  zIndex: 1,
                }}>
                <Text justify="center" align="center" size={12} b>ReadMe Docs</Text>
              </Card.Footer>
            </Card>
          </Grid>

        </Grid.Container>
      </Grid>
    </Container>

    <Spacer y={1} />
    <Spacer y={1} />
  </>
);