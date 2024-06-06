import { useState } from "react";
import { Box, Button, Container, FormControl, FormLabel, Input, Textarea, Image, VStack, Heading } from "@chakra-ui/react";

const NewPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle post submission logic here
    console.log({ title, content, image });
  };

  return (
    <Container maxW="container.md" p={4}>
      <VStack spacing={4} align="stretch">
        <Heading as="h1" size="xl" textAlign="center">Create New Post</Heading>
        <FormControl id="title">
          <FormLabel>Title</FormLabel>
          <Input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </FormControl>
        <FormControl id="content">
          <FormLabel>Content</FormLabel>
          <Textarea value={content} onChange={(e) => setContent(e.target.value)} />
        </FormControl>
        <FormControl id="image">
          <FormLabel>Upload Image</FormLabel>
          <Input type="file" accept="image/*" onChange={handleImageChange} />
        </FormControl>
        {image && <Image src={image} alt="Selected" />}
        <Button colorScheme="teal" onClick={handleSubmit}>Submit</Button>
      </VStack>
    </Container>
  );
};

export default NewPost;