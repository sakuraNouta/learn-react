import { useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import JSXInDepth from '../pages/advanced/JSXInDepth';
import Portals from '../pages/advanced/Portals';
import RefDom from '../pages/advanced/RefDom';
import App from '../pages/App';
import Calculator from '../pages/Calculator';
import Clock from '../pages/Clock';
import Comment, { CommentProps } from '../pages/Comment';
import EventButton from '../pages/EventButton';
import HelloWorld, { HelloWorldProps } from '../pages/HelloWorld';
import DemoMemorizedFn from '../pages/hook/DemoMemorizedFn';
import HookExample from '../pages/hook/Example';
import FriendStatus, { FriendStatusProps } from '../pages/hook/FriendStatus';
import LoginControl from '../pages/LoginControl';
import NameForm from '../pages/NameForm';
import NumberList, { NumberListProps } from '../pages/NumberList';
import ReduxExample from '../pages/redux/Example';
import TodoList from '../pages/redux/TodoList';
import SagaCounter from '../pages/saga/Counter';
import SagaHello from '../pages/saga/Hello';
import SignUpDialog from '../pages/SignUpDialog';

interface Menu {
  path: string;
  name: string;
  component:
    | ((props: any) => JSX.Element)
    | (() => JSX.Element)
    | typeof Clock
    | typeof EventButton
    | typeof LoginControl
    | typeof NameForm
    | typeof Calculator
    | typeof SignUpDialog;
  props?: HelloWorldProps | CommentProps | NumberListProps | FriendStatusProps;
}

export const Menus: Menu[] = [
  {
    path: 'app',
    name: 'App',
    component: App
  },
  {
    path: 'hello',
    name: 'HelloWorld',
    component: HelloWorld,
    props: {
      user: 'admin'
    }
  },
  {
    path: 'comment',
    name: 'Comment',
    component: Comment,
    props: {
      author: { name: 'admin' },
      text: `It accepts author (an object), text (a string), and date (a date) as props, and describes a comment on a social media website.

      This component can be tricky to change because of all the nesting, and it is also hard to reuse individual parts of it. Let’s extract a few components from it.
    
      First, we will extract Avatar:`,
      date: '2022-04-21 14:41'
    }
  },
  {
    path: 'clock',
    name: 'Clock',
    component: Clock
  },
  {
    path: 'toggle',
    name: 'Toggle',
    component: EventButton
  },
  {
    path: 'loginControl',
    name: 'LoginControl',
    component: LoginControl
  },
  {
    path: 'numberList',
    name: 'NumberList',
    component: NumberList,
    props: { numbers: [1, 2, 3] }
  },
  {
    path: 'nameForm',
    name: 'NameForm',
    component: NameForm
  },
  {
    path: 'calculator',
    name: 'Calculator',
    component: Calculator
  },
  {
    path: 'signUpDialog',
    name: 'SignUpDialog',
    component: SignUpDialog
  },
  {
    path: 'hook/example',
    name: 'HookExample',
    component: HookExample
  },
  {
    path: 'hook/friend',
    name: 'FriendStatus',
    component: FriendStatus,
    props: { friend: { id: 1 } }
  },
  {
    path: 'redux/example',
    name: 'ReduxExample',
    component: ReduxExample
  },
  {
    path: 'redux/TodoList',
    name: 'TodoList',
    component: TodoList
  },
  {
    path: 'saga/Hello',
    name: 'SagaHello',
    component: SagaHello
  },
  {
    path: 'saga/Counter',
    name: 'SagaCounter',
    component: SagaCounter
  },
  {
    path: 'advance/RefDom',
    name: 'RefDom',
    component: RefDom
  },
  {
    path: 'advance/JSXInDepth',
    name: 'JSXInDepth',
    component: JSXInDepth
  },
  {
    path: 'advance/Portals',
    name: 'Portals',
    component: Portals
  },
  {
    path: 'hook/DemoMemorizedFn',
    name: 'DemoMemorizedFn',
    component: DemoMemorizedFn
  }
];

export default function Layout() {
  const location = useLocation();
  const defaultMenuName =
    Menus.find(
      menu => location.pathname && location.pathname.indexOf(menu.path) >= 0
    )?.name || Menus?.[0]?.name;
  const [menuName, setMenuName] = useState(defaultMenuName);
  const navigate = useNavigate();

  return (
    <div className="flex w-screen h-screen">
      <ul className="w-1/5 h-full px-8 bg-light-400 overflow-auto">
        <li className="text-xl py-8">Vite-React-Ts-App</li>
        {Menus.map(menu => (
          <li
            className={`py-2 cursor-pointer ${
              menu.name === menuName ? 'text-cyan-400' : ''
            }`}
            key={menu.name}
            onClick={() => {
              setMenuName(menu.name);
              navigate(menu.path);
            }}
          >
            {menu.name}
          </li>
        ))}
      </ul>
      <div className="flex w-4/5">
        <Outlet />
      </div>
    </div>
  );
}
