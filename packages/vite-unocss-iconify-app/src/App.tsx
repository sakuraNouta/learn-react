import { Typography } from "antd";
import "./customTooltip.less";

function App() {
  return (
    <div w-screen h-screen flex p-xl flex-wrap>
      <header flex w-full justify-center>
        <h2 color="red">hello</h2>
      </header>
      <aside w-15>
        <nav p-xl border flex flex-col space-y-sm>
          {Array.from({ length: 16 }, (_, i) => (
            <Typography.Link break-normal>{i}</Typography.Link>
          ))}
        </nav>
      </aside>
      <main flex flex-col w="[calc(100%-60px)]" pl-xl>
        <section>
          <article>
            纯 CSS 图标# 如果你读过我之前的文章 Journey with Icons
            Continues，你一定知道我对图标非常热衷，并且在积极研究图标的各种解决方案。这次，凭借
            UnoCSS 的灵活性，我们甚至可以拥有纯 CSS 的图标。你没看错，它是纯 CSS
            的图标，不需要任何 JavaScript！让我们来看看它长什么样子：
            悬停在它上面
            与可变修饰结合，你甚至可以根据悬停状态或颜色模式来切换图标。得益于
            Iconify 项目，你可以从一百余个热门图标集合（Material Design Icons，
            Ant Design Icons 等等）中获得 超过一万个图标 供你按需使用。
            同样的，这个功能的实现代码并未超过 100 行。具体请参考
            @unocss/preset-icons 预设的实现了解其中的魔法。
            希望这些预设可以让你对 UnoCSS
            的灵活性有一个大致的了解。它还处于一个非常早期的阶段，有很多可能性等待我们去探索。
          </article>
        </section>
        <section space-y-sm p-sm mt-xl border="~ red">
          <div className="i-ant-design-camera-filled" text-4xl color-blue />
          <div className="i-ant-design-crown-outlined" text-4xl color-yellow />
          <div
            className="i-ant-design-meh-outlined"
            hover="i-ant-design-smile-outlined color-green"
            text-4xl
            color-red
            cursor-pointer
          />
          <div className="flex space-x-sm">
            <div
              className="i-ant-design-stop-outlined"
              hover="i-ant-design-up-circle-outlined color-green"
              text-4xl
              color-red
            />
            <div
              className="i-ant-design-stop-filled"
              hover="i-ant-design-up-circle-filled color-green"
              text-4xl
              color-red
            />
            <div
              className="i-ant-design-stop-twotone"
              hover="i-ant-design-up-circle-twotone color-green"
              text-4xl
              color-red
            />
          </div>
        </section>
        <section p-sm mt-xl border="~ sky">
          <div
            className="custom-tooltip"
            // @ts-ignore
            tooltip="hello world"
          >
            <div i-ant-design-alert-outlined text-4xl />
          </div>
          <div
            className="custom-tooltip"
            // @ts-ignore
            tooltip="hello world"
          >
            <div i-ant-design-fire-outlined text-4xl flex-shrink-0 />
          </div>
          <div
            className="custom-tooltip"
            // @ts-ignore
            tooltip="hello world"
          >
            <div i-ant-design-meh-outlined text-4xl flex-shrink-0 />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
