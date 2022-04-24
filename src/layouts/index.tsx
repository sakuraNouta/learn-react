import { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import App from '../pages/App';
import Clock from '../pages/Clock';
import Comment, { CommentProps } from '../pages/Comment';
import EventButton from '../pages/EventButton';
import HelloWorld, { HelloWorldProps } from '../pages/HelloWorld';
import LoginControl from '../pages/LoginControl';

interface Menu {
  path: string;
  name: string;
  component:
    | ((props: any) => JSX.Element)
    | typeof Clock
    | typeof EventButton
    | typeof LoginControl;
  props?: HelloWorldProps | CommentProps;
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
    path: 'LoginControl',
    name: 'LoginControl',
    component: LoginControl
  }
];

export default function Layout() {
  const [menuName, setMenuName] = useState(Menus?.[0]?.name);
  const navigate = useNavigate();
  return (
    <div className="flex w-screen h-screen">
      <ul className="w-1/5 h-full px-8 bg-light-400">
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
