import {
  ActionSheet,
  Badge,
  Button,
  Cell,
  CellGroup,
  Marquee,
  Navbar,
  Rate,
  Skeleton,
  Swipe,
  SwipeItem,
  Tabbar,
  TabbarItem,
  TabContent,
  Tabs,
} from "@quarkd/quark-react";
import "@quarkd/icons/lib/home";
import "@quarkd/icons/lib/user";
import "@quarkd/icons/lib/tel";

import { useState } from "react";

function ButtonDemo() {
  return (
    <div className="flex flex-col items-center space-y-sm">
      <Button>默认按钮</Button>
      <Button type="primary">主要按钮</Button>
      <Button type="success">成功按钮</Button>
      <Button type="danger">危险按钮</Button>
      <Button type="warning">警告按钮</Button>
    </div>
  );
}

const CellDemo = () => {
  return (
    <CellGroup>
      <Cell title="这是标题" />
      <Cell title="这是标题" islink />
      <Cell title="这是标题" desc="描述文字" />
      <Cell title="这是标题" desc="描述文字" islink />
    </CellGroup>
  );
};

const MarqueeDemo = () => {
  return (
    <>
      <Marquee title="2022 年我们见证了很多技术的新发展新变化：低代码的突然爆火、数据库的接连开源、芯片的短缺与自研、训练模型的参数突破" />
    </>
  );
};

const SkeletonDemo = () => {
  const [hide, setHide] = useState(false);

  return (
    <div className="space-y-xl px-sm">
      <Button onClick={() => setHide((prevHide) => !prevHide)}>toggle</Button>
      <Skeleton row={2} hide={hide}>
        <p>用于在内容加载过程中展示一组占位图形。</p>
        <p>正式内容</p>
      </Skeleton>
    </div>
  );
};

const SwipeDemo = () => {
  return (
    <Swipe className="h-30" autoplay onChange={console.log}>
      <SwipeItem>
        <div className="flex w-full h-24 items-center justify-center">
          <Badge type="dot" />
        </div>
      </SwipeItem>
      <SwipeItem>
        <div className="flex w-full h-24 items-center justify-center">
          <Badge type="round" content="99" />
        </div>
      </SwipeItem>
      <SwipeItem>
        <div className="flex w-full h-24 items-center justify-center">
          <Badge content="100" max={99} />
        </div>
      </SwipeItem>
      <SwipeItem>
        <div className="flex w-full h-24 items-center justify-center">
          <Rate value={1} onChange={console.log} />
        </div>
      </SwipeItem>
    </Swipe>
  );
};

const UITabs = [
  {
    name: "Button",
    label: "Button",
    content: <ButtonDemo />,
  },
  {
    name: "Cell",
    label: "Cell",
    content: <CellDemo />,
  },
  {
    name: "Marquee",
    label: "Marquee",
    content: <MarqueeDemo />,
  },
  {
    name: "Skeleton",
    label: "Skeleton",
    content: <SkeletonDemo />,
  },
  {
    name: "Swipe",
    label: "Swipe",
    content: <SwipeDemo />,
  },
];

function App() {
  return (
    <div className="App w-screen h-screen flex flex-col">
      <Navbar title="demos" />
      <Tabs
        className="grow"
        activekey={UITabs[UITabs.length - 1].name}
        onChange={console.log}
      >
        {UITabs.map((tab) => (
          <TabContent className="pt-lg" name={tab.name} label={tab.label}>
            {tab.content}
          </TabContent>
        ))}
      </Tabs>
      <Tabbar className="mt-auto" onChange={console.log}>
        <TabbarItem name="home" label="home">
          {/* @ts-ignore */}
          <quark-icon-home slot="icon" size="20" />
        </TabbarItem>
        <TabbarItem name="user" label="user">
          {/* @ts-ignore */}
          <quark-icon-user slot="icon" size="20" />
        </TabbarItem>
        <TabbarItem
          name="tel"
          label="tel"
          onClick={() => {
            ActionSheet({
              actions: [
                { name: "选项一" },
                { name: "选项二" },
                { name: "选项三" },
              ],
              select: (index, action) => {
                console.log(action.name);
              },
            });
          }}
        >
          {/* @ts-ignore */}
          <quark-icon-tel slot="icon" size="20" />
        </TabbarItem>
      </Tabbar>
    </div>
  );
}

export default App;
