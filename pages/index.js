import Head from 'next/head'
import React from "react";
import { Inter } from '@next/font/google'
import { Navbar, Button, Link, Text, useTheme, Avatar, Dropdown, Modal, Input, Row, Checkbox } from "@nextui-org/react";
import { Layout } from "../compose/Navbar/Layout.js";
import { AcmeLogo } from "../compose/Navbar/AcmeLogo.js";
import { Mail } from "../compose/LoginModel/Mail";
import { Password } from "../compose/LoginModel/Password";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { isDark } = useTheme();

  const collapseItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
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
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Navbar isBordered variant="sticky">
          <Navbar.Toggle showIn="xs" />
          <Navbar.Brand
            css={{
              "@xs": {
                w: "12%",
              },
            }}
          >
            <AcmeLogo />
            <Text b color="inherit" hideIn="xs">
              IIo
            </Text>
          </Navbar.Brand>

          <Navbar.Content
            enableCursorHighlight
            activeColor="secondary"
            hideIn="xs"
            variant="highlight-rounded"
          >
            <Navbar.Link href="/">features</Navbar.Link>
            <Navbar.Link isActive href="/customers">
              customers
            </Navbar.Link>
            <Navbar.Link href="/concepts">concepts</Navbar.Link>
            <Navbar.Link href="/about">about</Navbar.Link>
          </Navbar.Content>

          <Navbar.Content>
            <Navbar.Item>
              <Button auto flat as={Link} onClick={handler}>
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
              <Button auto flat color="error" onClick={closeHandler}>
                Close
              </Button>
              <Button auto onClick={closeHandler}>
                Sign in
              </Button>
            </Modal.Footer>
          </Modal>

          <Navbar.Collapse>
            {collapseItems.map((item, index) => (
              <Navbar.CollapseItem
                key={item}
                activeColor="secondary"
                css={{
                  color: index === collapseItems.length - 1 ? "$error" : "",
                }}
                isActive={index === 2}
              >
                <Link
                  color="inherit"
                  css={{
                    minWidth: "100%",
                  }}
                  href="#"
                >
                  {item}
                </Link>
              </Navbar.CollapseItem>
            ))}
          </Navbar.Collapse>
        </Navbar>
      </Layout>
    </>
  )
}
