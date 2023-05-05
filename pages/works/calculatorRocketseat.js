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
  <Layout title="Calculator Rocketseat">
    <Container mt={20}>
      <Title>
        Calculator Rocketseat <Badge>2023-</Badge>
      </Title>
      <P>
        Project developed in Rocketseat's #boraCodar challenge, the objective
        was to develop a Calculator.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link
            target="_blank"
            href="https://calculadorarocketseat.vercel.app/"
          >
            https://calculadorarocketseat.vercel.app/{" "}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>

        <ListItem>
          <Meta>Stack</Meta>
          <span>ReactJS/Tailwindcss</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/calculator.png" alt="Calculator" />
    </Container>
  </Layout>
);

export default Work;
export { getServerSideProps } from "../../components/chakra";
