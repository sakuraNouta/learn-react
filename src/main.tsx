import 'virtual:windi.css';
import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Layout, { Menus } from './layouts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path={import.meta.env.BASE_URL} element={<Layout />}>
        <Route
          index
          element={React.createElement(Menus?.[0]?.component)}
        ></Route>
        {Menus.map(({ name, path, component, props }, index) => (
          <Route
            key={name}
            index={!index}
            path={path}
            element={React.createElement(component, props)}
          ></Route>
        ))}
      </Route>
    </Routes>
  </BrowserRouter>
);
