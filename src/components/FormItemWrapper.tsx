import { ReactNode } from 'react';
import styles from './FormItemWrapper.module.scss';

interface FormItemWrapperProps {
  children: ReactNode;
}

const FormItemWrapper = ({ children }: FormItemWrapperProps) => (
  <div className={styles.wrapper}>{children}</div>
);

export default FormItemWrapper;
