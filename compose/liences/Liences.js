import { Container, Card, Row, Text, Spacer } from "@nextui-org/react"
import { Box } from "./Box.js"

export const Content = () => (
    <Box css={{ px: "$12", mt: "$8", "@xsMax": { px: "$10" } }}>
        <Text h2 size={40}
            css={{
                textGradient: "45deg, $blue600 -20%, $pink600 50%",
            }}
            weight="bold">App Licensing</Text>

        <Text size="$lg">
            Google Play offers a licensing service that lets you enforce licensing policies for applications that you publish on Google Play. With Google Play Licensing, your application can query Google Play at run time to obtain the licensing status for the current user, then allow or disallow further use as appropriate.<br />
            Using the service, you can apply a flexible licensing policy on an application-by-application basis—each application can enforce licensing in the way most appropriate for it.<br /><br /> If necessary, an application can apply custom constraints based on the licensing status obtained from Google Play. <br />For example, an application can check the licensing status and then apply custom constraints that allow the user to run it unlicensed for a specific validity period. An application can also restrict use of the application to a specific device, in addition to any other constraints.
            The licensing service is a secure means of controlling access to your applications.<br /><br /> When an application checks the licensing status, the Google Play server signs the licensing status response using a key pair that is uniquely associated with the application. Although it's possible for your application to store the public key in its compiled .apk file, it's much safer to verify the licensing status response on a server that you trust.
            Any application that you publish through Google Play can use the Google Play Licensing service.<br /><br /> No special account or registration is needed. Additionally, because the service uses no dedicated framework APIs, you can add licensing to any application that uses a minimum API level of 3 or higher.
        </Text>
        <Card css={{ $$cardColor: '#16181A' }}>
            <Card.Body>
                <Row justify="center" align="center">
                    <Text h6 size="$lg" color="white"
                        css={{
                            m: 0 ,
                            textGradient: "45deg, $blue600 -20%, $pink600 50%",
                        }}
                        >
                        Note: The Google Play Licensing service is primarily intended for paid applications that wish to verify that the current user did in fact pay for the application on Google Play. However, any application (including free apps) may use the licensing service to initiate the download of an APK expansion file. In which case, the request that your application sends to the licensing service is not to check whether the user paid for the app, but to request the URL of the expansion files. For information about downloading expansion files for your application, read the guide to APK Expansion Files.
                    </Text>
                </Row>
            </Card.Body>
        </Card>
        <Spacer y={1} />
        <Text size="$lg">
            To learn more about Google Play's application licensing service and start integrating it into your applications, read the following documents:
        </Text>
        <Text h2 size={20}
            css={{
                textGradient: "45deg, $blue600 -20%, $pink600 50%",
            }}
            weight="bold">Licensing Overview</Text>
        <Text size="$lg">
            Describes how the service works and what a typical licensing implementation looks like.
        </Text>

        <Text h2 size={20}
            css={{
                textGradient: "45deg, $blue600 -20%, $pink600 50%",
            }}
            weight="bold">Setting Up for Licensing</Text>
        <Text size="$lg">
            Explains how to set up your Google Play account, development environment, and testing environment in order to add licensing to your app.
        </Text>

        <Text h2 size={20}
            css={{
                textGradient: "45deg, $blue600 -20%, $pink600 50%",
            }}
            weight="bold">Adding Server-Side License Verification to Your App</Text>
        <Text size="$lg">
            Provides a step-by-step guide to add server-side licensing verification to your application.
        </Text>
        <Spacer y={1} />
        <Text h2 size={20}
            css={{
                textGradient: "45deg, $blue600 -20%, $pink600 50%",
            }}
            weight="bold">Licensing Reference</Text>
        <Text size="$lg">
            Provides detailed information about the licensing library's classes and the service response codes.
        </Text>
        <Spacer y={1} />
        <Spacer y={1} />
    </Box>
);