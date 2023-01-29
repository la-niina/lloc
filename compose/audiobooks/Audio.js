import {
  Container,
  Grid,
  Input,
  Text,
  Col,
  Row,
  Card,
  Image,
} from "@nextui-org/react";

export const Content = () => {
  const tracks = [
    {
      url: "https://drive.google.com/file/d/1px5_3g7cWI7m6HNMme3mKkQ8mk5cgzi3/view?IM - Ep 1.mp3",
      title: "Madza - Chords of Life",
      img: "https://i.pinimg.com/564x/8c/5f/9a/8c5f9a3bb48fa8de51277c4f431432a0.jpg",
      tags: ["EP 1"],
    },
    {
      url: "https://audioplayer.madza.dev/Madza-Late_Night_Drive.mp3",
      title: "Madza - Late Night Drive",
      img: "https://i.pinimg.com/564x/bd/29/34/bd293499ee09b8fa4182f2ae24d83133.jpg",
      tags: ["EP 2"],
    },
    {
      url: "https://audioplayer.madza.dev/Madza-Persistence.mp3",
      title: "Madza - Persistence",
      img: "https://i.pinimg.com/564x/8c/5f/9a/8c5f9a3bb48fa8de51277c4f431432a0.jpg",
      tags: ["EP 3"],
    },
    {
      url: "https://audioplayer.madza.dev/Madza-Persistence.mp3",
      title: "Madza - Persistence",
      img: "https://i.pinimg.com/564x/8c/5f/9a/8c5f9a3bb48fa8de51277c4f431432a0.jpg",
      tags: ["EP 4"],
    },
    {
      url: "https://audioplayer.madza.dev/Madza-Persistence.mp3",
      title: "Madza - Persistence",
      img: "https://i.pinimg.com/564x/8c/5f/9a/8c5f9a3bb48fa8de51277c4f431432a0.jpg",
      tags: ["EP 5"],
    },
    {
      url: "https://audioplayer.madza.dev/Madza-Persistence.mp3",
      title: "Madza - Persistence",
      img: "https://i.pinimg.com/564x/8c/5f/9a/8c5f9a3bb48fa8de51277c4f431432a0.jpg",
      tags: ["EP 6"],
    },
  ];

  return (
    <>
      <Container>
        <Grid.Container gap={2} justify="flex-start">
          {tracks.map((item, index) => (
            <Grid xs={12} sm={3} key={index}>
              <Card isPressable isBlurred css={{ w: "100%", h: "300px" }}>
                <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
                  <Col>
                    <Text
                      size={12}
                      weight="bold"
                      transform="uppercase"
                      color="#9E9E9E"
                    >
                      {item.title}
                    </Text>
                    <Text
                      h3
                      size={60}
                      css={{
                        color: "#000000",
                      }}
                      weight="bold"
                    >
                      {item.tags}
                    </Text>
                  </Col>
                </Card.Header>
                <Card.Body css={{ p: 0 }}>
                  <Card.Image
                    src={item.img}
                    objectFit="cover"
                    width="100%"
                    height="100%"
                    alt="Relaxing app background"
                  />
                </Card.Body>
                <Card.Footer
                  isBlurred
                  css={{
                    position: "absolute",
                    bgBlur: "#0f111466",
                    borderTop: "$borderWeights$light solid $gray800",
                    bottom: 0,
                    zIndex: 1,
                  }}
                >
                  <audio controls src={item.url}>
                    Your browser does not support the
                    <code>audio</code> element.
                  </audio>
                </Card.Footer>
              </Card>
            </Grid>
          ))}
        </Grid.Container>
      </Container>
    </>
  );
};
