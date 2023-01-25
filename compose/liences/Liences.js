/* eslint-disable react/no-unescaped-entities */
import {
  Container,
  Card,
  Row,
  Text,
  Spacer,
  Textarea,
  Grid,
  Progress,
  Col,
  Image,
  Button,
} from "@nextui-org/react";
import { Box } from "./Box.js";

export const Content = () => (
  <>
    <Container>
      <Grid.Container gap={2} justify="flex-start">
        <Grid>
          <Text
            h2
            size={40}
            css={{
              textGradient: "45deg, $blue600 -20%, $pink600 50%",
            }}
            weight="bold"
          >
            App Licensing
          </Text>

          <Text size="$lg">
            Google Play offers a licensing service that lets you enforce
            licensing policies for applications that you publish on Google Play.
            With Google Play Licensing, your application can query Google Play
            at run time to obtain the licensing status for the current user,
            then allow or disallow further use as appropriate.
            <br />
            Using the service, you can apply a flexible licensing policy on an
            application-by-application basis—each application can enforce
            licensing in the way most appropriate for it.
            <br />
            <br /> If necessary, an application can apply custom constraints
            based on the licensing status obtained from Google Play. <br />
            For example, an application can check the licensing status and then
            apply custom constraints that allow the user to run it unlicensed
            for a specific validity period. An application can also restrict use
            of the application to a specific device, in addition to any other
            constraints. The licensing service is a secure means of controlling
            access to your applications.
            <br />
            <br /> When an application checks the licensing status, the Google
            Play server signs the licensing status response using a key pair
            that is uniquely associated with the application. Although it's
            possible for your application to store the public key in its
            compiled .apk file, it's much safer to verify the licensing status
            response on a server that you trust. Any application that you
            publish through Google Play can use the Google Play Licensing
            service.
            <br />
            <br /> No special account or registration is needed. Additionally,
            because the service uses no dedicated framework APIs, you can add
            licensing to any application that uses a minimum API level of 3 or
            higher.
          </Text>
          <Card css={{ $$cardColor: "#16181A" }}>
            <Card.Body>
              <Row justify="center" align="center">
                <Text
                  h6
                  size="$lg"
                  color="white"
                  css={{
                    m: 0,
                    textGradient: "45deg, $blue600 -20%, $pink600 50%",
                  }}
                >
                  Note: The Google Play Licensing service is primarily intended
                  for paid applications that wish to verify that the current
                  user did in fact pay for the application on Google Play.
                  <br />
                  <br />
                  However, any application (including free apps) may use the
                  licensing service to initiate the download of an APK expansion
                  file. In which case, the request that your application sends
                  to the licensing service is not to check whether the user paid
                  for the app, but to request the URL of the expansion files.
                  For information about downloading expansion files for your
                  application, read the guide to APK Expansion Files.
                </Text>
              </Row>
            </Card.Body>
          </Card>
          <Spacer y={1} />
          <Text size="$lg">
            To learn more about Google Play's application licensing service and
            start integrating it into your applications, read the following
            documents:
          </Text>
          <Text
            h2
            size={20}
            css={{
              textGradient: "45deg, $blue600 -20%, $pink600 50%",
            }}
            weight="bold"
          >
            Licensing Overview
          </Text>
          <Text size="$lg">
            Describes how the service works and what a typical licensing
            implementation looks like.
          </Text>

          <Text
            h2
            size={20}
            css={{
              textGradient: "45deg, $blue600 -20%, $pink600 50%",
            }}
            weight="bold"
          >
            Setting Up for Licensing
          </Text>
          <Text size="$lg">
            Explains how to set up your Google Play account, development
            environment, and testing environment in order to add licensing to
            your app.
          </Text>

          <Text
            h2
            size={20}
            css={{
              textGradient: "45deg, $blue600 -20%, $pink600 50%",
            }}
            weight="bold"
          >
            Adding Server-Side License Verification to Your App
          </Text>
          <Text size="$lg">
            Provides a step-by-step guide to add server-side licensing
            verification to your application.
          </Text>
          <Spacer y={1} />
          <Text
            h2
            size={20}
            css={{
              textGradient: "45deg, $blue600 -20%, $pink600 50%",
            }}
            weight="bold"
          >
            Licensing Reference
          </Text>
          <Text size="$lg">
            Provides detailed information about the licensing library's classes
            and the service response codes.
          </Text>
        </Grid>
      </Grid.Container>
    </Container>

    <Spacer y={1} />
    <Spacer y={1} />

    <Container>
      <Grid.Container>
        <Grid xs={12} sm={6} justify="flex-start">
          <Col>
            <Text>Lets Talk</Text>
            <Text h3>Let’s stay in touch!</Text>
          </Col>
        </Grid>

        <Grid xs={12} sm={6} justify="flex-end">
          <Button
            flat
            rounded
            size="md"
            color="gradient"
            auto
            css={{
              color: "#fff",
            }}
          >
            contact
          </Button>
        </Grid>
      </Grid.Container>
    </Container>

    <Spacer y={1} />

    <Container>
      <Grid.Container xs={12} sm={12}>
        <Grid>
          <Progress color="secondary" size="xs" value={100} />
        </Grid>
      </Grid.Container>
    </Container>

    <Container>
      <Grid.Container>
        <Grid xs={12} sm={6} justify="flex-start">
          <Col>
            <Text>
              A group of simple, open source Android apps without ads and
              unnecessary permissions, with customizable colors.
            </Text>
          </Col>
        </Grid>
      </Grid.Container>
    </Container>

    <Spacer y={1} />
    <Spacer y={1} />

    <Container>
      <Grid.Container>
        <Grid xs={12} sm={6} justify="flex-start">
          <Image
            alt="twitter"
            src="/logo_autum.png"
            height="35px"
            width="35px"
            objectFit="cover"
          />

          <Container>
            <Col>
              <Text>Replacing your Android apps one by one since 2016.</Text>
              <Text>Copyright © 2023, All Rights Reserved.</Text>
            </Col>
          </Container>
        </Grid>

        <Grid xs={12} sm={6} justify="flex-end">
          <Grid justify="center">
            <Row justify="center">
              <Grid xs={12} sm={6} gap={2} justify="center">
                <Image
                  alt="icon "
                  height="35px"
                  width="100%"
                  src="/icon-socials.svg"
                />
              </Grid>
              <Grid xs={12} sm={6} gap={2} justify="center">
                <Image
                  alt="twitter"
                  src="/telegram.svg"
                  height="35px"
                  width="35px"
                  objectFit="cover"
                />
                <Image
                  alt="twitter"
                  src="/twitter.svg"
                  height="35px"
                  width="35px"
                  objectFit="cover"
                />
                <Image
                  alt="twitter"
                  src="/github.svg"
                  height="35px"
                  width="35px"
                  objectFit="cover"
                />
                <Image
                  alt="twitter"
                  src="/gmail.svg"
                  height="35px"
                  width="35px"
                  objectFit="cover"
                />
              </Grid>
            </Row>
          </Grid>
        </Grid>
      </Grid.Container>
    </Container>

    <Spacer y={1} />
    <Spacer y={1} />
  </>
);
