import { Container, Card, Row, Collapse, Text, Spacer, Image, Grid, Button, Loading, Col } from "@nextui-org/react";
import { SunIcon } from './icons/SunIcon';
import { MoonIcon } from './icons/MoonIcon';
import { AnchorIcon } from './icons/AnchorIcon';
import { Box } from "./Box.js";

export const Content = () => (
  <>
    <Spacer y={1} />
    <Container>
      <Grid xs={13} sm={12} md={12} justify="flex-end" alignContent="center">
        <Grid.Container gap={2} justify="flex-start">
          <Grid xs={6} sm={2}>
            <Card variant="flat"
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
                  position: "absolute",
                  bgBlur: "#ffffff66",
                  borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
                  bottom: 0,
                  zIndex: 1,
                }}>
                <Row wrap="wrap" justify="space-between" align="center">
                  <Text size={12} b>New folder</Text>
                  <Text size={8} css={{ color: "$accents7", fontWeight: "$semibold", fontSize: "$sm" }}>
                    12.56 MB
                  </Text>
                </Row>
              </Card.Footer>
            </Card>
          </Grid>

          <Grid xs={6} sm={2}>
            <Card variant="flat"
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
                  position: "absolute",
                  bgBlur: "#ffffff66",
                  borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
                  bottom: 0,
                  zIndex: 1,
                }}>
                <Row wrap="wrap" justify="space-between" align="center">
                  <Text size={12} b>New folder</Text>
                  <Text size={8} css={{ color: "$accents7", fontWeight: "$semibold", fontSize: "$sm" }}>
                    12.56 MB
                  </Text>
                </Row>
              </Card.Footer>
            </Card>
          </Grid>

          <Grid xs={6} sm={2}>
            <Card variant="flat"
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
                  position: "absolute",
                  bgBlur: "#ffffff66",
                  borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
                  bottom: 0,
                  zIndex: 1,
                }}>
                <Row wrap="wrap" justify="space-between" align="center">
                  <Text size={12} b>New folder</Text>
                  <Text size={8} css={{ color: "$accents7", fontWeight: "$semibold", fontSize: "$sm" }}>
                    12.56 MB
                  </Text>
                </Row>
              </Card.Footer>
            </Card>
          </Grid>

          <Grid xs={6} sm={2}>
            <Card variant="flat"
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
                  position: "absolute",
                  bgBlur: "#ffffff66",
                  borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
                  bottom: 0,
                  zIndex: 1,
                }}>
                <Row wrap="wrap" justify="space-between" align="center">
                  <Text size={12} b>New folder</Text>
                  <Text size={8} css={{ color: "$accents7", fontWeight: "$semibold", fontSize: "$sm" }}>
                    12.56 MB
                  </Text>
                </Row>
              </Card.Footer>
            </Card>
          </Grid>

          <Grid xs={6} sm={2}>
            <Card variant="flat"
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
                  position: "absolute",
                  bgBlur: "#ffffff66",
                  borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
                  bottom: 0,
                  zIndex: 1,
                }}>
                <Row wrap="wrap" justify="space-between" align="center">
                  <Text size={12} b>New folder</Text>
                  <Text size={8} css={{ color: "$accents7", fontWeight: "$semibold", fontSize: "$sm" }}>
                    12.56 MB
                  </Text>
                </Row>
              </Card.Footer>
            </Card>
          </Grid>

          <Grid xs={6} sm={2}>
            <Card variant="flat"
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
                  position: "absolute",
                  bgBlur: "#ffffff66",
                  borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
                  bottom: 0,
                  zIndex: 1,
                }}>
                <Row wrap="wrap" justify="space-between" align="center">
                  <Text size={12} b>New folder</Text>
                  <Text size={8} css={{ color: "$accents7", fontWeight: "$semibold", fontSize: "$sm" }}>
                    12.56 MB
                  </Text>
                </Row>
              </Card.Footer>
            </Card>
          </Grid>

          <Grid xs={6} sm={2}>
            <Card variant="flat"
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
                  position: "absolute",
                  bgBlur: "#ffffff66",
                  borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
                  bottom: 0,
                  zIndex: 1,
                }}>
                <Row wrap="wrap" justify="space-between" align="center">
                  <Text size={12} b>New folder</Text>
                  <Text size={8} css={{ color: "$accents7", fontWeight: "$semibold", fontSize: "$sm" }}>
                    12.56 MB
                  </Text>
                </Row>
              </Card.Footer>
            </Card>
          </Grid>

          <Grid xs={6} sm={2}>
            <Card variant="flat"
              isHoverable
              isPressable
              css={{
                bg: "transparent"
              }}>
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
                  position: "absolute",
                  bgBlur: "#ffffff66",
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