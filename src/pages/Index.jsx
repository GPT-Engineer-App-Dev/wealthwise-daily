import { Container, Box, Heading, Text, VStack, HStack, Button, Image } from "@chakra-ui/react";
import { FaNewspaper, FaChartLine, FaMoneyBillWave } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Box textAlign="center" mb={10}>
        <Heading as="h1" size="2xl" mb={4}>Financial Times</Heading>
        <Text fontSize="lg">Your trusted source for financial news and analysis</Text>
      </Box>
      <VStack spacing={8}>
        <HStack spacing={8} justify="center">
          <Box textAlign="center">
            <FaNewspaper size="50px" />
            <Heading as="h2" size="lg" mt={4}>Latest News</Heading>
            <Text mt={2}>Stay updated with the latest financial news from around the world.</Text>
          </Box>
          <Box textAlign="center">
            <FaChartLine size="50px" />
            <Heading as="h2" size="lg" mt={4}>Market Trends</Heading>
            <Text mt={2}>Get insights into the latest market trends and analysis.</Text>
          </Box>
          <Box textAlign="center">
            <FaMoneyBillWave size="50px" />
            <Heading as="h2" size="lg" mt={4}>Investment Tips</Heading>
            <Text mt={2}>Learn about the best investment strategies and tips.</Text>
          </Box>
        </HStack>
        <Button colorScheme="teal" size="lg">Subscribe Now</Button>
      </VStack>
    </Container>
  );
};

export default Index;