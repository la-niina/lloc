import Head from "next/head";
import React from "react";
import { Inter } from "@next/font/google";
import {
  Navbar,
  Button,
  Link,
  Image,
  Text,
  useTheme,
  Avatar,
  Dropdown,
  Modal,
  Input,
  Row,
  Checkbox,
} from "@nextui-org/react";
import { Layout } from "../compose/About/AboutLayout.js";
import { Mail } from "../compose/LoginModel/Mail";
import { Password } from "../compose/LoginModel/Password";
import { icons } from "../compose/Icons.js";

const inter = Inter({ subsets: ["latin"] });

export default function About() {
  const { isDark } = useTheme();

  const collapseItems = ["features", "community", "blog", "liencies", "about"];
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };
  return (
    <>
      <Head>
        <title>lloc | About</title>
        <meta
          name="description"
          content="lloc is a start-up software company that provides a multitude of
services | Android, iOS, Windows ,Linux, Mac os, Web Applications Development etc.  "
        />
        <meta
          name="keywords"
          content="lloc, la-nniina, la-niina, software, start-up , developer, freelancer, website , mobile , android , ios , swift"
        />
        <meta name="author" content="la niina" />
        <meta name="viewer" content="lloc" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <Layout>
        <Navbar isCompact isBordered={isDark} variant="sticky">
          <Navbar.Brand
            css={{
              "@xs": {
                w: "12%",
              },
            }}
          >
            <Image
              width={30}
              height={30}
              onClick={() => {
                window.location.href = "/";
              }}
              alt="lloc"
              src="/logo.svg"
            />
          </Navbar.Brand>

          <Navbar.Content
            enableCursorHighlight
            activeColor="secondary"
            hideIn="xs"
            variant="underline"
          >
            <Navbar.Link href="/">features</Navbar.Link>

            <Navbar.Link href="/blog">blog</Navbar.Link>
            <Navbar.Link href="/liences">liences</Navbar.Link>
            <Navbar.Link isActive href="/about">
              about
            </Navbar.Link>
          </Navbar.Content>
          <Navbar.Toggle showIn="xs" />
           <Navbar.Content
            css={{
              "@xs": {
                w: "12%",
                jc: "flex-end",
              },
            }}
          >
            <Dropdown placement="bottom-right">
              <Navbar.Item>
                <Dropdown.Trigger>
                  <Avatar
                    bordered
                    as="button"
                    size="md"
                    src="https://avatars.githubusercontent.com/u/118225191?v=4"
                  />
                </Dropdown.Trigger>
              </Navbar.Item>
              <Dropdown.Menu
                aria-label="User menu actions"
                color="secondary"
                onAction={(actionKey) => console.log({ actionKey })}
              >
                <Dropdown.Item key="profile" css={{ height: "$18" }}>
                  <Text b color="inherit" css={{ d: "flex" }} onClick={handler}>
                    Signed in as
                  </Text>
                  <Text b color="inherit" css={{ d: "flex" }} onClick={handler}>
                    zoey@example.com
                  </Text>
                </Dropdown.Item>
                <Dropdown.Item key="settings" withDivider>
                  My Settings
                </Dropdown.Item>
                <Dropdown.Item key="team_settings">Team Settings</Dropdown.Item>
                <Dropdown.Item key="analytics" withDivider>
                  Analytics
                </Dropdown.Item>
                <Dropdown.Item key="system">System</Dropdown.Item>
                <Dropdown.Item key="configurations">
                  Configurations
                </Dropdown.Item>
                <Dropdown.Item key="help_and_feedback" withDivider>
                  Help & Feedback
                </Dropdown.Item>
                <Dropdown.Item key="logout" withDivider color="error">
                  Log Out
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Navbar.Content>

          <Modal
            closeButton
            preventClose
            aria-labelledby="modal-title"
            open={visible}
            onClose={closeHandler}
          >
            <Modal.Header>
              <Text
                id="modal-title"
                size={60}
                css={{
                  textGradient: "45deg, $blue600 -20%, $pink600 50%",
                }}
                weight="bold"
              >
                IIo
              </Text>
            </Modal.Header>
            <Modal.Body>
              <Input
                clearable
                bordered
                fullWidth
                color="primary"
                size="lg"
                placeholder="Email"
                contentLeft={<Mail fill="currentColor" />}
              />
              <Input
                clearable
                bordered
                fullWidth
                color="primary"
                size="lg"
                placeholder="Password"
                contentLeft={<Password fill="currentColor" />}
              />
              <Row justify="space-between">
                <Checkbox>
                  <Text size={14}>Remember me</Text>
                </Checkbox>
                <Text size={14}>Forgot password?</Text>
              </Row>
            </Modal.Body>
            <Modal.Footer>
              <Button auto flat color="error" rounded onClick={closeHandler}>
                Close
              </Button>
              <Button color="gradient" auto flat rounded onClick={closeHandler}>
                Sign in
              </Button>
            </Modal.Footer>
          </Modal>

          <Navbar.Collapse>
            <Navbar.CollapseItem>
              <Link
                weight="bold"
                css={{ textGradient: "45deg, $purple600 -20%, $pink600 100%" }}
                href="/"
              >
                features
              </Link>
            </Navbar.CollapseItem>

            <Navbar.CollapseItem>
              <Link
                weight="bold"
                css={{ textGradient: "45deg, $purple600 -20%, $pink600 100%" }}
                href="/community"
              >
                community
              </Link>
            </Navbar.CollapseItem>

            <Navbar.CollapseItem>
              <Link
                weight="bold"
                css={{ textGradient: "45deg, $purple600 -20%, $pink600 100%" }}
                href="/blog"
              >
                blog
              </Link>
            </Navbar.CollapseItem>

            <Navbar.CollapseItem>
              <Link
                weight="bold"
                css={{ textGradient: "45deg, $purple600 -20%, $pink600 100%" }}
                href="/liences"
              >
                liences
              </Link>
            </Navbar.CollapseItem>

            <Navbar.CollapseItem>
              <Link
                weight="bold"
                css={{ textGradient: "45deg, $yellow600 -20%, $red600 100%" }}
                href="/about"
              >
                about
              </Link>
            </Navbar.CollapseItem>
          </Navbar.Collapse>
        </Navbar>
      </Layout>
    </>
  );
}
