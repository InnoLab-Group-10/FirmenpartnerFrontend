import React from 'react';
import { Card, Form, Row, Col } from 'react-bootstrap';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';

const data = [
    {name: '2018', Studierende: 24},
    {name: '2019', Studierende: 12},
    {name: '2020', Studierende: 9},
    {name: '2021', Studierende: 17}

];

const Statistics = () => {
	return (
		<>
			<Card>
				<Card.Body className='calendar-styling-override'>
                    <Row>
                        {<h3>Aufgenommene Studierende pro Jahr</h3>} 
                        <Col>
                            <Form.Select aria-label="Default select example">
                                <option>Unternehmen wählen ...</option>
                                <option value="1">Firma 1</option>
                                <option value="2">Firma 2</option>
                                <option value="3">Firma 3</option>
                            </Form.Select>
                        </Col>   
                    </Row>
                    {<br/>}
                    <Row>
                        <Col>
                            <BarChart width={600} height={420} data={data}>
                                <XAxis dataKey="name" stroke="#8884d8" />
                                <YAxis />
                                <Tooltip wrapperStyle={{ width: 140, backgroundColor: '#ccc' }} />
                                <Legend width={140} wrapperStyle={{ top: 40, right: 20, backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '40px' }} />
                                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                                <Bar dataKey="Studierende" fill="#8884d8" barSize={30} />
                            </BarChart>
                        </Col>
                    </Row> 
				</Card.Body>
			</Card>
		</>
	);
};

export default Statistics;
