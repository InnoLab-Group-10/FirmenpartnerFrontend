import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import DashboardCard from './DashboardCard';

import { companyGetAll } from '../../store/company-thunks';

const DashboardCards = () => {
	const dispatch = useDispatch();
	const { shouldReload, activeCompanies, inactiveCompanies, maxStudentsCounter } =
		useSelector(state => state.company);

	useEffect(() => {
		if (shouldReload) {
			dispatch(companyGetAll());
		}
	}, [shouldReload, dispatch]);

	return (
		<Container>
			<Row>
				<Col>
					<DashboardCard
						header='Partner'
						counter={activeCompanies.length}
						text='Aktive Unternehmen'
					/>
				</Col>
				<Col>
					<DashboardCard
						header='Partner'
						counter={inactiveCompanies.length}
						text='Inaktive Unternehmen'
					/>
				</Col>
				<Col>
					<DashboardCard
						header='Studierende'
						counter={maxStudentsCounter}
						text='Geplante Aufnahmen'
					/>
				</Col>
			</Row>
		</Container>
	);
};

export default DashboardCards;
