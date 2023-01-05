import { Container, Card, Row, Collapse, Text, Spacer, Image, Grid, Button, Loading, Col } from "@nextui-org/react";
import { SunIcon } from './icons/SunIcon';
import { MoonIcon } from './icons/MoonIcon';
import { AnchorIcon } from './icons/AnchorIcon';
import { Box } from "./Box.js";

export const Content = () => (
    <>
        <Grid.Container gap={2}>
            <Grid>
                <Collapse.Group shadow>
                    <Collapse  weight="bold"  css={{textGradient: "45deg, $purple600 -20%, $pink600 100%"}} title="Anchor" arrowIcon={<AnchorIcon />}>
                        <Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                            enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat.
                        </Text>
                    </Collapse>
                    <Collapse title="Moon" arrowIcon={<MoonIcon />}>
                        <Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                            enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat.
                        </Text>
                    </Collapse>
                    <Collapse title="Sun" arrowIcon={<SunIcon />}>
                        <Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                            enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat.
                        </Text>
                    </Collapse>
                </Collapse.Group>
            </Grid>
        </Grid.Container>
        <Spacer y={1} />
        <Spacer y={1} />
    </>
);