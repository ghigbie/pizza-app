import { ReactNode } from 'react';
import styles from './ButtonWrapper.module.scss';

interface ButtonWrapperProps {
  children: ReactNode;
}

const ButtonWrapper = ({ children }: ButtonWrapperProps) => {
  return <div className={styles.wrapper}>{children}</div>;
};

export default ButtonWrapper;
