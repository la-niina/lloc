import { Container, Text, Spacer, Grid, Card, Col, Row, Button } from "@nextui-org/react"
import { Box } from "./Box.js"
import { Card1 } from './Card/Card1';
import { Card2 } from './Card/Card2';
import { Card3 } from './Card/Card3';
import { Card4 } from './Card/Card4';
import { Card5 } from './Card/Card5';

export const Content = () => (
  <>
    <Grid.Container gap={2} justify="center">
      <Grid xs={12} sm={4}>
        <Card1 />
      </Grid>
      <Grid xs={12} sm={4}>
        <Card2 />
      </Grid>
      <Grid xs={12} sm={4}>
        <Card3 />
      </Grid>
      <Grid xs={12} sm={5}>
        <Card4 />
      </Grid>
      <Grid xs={12} sm={7}>
        <Card5 />
      </Grid>
    </Grid.Container>
    <Spacer y={1} />
  </>
);