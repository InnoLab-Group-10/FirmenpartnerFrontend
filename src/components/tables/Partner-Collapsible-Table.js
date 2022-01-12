import React, { useEffect } from 'react';
import { Container, Table, Card, Col, Row, Button } from 'react-bootstrap';
import { BiInfoCircle, BiSortAZ, BiSortZA, BiSortDown, BiSortUp } from 'react-icons/bi';
import PartnerRow from './PartnerRow';
import { useDispatch, useSelector } from 'react-redux';

import { companyGetAll } from '../../store/company-thunks';
import 'bootstrap/js/src/collapse.js';

const CollapsibleTable = () => {
	const dispatch = useDispatch();
	const companies = useSelector(state => state.company.companies);

	useEffect(() => {
		dispatch(companyGetAll());
	}, [dispatch]);

	//map verwenden um die companies in der tabelle anzuzeigen

	return (
		<Container>
			<Card>
				<Card.Header>
					<Row>
						<Col>Partnerunternehmen</Col>
						<Col>
							<BiInfoCircle className='info-button'></BiInfoCircle>
						</Col>
					</Row>
				</Card.Header>
				<Card.Body>
					<Card.Title>Überschrift</Card.Title>
					<Card.Subtitle className='mb-2 text-muted'>Subheader</Card.Subtitle>
					<Card.Text>
						Some quick example text to build on the card title and make up the bulk of the
						card's content.
					</Card.Text>
					<Table hover responsive>
						<thead>
							<tr>
								<th>
									<Button variant='light'>
										Partner
										<BiSortAZ className='sort-icon' />
										<BiSortZA className='sort-icon' hidden />
									</Button>
								</th>
								<th>
									<Button variant='light'>
										Ansprechperson
										<BiSortAZ className='sort-icon' />
										<BiSortZA className='sort-icon' hidden />
									</Button>
								</th>
								<th>
									<Button variant='light'>
										E-Mail
										<BiSortAZ className='sort-icon' />
										<BiSortZA className='sort-icon' hidden />
									</Button>
								</th>
								<th>
									<Button variant='light'>
										Telefon
										<BiSortDown className='sort-icon' />
										<BiSortUp hidden />
									</Button>
								</th>
							</tr>
						</thead>
						<tbody>
							<PartnerRow
								activity='1'
								name='Testname'
								maincontactname='Test Tester'
								email='name@name.name'
								phone='+43 (0) 000 000 00 00'
								text='Text'
								adress='Teststraße 104a/14'
								zipcode='1150'
								city='Wien'
								studentsPerYear='99'
							/>
							<PartnerRow
								activity='0'
								name='Testname'
								maincontactname='Test Tester'
								email='name@name.name'
								phone='+43 (0) 000 000 00 00'
								text='Text'
								adress='Teststraße 104a/14'
								zipcode='1150'
								city='Wien'
								studentsPerYear='99'
							/>
							<PartnerRow
								activity='2'
								name='Testname'
								maincontactname='Test Tester'
								email='name@name.name'
								phone='+43 (0) 000 000 00 00'
								text='Text'
								adress='Teststraße 104a/14'
								zipcode='1150'
								city='Wien'
								studentsPerYear='99'
							/>
						</tbody>
					</Table>
				</Card.Body>
				<Card.Footer className='text-muted'>Status</Card.Footer>
			</Card>
		</Container>
	);
};

export default CollapsibleTable;
