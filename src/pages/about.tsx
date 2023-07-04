import AppLayout from '@/components/AppLayout';
import { Row, Col } from 'react-bootstrap';
import PageTitle from '@/components/PageTitle';
import { useRecoilState } from 'recoil';
import { nameState } from 'state/states';

const About = () => {
  const [appName, setAppName] = useRecoilState(nameState);

  return (
    <AppLayout>
      <section className="py-5 mb-4">
        <PageTitle title={`Welcome to ${appName}`} />
        <Row>
          <Col md={12}>
            <p>
              At {appName}, we are dedicated to serving you the most awesome and
              traditional pizzas that will take your taste buds on a journey of
              pure delight. Our passion for pizza shines through in every bite,
              as we strive to provide an unforgettable dining experience.
            </p>
            <p>
              What sets our pizzas apart is the perfect combination of tradition
              and innovation. We have mastered the art of crafting hand-tossed
              dough that results in a light and airy crust with just the right
              amount of crispiness. Our secret family recipes for the tomato
              sauce and cheese blend have been passed down through generations,
              ensuring that you experience the authentic flavors of Italy with
              every slice.
            </p>
            <p>
              We take pride in sourcing the freshest and highest quality
              ingredients for our toppings. From locally sourced vegetables
              bursting with flavor to premium meats and artisanal cheeses, we
              strive to create unique and mouthwatering combinations that will
              tantalize your taste buds. Whether you're a fan of classic
              Margherita or crave bold and adventurous flavor profiles, our menu
              offers a wide range of options to satisfy every pizza lover.
            </p>
            <p>
              But it's not just about the pizza itself; it's about the entire
              experience. Step into {appName} and you'll be greeted by a warm
              and inviting atmosphere. Our friendly staff is passionate about
              providing exceptional service, making you feel right at home as
              you indulge in our pizza creations. Whether you're dining in with
              family and friends or grabbing a quick slice on the go, we ensure
              that every visit to {appName} is a memorable one.
            </p>
            <p>
              But it's not just about the pizza itself; it's about the entire
              experience. Step into {appName} and you'll be greeted by a warm
              and inviting atmosphere. Our friendly staff is passionate about
              providing exceptional service, making you feel right at home as
              you indulge in our pizza creations. Whether you're dining in with
              family and friends or grabbing a quick slice on the go, we ensure
              that every visit to {appName} is a memorable one.
            </p>
            <p>Buon appetito!</p>
          </Col>
        </Row>
      </section>
    </AppLayout>
  );
};

export default About;
