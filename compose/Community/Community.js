import { Container, Card, Row, Collapse, Text, Spacer, Image, Grid, Button, Loading, Col } from "@nextui-org/react";
import { SunIcon } from './icons/SunIcon';
import { MoonIcon } from './icons/MoonIcon';
import { AnchorIcon } from './icons/AnchorIcon';
import { Box } from "./Box.js";

export const Content = () => (
    <>
        <Container>
            <Grid.Container gap={2} justify="flex-start">
                <Grid xs={12} sm={9} justify="flex-end" alignContent="center" alignItems="center">
                    <Collapse.Group shadow>
                        <Grid>
                            <Text id="modal-description">
                                Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                                dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
                                ac consectetur ac, vestibulum at eros. Praesent commodo cursus
                                magna, vel scelerisque nisl consectetur et. Cras mattis consectetur
                                purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
                                egestas eget quam. Morbi leo risus, porta ac consectetur ac,
                                vestibulum at eros. Praesent commodo cursus magna, vel scelerisque
                                nisl consectetur et. Cras mattis consectetur purus sit amet
                                fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
                                quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                                Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                                dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
                                ac consectetur ac, vestibulum at eros. Praesent commodo cursus
                                magna, vel scelerisque nisl consectetur et. Cras mattis consectetur
                                purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
                                egestas eget quam. Morbi leo risus, porta ac consectetur ac,
                                vestibulum at eros. Praesent commodo cursus magna, vel scelerisque
                                nisl consectetur et. Cras mattis consectetur purus sit amet
                                fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
                                quam.



                                Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                                dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
                                ac consectetur ac, vestibulum at eros. Praesent commodo cursus
                                magna, vel scelerisque nisl consectetur et. Cras mattis consectetur
                                purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
                                egestas eget quam. Morbi leo risus, porta ac consectetur ac,
                                vestibulum at eros. Praesent commodo cursus magna, vel scelerisque
                                nisl consectetur et. Cras mattis consectetur purus sit amet
                                fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
                                quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                                Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                                dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
                                ac consectetur ac, vestibulum at eros. Praesent commodo cursus
                                magna, vel scelerisque nisl consectetur et. Cras mattis consectetur
                                purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
                                egestas eget quam. Morbi leo risus, porta ac consectetur ac,
                                vestibulum at eros. Praesent commodo cursus magna, vel scelerisque
                                nisl consectetur et. Cras mattis consectetur purus sit amet
                                fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
                                quam.
                            </Text>
                        </Grid>
                    </Collapse.Group>
                </Grid>

                <Grid xs={12} sm={3} justify="flex-end" alignContent="space-around" alignItems="baseline" variant="sticky">
                    <Collapse.Group shadow>
                        <Collapse weight="bold" css={{ textGradient: "45deg, $purple600 -20%, $pink600 100%" }} title="iOS development Swift or Flutter" arrowIcon={<AnchorIcon />}>
                            <Text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                nisi ut aliquip ex ea commodo consequat.
                            </Text>
                        </Collapse>
                        <Collapse title="Web development node.js" arrowIcon={<MoonIcon />}>
                            <Text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                nisi ut aliquip ex ea commodo consequat.
                            </Text>
                        </Collapse>
                        <Collapse title="Android development Kotlin" arrowIcon={<SunIcon />}>
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
        </Container>

        <Spacer y={1} />
        <Spacer y={1} />
    </>
);