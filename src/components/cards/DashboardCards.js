import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import DashboardCard from './DashboardCard.';

const DashboardCards = () => {
	return (
        <Container>
            <Row>
                <Col>
                    <DashboardCard/>
                </Col>
                <Col>
                    <DashboardCard/>
                </Col>
                <Col>
                    <DashboardCard/>
                </Col>
                <Col>
                    <DashboardCard/>
                </Col>
            </Row>
        </Container>
	);
};

export default DashboardCards;