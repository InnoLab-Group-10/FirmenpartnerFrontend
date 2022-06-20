import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import DashboardCard from './DashboardCard.';

const DashboardCards = () => {
	return (
        <Container>
            <Row>
                <Col>
                    <DashboardCard header="Partner" counter="100" text="Aktive Unternehmen"/>
                </Col>
                <Col>
                    <DashboardCard header="Partner" counter="100" text="Inaktive Unternehmen"/>
                </Col>
                <Col>
                    <DashboardCard header="Studierende" counter="100" text="Derzeit vermittelt"/>
                </Col>
                <Col>
                    <DashboardCard header="Studierende" counter="100" text="Insgesamt vermittelt"/>
                </Col>
            </Row>
        </Container>
	);
};

export default DashboardCards;