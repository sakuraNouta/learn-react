import { useRef, useEffect } from 'react';
import { useVirtualList } from 'ahooks';
import { Cascader } from 'antd';
import styles from './index.less';

const Data = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    // children: [
    //   {
    //     value: 'hangzhou',
    //     label: 'Hangzhou',
    //     children: [
    //       {
    //         value: 'xihu',
    //         label: 'West Lake',
    //       },
    //     ],
    //   },
    // ],
  },
  ...Array.from({ length: 10000 }, (v, i) => {
    return {
      value: `jiangsu-${i}`,
      label: `Jiangsu-${i}`,
      // children: [
      //   {
      //     value: `nanjing-${i}`,
      //     label: `Nanjing-${i}`,
      //     children: [
      //       {
      //         value: 'zhonghuamen',
      //         label: 'Zhong Hua Men',
      //       },
      //     ],
      //   },
      // ],
    };
  }),
];

export default () => {
  const containerRef = useRef<any>(null);

  const [options] = useVirtualList(Data, {
    containerTarget: containerRef,
    wrapperTarget: containerRef?.current?.firstChild?.firstChild,
    itemHeight: 32,
  });

  useEffect(() => {
    console.log('🚀 ~ file: VirtualList.tsx ~ line 24 ~ useEffect ~ list', options);
  }, [options]);

  const onChange = (v: any) => {
    console.log('🚀 ~ file: VirtualList.tsx ~ line 56 ~ onChange ~ v', v);
  };

  return (
    <>
      <Cascader
        open
        showSearch
        multiple
        options={options.map(item => item.data)}
        onChange={onChange}
        placeholder="Please select"
        dropdownRender={(menus) => {
          return <div ref={containerRef} className={styles.dropdown}>{menus}</div>;
        }}
      />
    </>
  );
};
