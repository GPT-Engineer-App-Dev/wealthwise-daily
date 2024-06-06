import { Box, Container, Heading, Text, VStack, Image } from "@chakra-ui/react";

const samplePosts = [
  {
    title: "The Future of Finance",
    content: "An in-depth look at the future of finance and what it means for investors.",
    author: "John Doe",
    image: "path/to/john-doe.jpg"
  },
  {
    title: "Market Trends in 2023",
    content: "Analyzing the market trends that will shape the financial landscape in 2023.",
    author: "Jane Smith",
    image: "path/to/jane-smith.jpg"
  }
];

const SamplePosts = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Heading as="h1" size="xl" textAlign="center" mb={8}>Sample Posts</Heading>
      <VStack spacing={8}>
        {samplePosts.map((post, index) => (
          <Box key={index} p={5} shadow="md" borderWidth="1px" borderRadius="md" w="100%">
            <Heading as="h2" size="lg" mb={4}>{post.title}</Heading>
            <Text mb={4}>{post.content}</Text>
            <Text fontWeight="bold">By: {post.author}</Text>
            {post.image && <Image src={post.image} alt={post.author} mt={4} />}
          </Box>
        ))}
      </VStack>
    </Container>
  );
};

export default SamplePosts;