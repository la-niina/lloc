import {
  Container,
  Card,
  Row,
  Collapse,
  Text,
  Spacer,
  Image,
  Grid,
  Button,
  Loading,
  Col,
  Link,
  Input,
} from "@nextui-org/react";
import { SunIcon } from "./icons/SunIcon";
import { MoonIcon } from "./icons/MoonIcon";
import { AnchorIcon } from "./icons/AnchorIcon";
import { SearchIcon } from "./icons/SearchIcon";
import { Box } from "./Box.js";

export const Content = () => (
  <>
    <Spacer y={1} />
    <Container>
      <Row>
        <Grid.Container>
          <Card isHoverable 
          css={{ p: "$6", mw: "400px" , borderRadius: "50px"}}>
            <Card.Body css={{ p: 0 }}>
              <Container>
                <Grid.Container css={{ pl: "$0" , p: "0"}}>
                  <Grid xs={12} sm={6} md={6}>
                      <Image
                        alt="nextui logo"
                        src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                        width="100%"
                        height="100%"
                        css={{
                          width: "100%",
                          height: "100%",
                        }}
                      />
                  </Grid>

                  <Grid xs={12} sm={6} md={6}>
                    <Text>
                      Make beautiful websites regardless of your design
                      experience.
                    </Text>
                  </Grid>
                </Grid.Container>
              </Container>
            </Card.Body>
          </Card>
        </Grid.Container>
      </Row>
    </Container>

    <Spacer y={1} />
    <Spacer y={1} />
  </>
);
