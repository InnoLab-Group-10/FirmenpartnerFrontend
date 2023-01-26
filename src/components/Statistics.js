import React, { useEffect, useState } from 'react';
import { Card, Form, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';

import { companyGetAll } from '../store/company-thunks';

const Statistics = () => {
	const dispatch = useDispatch();
	const { companies, shouldReload } = useSelector(state => state.company);

	useEffect(() => {
		if (shouldReload) {
			dispatch(companyGetAll());
		}
	}, [dispatch, shouldReload]);

	const [selectedCompanyData, setSelectedCompanyData] = useState();

	const handleChange = e => {
		const entry = companies.find(entry => entry.company.id === e.target.value);
		setSelectedCompanyData(entry.studentCountHistory);
	};

	return (
		<Card>
			<Card.Body className='calendar-styling-override'>
				<Row>
					{<h3>Aufgenommene Studierende pro Jahr</h3>}
					<Col>
						<Form.Select
							aria-label='Default select example'
							defaultValue='1'
							onChange={handleChange}
						>
							<option value='1' disabled>
								Unternehmen wählen...
							</option>
							{companies.map(entry => (
								<option key={entry.company.id} value={entry.company.id}>
									{entry.company.name}
								</option>
							))}
						</Form.Select>
					</Col>
				</Row>
				<br />
				<Row>
					<Col>
						<BarChart width={600} height={420} data={selectedCompanyData}>
							<XAxis dataKey='year' name='Jahr' stroke='#8884d8' />
							<YAxis />
							<Tooltip wrapperStyle={{ width: 140, backgroundColor: '#ccc' }} />
							<Legend
								width={140}
								wrapperStyle={{
									top: 40,
									right: 20,
									backgroundColor: '#f5f5f5',
									border: '1px solid #d5d5d5',
									borderRadius: 3,
									lineHeight: '40px',
								}}
							/>
							<CartesianGrid stroke='#ccc' strokeDasharray='5 5' />
							<Bar dataKey='count' name='Studierende' fill='#8884d8' barSize={30} />
						</BarChart>
					</Col>
				</Row>
			</Card.Body>
		</Card>
	);
};

export default Statistics;
