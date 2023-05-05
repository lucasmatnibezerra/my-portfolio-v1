import {
  Container,
  Box,
  Heading,
  SimpleGrid,
  Divider,
  Tag,
  HStack,
  TagLabel,
  TagRightIcon,
  MdSettings,
} from "@chakra-ui/react";
import Section from "../components/section";
import Layout from "../components/layouts/article";
import { WorkGridItem } from "../components/grid-item";
import thumbDungeons from "../public/images/works/dungeons.png";
import thumbCalculator from "../public/images/works/calculator.png";
import thumbTWD from "../public/images/works/LandingTWT.png";
import thumbLol from "../public/images/works/random-lol.png";
import TagSkill from "../components/tag";

const Works = () => {
  return (
    <Layout title="Works">
      <Container maxW>
        <Heading as="h2" variant="page-title" mb={4} mt={10}>
          Works
        </Heading>

        <Heading as="h3" variant="section-title" mt={10}>
          My Personal Projects
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem
              id="dungeons"
              title="Dungeon"
              thumbnail={thumbDungeons}
            >
              Dungeon was a website created to be a kind of "Wiki" for the
              tabletop RPG characters that my friends and I played. Here are the
              stories, both of our characters and of the campaigns we play.
            </WorkGridItem>

            <HStack spacing={4} mt={5} alignItems="center" justify="center">
              <TagSkill skill="Typescript" />
              <TagSkill skill="NextJs" />
              <TagSkill skill="Tailwind" />
              <TagSkill skill="On Going" />
            </HStack>
          </Section>
          <Section>
            <WorkGridItem
              id="calculatorRocketseat"
              title="Calculator Rocketseat Challenge"
              thumbnail={thumbCalculator}
            >
              A calculator for a rocketseat challenge.
            </WorkGridItem>
            <HStack spacing={4} mt={5} alignItems="center" justify="center">
              <TagSkill skill="Reactjs" />
              <TagSkill skill="Tailwind" />
            </HStack>
          </Section>
          <Section>
            <WorkGridItem
              id="twd"
              title="LandingPage The Winterfeather Saga"
              thumbnail={thumbTWD}
            >
              A simple and beautiful landing page about the books saga The
              Winterfeather.
            </WorkGridItem>
            <HStack spacing={4} mt={5} alignItems="center" justify="center">
              <TagSkill skill="JavaScript" />
              <TagSkill skill="ReactJs" />
              <TagSkill skill="Tailwind" />
            </HStack>
          </Section>
          <Section>
            <WorkGridItem
              id="drawerChampions"
              title="League of Legends Drawer"
              thumbnail={thumbLol}
            >
              A very simple and personal League of Legends champions draw by
              region.
            </WorkGridItem>
            <HStack spacing={4} mt={5} alignItems="center" justify="center">
              <TagSkill skill="JavaScript" />
              <TagSkill skill="ReactJs" />
              <TagSkill skill="Tailwind" />
              <TagSkill skill="On Going" />
            </HStack>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  );
};

export default Works;
