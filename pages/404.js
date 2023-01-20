import Head from "next/head";
import React from "react";
import { Inter } from "@next/font/google";
import {
  Button,
  Image,
  Link,
  Text,
  useTheme,
} from "@nextui-org/react";
import { Layout } from "../compose/404/404Layout";

export default function Home() {
  const { isDark } = useTheme();

  return (
    <>
      <Head>
        <title>lloc | 404</title>
        <meta
          name="description"
          content="lloc is a start-up software company that provides a multitude of
services | Android, iOS, Windows ,Linux, Mac os, Web Applications Development etc."
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
      
      </Layout>
    </>
  );
}
