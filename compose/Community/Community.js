import { Container, Card, Row, Collapse, Text, Spacer, Image, Grid, Button, Loading, Col } from "@nextui-org/react";
import { SunIcon } from './icons/SunIcon';
import { MoonIcon } from './icons/MoonIcon';
import { AnchorIcon } from './icons/AnchorIcon';
import { Box } from "./Box.js";

export const Content = () => (
  <>
    <Spacer y={1} />
    <Container>
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
            <Card.Footer css={{ justifyItems: "flex-start" }}>
              <Row wrap="wrap" justify="space-between" align="center">
                <Text b>New folder</Text>
                <Text css={{ color: "$accents7", fontWeight: "$semibold", fontSize: "$sm" }}>
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
            <Card.Footer css={{ justifyItems: "flex-start" }}>
              <Row wrap="wrap" justify="space-between" align="center">
                <Text b>New folder</Text>
                <Text css={{ color: "$accents7", fontWeight: "$semibold", fontSize: "$sm" }}>
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
            <Card.Footer css={{ justifyItems: "flex-start" }}>
              <Row wrap="wrap" justify="space-between" align="center">
                <Text b>New folder</Text>
                <Text css={{ color: "$accents7", fontWeight: "$semibold", fontSize: "$sm" }}>
                  12.56 MB
                </Text>
              </Row>
            </Card.Footer>
          </Card>
        </Grid>
      </Grid.Container>
    </Container>
    <Spacer y={1} />
    <Spacer y={1} />
  </>
);