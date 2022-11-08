/**
 * 滚动提示模态框
 */

import { DoubleRightOutlined } from '@ant-design/icons';
import { useScroll, useSize } from 'ahooks';
import { Modal } from 'antd';
import React, { memo, useMemo, useRef } from 'react';
import type { PropsWithChildren } from 'react';
import { useState } from 'react';
import { Transition } from 'react-transition-group';

const duration = 300;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 1,
};

const transitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
};

const Fade = memo((props: PropsWithChildren<{ inProp: boolean }>) => {
  const { inProp, children } = props;
  const nodeRef = useRef(null);

  return (
    <Transition nodeRef={nodeRef} in={inProp} timeout={duration}>
      {(state) => {
        console.log('🚀 ~ file: ScrollTipModal.tsx ~ line 34 ~ Fade ~ state', state);
        return React.cloneElement(children as any, {
          ref: nodeRef,
          style: {
            ...defaultStyle,
            ...transitionStyles[state],
          },
        });
      }}
    </Transition>
  );
});

export default function ScrollTipModal() {
  const [visible, setVisible] = useState(true);

  const wrapperRef = useRef(null);
  const contentRef = useRef(null);

  const wrapperSize = useSize(wrapperRef);
  const contentSize = useSize(contentRef);
  const scrollPos = useScroll(wrapperRef);

  const showTip = useMemo(() => {
    console.log('contentSize, scrollPos, wrapperSize', contentSize, scrollPos, wrapperSize)
    return (
      (contentSize?.height ?? 0) > (wrapperSize?.height ?? 0) &&
      (scrollPos?.top ?? 0) < (contentSize?.height ?? 0) - (wrapperSize?.height ?? 0)
    );
  }, [contentSize, scrollPos, wrapperSize]);

  return (
    <Modal
      title="滚动提示模态框"
      visible={visible}
      bodyStyle={{ paddingBottom: 0 }}
      onCancel={() => setVisible(false)}
    >
      <section ref={wrapperRef} className="relative max-h-100 overflow-auto">
        <div ref={contentRef}>
          {Array.from({ length: 10 }, () => (
            <>
              <p>图标需要固定在模态容器底部，并且需要水平居中，不能随着内容滚动</p>
              <p>当内容高度小于模态组件高度时不需要现实这个滚动提示</p>
              <p>滚动到底部时需要隐藏滚动提示，向上滚动时需要重新显示</p>
            </>
          ))}
        </div>
        <Fade inProp={showTip}>
          <div
            className="sticky w-full h-6 bottom-0 flex justify-center items-center backdrop-blur-1"
            bg="gray-500 opacity-10"
          >
            <DoubleRightOutlined className="rotate-90" />
          </div>
        </Fade>
      </section>
    </Modal>
  );
}
