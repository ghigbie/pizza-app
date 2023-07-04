import Link from 'next/link';
import { Row, Col, Card } from 'react-bootstrap';
import { teamMembers } from '@/data/teamMembers';
import PageTitle from '@/components/PageTitle';
import { TeamMember } from '@/data/teamMembers';
import AppLayout from '@/components/AppLayout';

const OurTeam = () => {
  return (
    <AppLayout>
      <section className="py-5">
        <PageTitle title="Our Team" />
        <Row>
          {teamMembers.map((member: TeamMember, index: number) => (
            <Col md={4} key={index}>
              <Card className="mb-4">
                <Card.Img variant="top" src={member.image} alt={member.name} />
                <Card.Body>
                  <Card.Title>{member.name}</Card.Title>
                  <Card.Text>{member.position}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </section>
    </AppLayout>
  );
};

export default OurTeam;
