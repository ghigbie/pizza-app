import { Container, Navbar, Nav, Row } from 'react-bootstrap';
import { useRouter } from 'next/router';
import styles from './NavbarComponent.module.scss';
import { PageOrderItem } from '../data/pageOrder';
import { useRecoilState } from 'recoil';
import { nameState } from 'state/states';

interface NavbarComponentProps {
  pageOrder: Array<PageOrderItem>;
}

const NavbarComponent = ({ pageOrder }: NavbarComponentProps) => {
  const [appName, setAppName] = useRecoilState(nameState);
  const router = useRouter();
  return (
    <Navbar
      variant="dark"
      expand="lg"
      className={`d-flex justify-content-between ${styles.customContainer}`}
    >
      <Container>
        <Navbar.Brand onClick={() => router.push('/')}>
          <div className={styles.brandContainer}>{appName}</div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarSupportedContent" />
        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="mr-auto">
            {pageOrder.map((pageOrderItem) => (
              <Nav.Link
                key={pageOrderItem.id}
                onClick={() => router.push(pageOrderItem.route)}
                className={
                  router.pathname.slice(1) === pageOrderItem.route
                    ? 'active'
                    : ''
                }
              >
                {pageOrderItem.name}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
        <Nav className="mr-auto">
          <Nav.Link
            onClick={() => router.push('/')}
            className={router.pathname === '/' ? 'active' : ''}
          >
            Chef Portal
          </Nav.Link>
          <Nav.Link
            onClick={() => router.push('/toppings/edit-toppings')}
            className={router.pathname.includes('toppings') ? 'active' : ''}
          >
            Owner Portal
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
