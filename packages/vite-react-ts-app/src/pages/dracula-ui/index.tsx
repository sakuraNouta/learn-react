import 'dracula-ui/styles/dracula-ui.css';

import {
  Box,
  Button,
  Card,
  Divider,
  OrderedList,
  Paragraph,
  Select,
  Switch,
  Tabs
} from 'dracula-ui';
import { useState } from 'react';

const TextMapping = [
  {
    title: 'Why',
    content: `Our mission is to unleash the creative potential in every developer. We do that by providing modular components that can be used to build modern sites faster.`
  },
  {
    title: 'Built for Dark Mode',
    content: `Most templates are built using light colors and later on adapted to dark colors. Dark themes shouldn't be an afterthought, they should be a top priority.`
  },
  {
    title: 'Designer Friendly',
    content: `Speed up the prototyping phase by using a highly configurable Design System. Collaborate easily by taking advantage of a carefully crafted Figma file.`
  }
];

const TextTabs = (props: {
  active: string;
  onChange: (active: string) => void;
}) => {
  const { active, onChange } = props;
  const content = TextMapping.find(item => item.title === active)?.content;
  return (
    <>
      <Tabs color="cyan">
        {TextMapping.map(item => (
          <li
            key={item.title}
            className={`drac-tab${
              active === item.title ? ' drac-tab-active' : ''
            }`}
            onClick={() => onChange(item.title)}
          >
            <a className="drac-tab-link drac-text">{item.title}</a>
          </li>
        ))}
      </Tabs>
      <Box scrollbar mt="sm">
        <Paragraph>{content}</Paragraph>
      </Box>
    </>
  );
};

export default function DraculaUI() {
  const [state, setState] = useState<string>('Why');

  return (
    <Card className="w-150 h-120 flex flex-col m-auto" p="sm">
      <Paragraph color="black">Hello Vampire</Paragraph>
      <Divider />
      <OrderedList color="cyan">
        <li className="drac-text drac-text-white mb-1">
          <Button>btn</Button>
        </li>
        <li className="drac-text drac-text-white mb-1">
          <Button color="animated">btn</Button>
        </li>
        <li className="drac-text drac-text-white mb-1">
          <Button color="purpleCyan">btn</Button>
        </li>
      </OrderedList>
      <Divider />
      <Select my="xs" defaultValue="default" color="orange">
        <option value="default" disabled={true}>
          Select option
        </option>
        <option>Blade</option>
        <option>Buffy</option>
        <option>Lincoln</option>
        <option>Morbius</option>
        <option>Van Helsing</option>
      </Select>
      <Divider />
      <Box py="xs" my="xs" color="greySecondary">
        <Switch color="red" />
        <label className="drac-text drac-text-white">Switch</label>
      </Box>
      <Divider />
      <TextTabs active={state} onChange={setState} />
    </Card>
  );
}
