import React from "react";
import { Text, Button, Grid, Row } from "@nextui-org/react";

export const DeleteUser = () => {
  return (
    <Grid.Container
      css={{ borderRadius: "14px", padding: "0.75rem", maxWidth: "330px" }}
    >
      <Row justify="center" align="center">
        <Text b>Confirm</Text>
      </Row>
      <Row>
        <Text>
          Are you sure you want to delete this user ? By doing this, you will
          not be able to recover the data.
        </Text>
      </Row>
      <Grid.Container justify="space-between" alignContent="center">
        <Grid>
          <Button size="sm" light>
            Cancel
          </Button>
        </Grid>
        <Grid>
          <Button size="sm" shadow color="error">
            Delete
          </Button>
        </Grid>
      </Grid.Container>
    </Grid.Container>
  );
};