import { CSSProperties } from 'react';
import styles from './Loading.module.scss';

interface PageTitleProps {
  title?: string;
  style?: CSSProperties;
  fontStyles?: CSSProperties;
}

const PageTitle = ({
  title = 'Loading...',
  style,
  fontStyles,
}: PageTitleProps) => (
  <div className={styles.container} style={style}>
    <h3 style={fontStyles}>{title}</h3>
  </div>
);

export default PageTitle;
