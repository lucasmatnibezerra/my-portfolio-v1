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
  <Layout title="Dungeons">
    <Container mt={20}>
      <Title>
        Dungeons <Badge>2022-</Badge>
      </Title>
      <P>
        Dungeon was a website created to be a kind of "Wiki" for the tabletop
        RPG characters that my friends and I played. Here are the stories, both
        of our characters and of the campaigns we play.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://github.com/lucasmatnibezerra/dungeons">
            https://github.com/lucasmatnibezerra/dungeons{" "}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>NextJS/Tailwindcss</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/dungeons.png" alt="Dungeons" />
    </Container>
  </Layout>
);

export default Work;
export { getServerSideProps } from "../../components/chakra";
