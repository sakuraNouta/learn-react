import {
  ChakraProvider,
  Container,
  Box,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import ButtonExpo from "./pages/ButtonExpo";
import EditableExpo from "./pages/EditableExpo";

const UITabs = [
  {
    name: "Button",
    component: <ButtonExpo />,
  },
  {
    name: "Editable",
    component: <EditableExpo />,
  },
  {
    name: "three",
    component: "three!",
  },
];

function App() {
  return (
    <ChakraProvider>
      <Container w="container.md">
        <Box w="100%" border="1px" borderRadius="lg">
          <Tabs>
            <TabList>
              {UITabs.map((tab) => (
                <Tab>{tab.name}</Tab>
              ))}
            </TabList>
            <TabPanels>
              {UITabs.map((tab) => (
                <TabPanel>{tab.component}</TabPanel>
              ))}
            </TabPanels>
          </Tabs>
        </Box>
      </Container>
    </ChakraProvider>
  );
}

export default App;
