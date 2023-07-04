import { CSSProperties, ReactNode } from 'react';
import styles from './PageTitle.module.scss';

interface PageTitleProps {
  title: string;
  icon?: ReactNode;
  spacing?: string;
  style?: CSSProperties;
  fontStyles?: CSSProperties;
}

const PageTitle = ({
  title,
  icon,
  spacing = '18px',
  style,
  fontStyles,
}: PageTitleProps) => (
  <div className={styles.container} style={style}>
    <h2 style={fontStyles}>{title}</h2>
    {icon && <div style={{ marginRight: spacing }}>{icon}</div>}
  </div>
);

export default PageTitle;
