import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  AspectRatio,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Work = () => (
  <Layout title="League of Legends Drawer">
    <Container mt={20}>
      <Title>
        League of Legends Drawer <Badge>2023-</Badge>
      </Title>
      <P>
        A League of Legends champions draw by region made for my friends, it's a
        challenge to complete in game, and since we didn't want to choose, I
        made this draw with the intention of being more fun to play{" "}
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link target="_blank" href="https://sorteador-lol.vercel.app/">
            https://sorteador-lol.vercel.app/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>

        <ListItem>
          <Meta>Stack</Meta>
          <span>ReactJS/Tailwindcss</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/random-lol.png" alt="random" />
    </Container>
  </Layout>
);

export default Work;
export { getServerSideProps } from "../../components/chakra";
