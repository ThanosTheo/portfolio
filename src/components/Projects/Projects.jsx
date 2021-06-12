import React, { useRef } from 'react';
import cn from 'classnames';

import isVisibleToUser from '../../common/isVisibleToUser';

import styles from './Projects.module.scss';

export default function AboutMe() {
  const ref = useRef();
  const isVisible = isVisibleToUser(ref);

  return (
    <section className={cn({ show: isVisible })} id="projects" ref={ref}>
      <h2 className={styles.title}>Things I have built</h2>
      <div className={styles.content}>
        Projects
      </div>
    </section>
  );
}
