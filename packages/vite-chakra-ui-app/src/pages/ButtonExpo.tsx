import { useState } from "react";
import {
  Box,
  Button,
  HStack,
  Spinner,
} from "@chakra-ui/react";

export default function ButtonExpo() {
  const [loading, setLoading] = useState(false);

  return (
    <Box>
      <Box>
        <Button colorScheme="blue">base</Button>
      </Box>
      <HStack align="center" mt="1">
        <Button size="xs">xs Button</Button>
        <Button size="sm">sm Button</Button>
        <Button size="md">md Button</Button>
        <Button size="lg">lg Button</Button>
      </HStack>
      <HStack mt="1">
        <Button
          onClick={() => setLoading((prevLoading) => !prevLoading)}
          colorScheme="linkedin"
        >
          load
        </Button>
        <Button isLoading={loading}>Submit</Button>
        <Button isLoading={loading} loadingText="Submitting" variant="solid">
          Submit
        </Button>
        <Button
          isLoading={loading}
          spinner={
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="blue.500"
            />
          }
        >
          Submit
        </Button>
      </HStack>
    </Box>
  );
}
