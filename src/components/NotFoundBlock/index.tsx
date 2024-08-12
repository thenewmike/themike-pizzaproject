import React from 'react';
import styles from './NotFoudBlock.module.scss';

export const NotFoundBlock: React.FC = () => {
  return (
    <h1 className={styles.root}>
      <span>SHoooo</span>
      <br />
      NotFound
    </h1>
  );
};

export default NotFoundBlock;
