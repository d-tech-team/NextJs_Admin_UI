import React, { useEffect, useState } from 'react';
import styles from './index.module.scss'
import { Bell, BoxArrowInRight, ChatRightDots, List, Search, Sliders } from 'react-bootstrap-icons';
import { Form } from 'react-bootstrap';
import Image from 'next/image';

export interface IAppProps {
}

export default function App(props: IAppProps) {

  const [showSearch, setShowSearch] = useState(false)


  return (
    <div className={styles.Header}>
      <div className={styles.Header__navbar}>
        <List onClick={() => {
          console.log('close sidebar');
        }} />
      </div>
      <div className={`${styles.Header__search} ${showSearch ? styles.Header__search__show : styles.Header__search__hidden}`}>
        <Form.Control placeholder={'Please type your keyword'} />
      </div>
      <div className={styles.Header__end}>
        <Search onMouseEnter={() => {
          setShowSearch(!showSearch)
        }} />
        <ChatRightDots />
        <Bell />
        <div className="d-flex align-items-center">
          <span>Lctiendat</span>
          <Image height={45} width={45} src={'/images/avatar-default.png'} alt='this is avatar default' />
          <ul className={styles.Header__end__menu}>
            <li> <Sliders /> Setting </li>
            <li> <BoxArrowInRight /> Signout</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
