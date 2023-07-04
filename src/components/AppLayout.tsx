'use client'; // This is a client component 👈🏽
import 'bootstrap/dist/css/bootstrap.css';
import { Container } from 'react-bootstrap';
import Header from './Header';
import Footer from './Footer';
import styles from './AppLayout.module.scss';

interface AppLayoutProps {
  children: React.Component | any;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <div>
      <Header />
      <div className={styles.contentContainer}>
        <Container>{children}</Container>
      </div>
      <Footer />
    </div>
  );
};

export default AppLayout;
