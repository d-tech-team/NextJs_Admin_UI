import * as React from 'react';
import styles from './index.module.scss'
import { Bell, ChatRightDots, List, Search } from 'react-bootstrap-icons';
import { Form } from 'react-bootstrap';

export interface IAppProps {
}

export default function App(props: IAppProps) {
  return (
    <div className={styles.Header}>
      <div> 
        <List/>
      </div>
      <div className='d-flex align-content-center'>
          <Form.Control placeholder={'Please type your keyword'} />
          <Search/>
      </div>
      <div className='d-flex'> 
           <ChatRightDots/>
           <Bell/>
           <div className="d-flex">
              <span>Lctiendat</span>
           </div>
      </div>
    </div>
  );
}
