import { Row, Col, Form, Button } from 'react-bootstrap';
import AppLayout from '@/components/AppLayout';
import PageTitle from '@/components/PageTitle';
import FormItemWrapper from '@/components/FormItemWrapper';
import { useRecoilState } from 'recoil';
import { nameState } from 'state/states';

function ContactUsPage() {
  const [appName, setAppName] = useRecoilState(nameState);
  return (
    <AppLayout>
      <section className="py-5">
        <PageTitle title="Contact Us" />
        <Row>
          <Col md={12}>
            <Form>
              <FormItemWrapper>
                <Form.Group controlId="formName">
                  <Form.Label>Your Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your name" />
                </Form.Group>
              </FormItemWrapper>
              <FormItemWrapper>
                <Form.Group controlId="formEmail">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email address"
                  />
                </Form.Group>
              </FormItemWrapper>
              <FormItemWrapper>
                <Form.Group controlId="formMessage">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    placeholder="Enter your message"
                  />
                </Form.Group>
              </FormItemWrapper>
            </Form>
            <Button variant="primary" type="button">
              Submit
            </Button>
          </Col>
          <Col md={8} className="my-auto">
            <p>
              Have any questions or feedback? We would love to hear from you!
              Fill out the form and our team will get back to you as soon as
              possible.
            </p>
            <p>
              You can also reach us at <strong>info@pizzaparadise.com</strong>{' '}
              or call us at <strong>+1 (123) 456-7890</strong>.
            </p>
          </Col>
        </Row>
      </section>
    </AppLayout>
  );
}

export default ContactUsPage;
