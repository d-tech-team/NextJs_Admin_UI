import * as React from 'react';
import styles from './index.module.scss'
import { Facebook,House } from 'react-bootstrap-icons';
import Item from './Item'

const menu = [
  {
    label: 'Home',
    href: '#',
    icon: <House />,
    items: [
      {
        label: 'Home',
        href: '/',
      },
      {
        label: 'Home',
        href: '/',
      },
      {
        label: 'Home',
        href: '/',
      },
      {
        label: 'Home',
        href: '/',
      },
      {
        label: 'Home',
        href: '/',
      },
    ]
  },
  {
    label: 'Home',
    href: '#',
    icon: <Facebook />,
    items: [
      {
        label: 'Home',
        href: '/',
      },
      {
        label: 'Home',
        href: '/',
      },
      {
        label: 'Home',
        href: '/',
      },
      {
        label: 'Home',
        href: '/',
      },
      {
        label: 'Home',
        href: '/',
      },
    ]
  },
]

export interface IAppProps {
}

export default function App(props: IAppProps) {
  return (
    <div className={styles.Sidebar}>
      <div className={styles.Sidebar__brand}>logo</div>
      <div className={styles.Sidebar__menu}>
        {Array.isArray(menu) && menu.map((item,i) => (
          <Item key={i} menu={item} />
        ))}
      </div>
    </div>
  );
}
