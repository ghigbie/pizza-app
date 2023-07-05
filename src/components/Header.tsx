import NavbarComponent from './NavbarComponent';
import styles from './Header.module.scss';
import { pageOrderArray } from '@/data/pageOrder';
import { useRecoilState } from 'recoil';
import { nameState } from 'state/states';

const Header = () => {
  const [appName, setAppName] = useRecoilState(nameState);
  return (
    <div className={styles.customContainer}>
      <NavbarComponent pageOrder={pageOrderArray} />

      <header className="py-5 text-light text-center pb-1">
        <h1 className="display-4">{appName}</h1>
        <p className="lead">Your source of the most awesome pizza ever!</p>
      </header>
    </div>
  );
};

export default Header;
