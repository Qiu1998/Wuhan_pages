import Home from './pages/Home';
import Culture from './pages/Culture';
import Attractions from './pages/Attractions';
import Food from './pages/Food';
import Tourism from './pages/Tourism';
import type { ReactNode } from 'react';

interface RouteConfig {
  name: string;
  path: string;
  element: ReactNode;
  visible?: boolean;
}

const routes: RouteConfig[] = [
  {
    name: '首页',
    path: '/',
    element: <Home />,
    visible: true
  },
  {
    name: '历史文化',
    path: '/culture',
    element: <Culture />,
    visible: true
  },
  {
    name: '著名景点',
    path: '/attractions',
    element: <Attractions />,
    visible: true
  },
  {
    name: '特色美食',
    path: '/food',
    element: <Food />,
    visible: true
  },
  {
    name: '旅游攻略',
    path: '/tourism',
    element: <Tourism />,
    visible: true
  }
];

export default routes;