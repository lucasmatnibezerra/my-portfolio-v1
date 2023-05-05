import NextLink from "next/link";
import {
  Container,
  Box,
  Heading,
  useColorModeValue,
  Image,
  chakra,
  Link,
  Button,
  Divider,
  List,
  ListItem,
  ListIcon,
  SimpleGrid,
  UnorderedList,
} from "@chakra-ui/react";
import Section from "../components/section";
import Paragraph from "../components/paragraph";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { IoLogoGithub, IoLogoTwitter, IoLogoInstagram } from "react-icons/io5";
import { BioSection, BioYear } from "../components/bio";
import { Main } from "next/document";

const ProfileImage = chakra(Image, {
  shouldForwardProp: (prop) => ["width", "height", "src", "alt"].includes(prop),
});

const skillsCol1 = ["JavaScript (ES6+)", "TypeScript", "React"];

const skillsCol2 = ["Next", "Node.js", "Tailwind"];

const Home = () => {
  return (
    <div className="">
      <Section delay={0.3}>
        <Box
          fontSize={20}
          fontFamily="Fira Code"
          borderRadius="lg"
          bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.50")}
          p={3}
          mb={20}
          mt={20}
          align="center"
          css={{ backdropFilter: "blur(10px)" }}
        >
          Hello there! I&apos;m full-stack developer based in Brasil!
        </Box>

        <Box display={{ md: "flex" }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Lucas Matni
            </Heading>
            <p>Software Developer (Artist | Developer | Designer)</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
            <Box
              borderColor="#54d5bb"
              borderWidth={2}
              borderStyle="solid"
              w="100px"
              h="100px"
              display="inline-block"
              borderRadius="full"
              overflow="hidden"
            >
              <ProfileImage
                borderRadius="full"
                src="/images/myphoto.jpg"
                alt="Profile Image"
                width="100%"
                height="100%"
              />
            </Box>
          </Box>
        </Box>
      </Section>
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          About me
        </Heading>
        <Paragraph>
          Hello! My name is Lucas and I'm software developer. My interest in web
          development started in 2020 when I joined the{" "}
          <NextLink
            target="_blank"
            href="https://www.lasse.ufpa.br/"
            passHref
            scroll={false}
          >
            <Link> LASSE</Link>
          </NextLink>{" "}
          lab, in a training that was given on Nodejs with the intention of
          working on a web project — this encouraged me not only to study about
          backend but also to start to learn more about web page development,
          and that included learning about the front end.
        </Paragraph>
        <Box mt={5}>
          <SimpleGrid columns={2}>
            <Box>
              <List>
                {skillsCol1.map((skill, i) => (
                  <ListItem style={{ padding: 3 }} key={i}>
                    {" "}
                    <ListIcon as={ChevronRightIcon} color="#54d5bb" />
                    {skill}
                  </ListItem>
                ))}
              </List>
            </Box>
            <List>
              {skillsCol2.map((skill, i) => (
                <ListItem style={{ padding: 3 }} key={i}>
                  {" "}
                  <ListIcon as={ChevronRightIcon} color="#54d5bb" />
                  {skill}
                </ListItem>
              ))}
            </List>
          </SimpleGrid>
          <Box align="center" my={4} mt={10} mb={10}>
            <NextLink href="/works">
              <Button
                rightIcon={<ChevronRightIcon />}
                colorScheme="teal"
                variant="outline"
              >
                See my works
              </Button>
            </NextLink>
          </Box>
        </Box>
        <Divider mt={5} />
      </Section>
      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2001</BioYear>
          Born in Belém (Pará), Brasil.
        </BioSection>
        <BioSection>
          <BioYear>2021</BioYear>
          Started working at the R&D Nucleus in Telecommunications, Automation
          and Electronics as a software developer. (Currently working)
        </BioSection>
        <BioSection>
          <BioYear>2023</BioYear>
          Completed a degree in computer engineering at the Estácio de Sá
          University.
        </BioSection>
      </Section>
      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Art, Music,{" "}
          <Link
            href="https://www.instagram.com/o_matni_dos_desenhos/"
            target="_blank"
          >
            Drawing
          </Link>
          , Playing Videogames, Watch Series, Travel
        </Paragraph>
      </Section>
      <Divider />
      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/lucasmatnibezerra" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @lucasmatnibezerra
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/lucas_matni" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoTwitter />}
              >
                @matni
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.instagram.com/lucasmatni_/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                @lucas_matni
              </Button>
            </Link>
          </ListItem>
        </List>
        <Divider />
      </Section>
      <Section delay={0.3}>
        <Box align="center" my={4} mt={20}>
          <Button
            rightIcon={<ChevronRightIcon />}
            colorScheme="teal"
            variant="outline"
          >
            <a target="_blank" href="Resume(LucasMatniBezerra).pdf">
              {" "}
              My Resume
            </a>
          </Button>
        </Box>
      </Section>
    </div>
  );
};

export default Home;
