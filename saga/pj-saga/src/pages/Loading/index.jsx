

import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import styles from "./styles.module.scss";


export default function CircularIndeterminate() {

  return (
    <div className={styles.root}>
      <CircularProgress className={styles.circularProgress} />
    </div>
  );
}
