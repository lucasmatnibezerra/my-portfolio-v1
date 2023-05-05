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
  <Layout title="The Wingfeather Saga">
    <Container mt={20}>
      <Title>
        The Wingfeather Saga <Badge>2023-</Badge>
      </Title>
      <P>A landing page for the book series the wingfeather saga.</P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link
            target="_blank"
            href="https://github.com/lucasmatnibezerra/LandingPage-TWS"
          >
            https://github.com/lucasmatnibezerra/LandingPage-TWS{" "}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>

        <ListItem>
          <Meta>Stack</Meta>
          <span>ReactJS/Tailwindcss</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/LandingTWT.png" alt="twd" />
    </Container>
  </Layout>
);

export default Work;
export { getServerSideProps } from "../../components/chakra";
