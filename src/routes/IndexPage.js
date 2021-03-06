import React from 'react';
import { connect } from 'dva';
import Example from '../components/Example';
import styles from './IndexPage.css';

function IndexPage() {
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>Yay! Welcome to dva!</h1>
      <div className={styles.welcome} />
      <ul className={styles.list}>
        <li>To get started, edit <code>src/index.js</code> and save to reload.</li>
      </ul>
      <Example />
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
