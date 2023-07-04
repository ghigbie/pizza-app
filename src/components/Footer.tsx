import { Container } from 'react-bootstrap';
import styles from './Footer.module.scss';
import { useRecoilState } from 'recoil';
import { nameState } from 'state/states';

const Footer = () => {
  const [appName, setAppName] = useRecoilState(nameState);
  return (
    <footer className={`py-3 text-light text-center ${styles.footer}`}>
      <Container>
        <p className="mb-0">
          &copy; {new Date().getFullYear()} {appName}. All rights reserved.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
