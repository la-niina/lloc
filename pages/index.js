import Head from 'next/head'
import React from "react";
import { Inter } from '@next/font/google'
import { Navbar, Button, Image, Link, Text, useTheme, Avatar, Dropdown, Modal, Input, Row, Checkbox } from "@nextui-org/react";
import { Layout } from "../compose/Navbar/Layout.js";
import { Mail } from "../compose/LoginModel/Mail";
import { Password } from "../compose/LoginModel/Password";
import { icons } from "../compose/Icons.js";


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { isDark } = useTheme();

  const collapseItems = [
    "features",
    "community",
    "blog",
    "liencies",
    "about",
  ];
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };
  return (
    <>
      <Head>
        <title>lloc | Home</title>
        <meta name="description" content="lloc is a start-up software company that provides a multitude of
services | Android, iOS, Windows ,Linux, Mac os, Web Applications Development etc." />
        <meta name="keywords" content="lloc, la-nniina, la-niina, software, start-up , developer, freelancer, website , mobile , android , ios , swift" />
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
                window.location.href = "/"
              }}
              src='/logo.svg' />
          </Navbar.Brand>

          <Navbar.Content
            enableCursorHighlight
            activeColor="secondary"
            color="gradient"
            hideIn="xs"
            variant="underline"
          >
            <Navbar.Link isActive href="/">features</Navbar.Link>          
            <Dropdown isBordered>
              <Navbar.Item>
                <Dropdown.Button
                  auto
                  light
                  css={{
                    px: 0,
                    dflex: "center",
                    svg: { pe: "none" },
                  }}
                  iconRight={icons.chevron}
                  ripple={false}
                >
                  community
                </Dropdown.Button>
              </Navbar.Item>
              <Dropdown.Menu
                aria-label="ACME features"
                css={{
                  $$dropdownMenuWidth: "340px",
                  $$dropdownItemHeight: "70px",
                  "& .nextui-dropdown-item": {
                    py: "$4",
                    // dropdown item left icon
                    svg: {
                      color: "$secondary",
                      mr: "$4",
                    },
                    // dropdown item title
                    "& .nextui-dropdown-item-content": {
                      w: "100%",
                      fontWeight: "$semibold",
                    },
                  },
                }}
              >
                <Dropdown.Item
                  key="autoscaling"
                  showFullDescription
                  description="ACME scales apps to meet user demand, automagically, based on load."
                  icon={icons.scale}
                >
                  Autoscaling
                </Dropdown.Item>
                <Dropdown.Item
                  key="usage_metrics"
                  showFullDescription
                  description="Real-time metrics to debug issues. Slow query added? We’ll show you exactly where."
                  icon={icons.activity}
                >
                  Usage Metrics
                </Dropdown.Item>
                <Dropdown.Item
                  key="production_ready"
                  showFullDescription
                  description="ACME runs on ACME, join us and others serving requests at web scale."
                  icon={icons.flash}
                >
                  Production Ready
                </Dropdown.Item>
                <Dropdown.Item
                  key="99_uptime"
                  showFullDescription
                  description="Applications stay on the grid with high availability and high uptime guarantees."
                  icon={icons.server}
                >
                  +99% Uptime
                </Dropdown.Item>
                <Dropdown.Item
                  key="supreme_support"
                  showFullDescription
                  description="Overcome any challenge with a supporting team ready to respond."
                  icon={icons.user}
                >
                  +Supreme Support
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Navbar.Link href="/blog">blog</Navbar.Link>
            <Navbar.Link href="/liences">liences</Navbar.Link>
            <Navbar.Link href="/about">about</Navbar.Link>
          </Navbar.Content>

          <Navbar.Toggle showIn="xs" />

          <Navbar.Content>
            <Navbar.Item>
              <Button auto color="gradient" flat rounded as={Link} onClick={handler}>
                Sign Up
              </Button>
            </Navbar.Item>
          </Navbar.Content>

          <Modal
            closeButton
            preventClose
            aria-labelledby="modal-title"
            open={visible}
            onClose={closeHandler}
          >
            <Modal.Header>
              <Text id="modal-title" size={60}
                css={{
                  textGradient: "45deg, $blue600 -20%, $pink600 50%",
                }}
                weight="bold">
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
              <Link weight="bold" css={{ textGradient: "45deg, $yellow600 -20%, $red600 100%" }} href="/">features</Link>
            </Navbar.CollapseItem>

            <Navbar.CollapseItem>
              <Link weight="bold" css={{ textGradient: "45deg, $purple600 -20%, $pink600 100%" }} href="/community">community</Link>
            </Navbar.CollapseItem>

            <Navbar.CollapseItem>
              <Link weight="bold" css={{ textGradient: "45deg, $purple600 -20%, $pink600 100%" }} href="/blog">blog</Link>
            </Navbar.CollapseItem>

            <Navbar.CollapseItem>
              <Link weight="bold" css={{ textGradient: "45deg, $purple600 -20%, $pink600 100%" }} href="/liences">liences</Link>
            </Navbar.CollapseItem>

            <Navbar.CollapseItem>
              <Link weight="bold" css={{ textGradient: "45deg, $purple600 -20%, $pink600 100%" }} href="/about">about</Link>
            </Navbar.CollapseItem>

          </Navbar.Collapse>
        </Navbar>
      </Layout>
    </>
  )
}