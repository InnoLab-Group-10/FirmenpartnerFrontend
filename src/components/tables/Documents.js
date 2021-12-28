import React from 'react';
import {Card, Container, Row, Col, Table, Button} from 'react-bootstrap';
import { BiInfoCircle,
        BiSortAZ, 
        BiSortZA, 
        BiSortDown, 
        BiSortUp } from 'react-icons/bi';
import {GrDocumentWord} from 'react-icons/gr';

import DocumentRow from './DocumentRow';

const Documents = () => {
	return <Container className="document-table">
        <Card>
        <Card.Header>
            <Row>
                <Col>
                    Dokumente
                </Col>
                <Col>
                    <BiInfoCircle className="info-button"></BiInfoCircle>
                </Col>
            </Row>
        </Card.Header>
        <Card.Body>
        <Table hover responsive>
            <thead>
                <tr>
                    <th>
                        <Button className="sort-icon-single" variant="light">
                            <BiSortDown className="sort-icon-center"/>
                            <BiSortUp className="sort-icon-center" hidden/>
                        </Button>
                    </th>
                    <th>
                        <Button variant="light">
                            Dateiname
                            <BiSortAZ className="sort-icon"/>
                            <BiSortZA className="sort-icon" hidden/>
                        </Button>
                    </th>
                    <th>
                        <Button variant="light">
                            Author
                            <BiSortAZ className="sort-icon"/>
                            <BiSortZA className="sort-icon" hidden/>
                        </Button>  
                    </th>
                    <th>
                        <Button variant="light">
                            Änderungsdatum
                            <BiSortDown className="sort-icon"/>
                            <BiSortUp className="sort-icon" hidden/>
                        </Button>
                    </th>
                </tr>
            </thead>
            <tbody>
                <DocumentRow
                    icon="pdf"
                    name="Dokument.pdf"
                    author="Test"
                    timestamp="00.00.0000 00:00"
                />
                <DocumentRow
                    icon="word"
                    name="Bezeichner.docx"
                    author="Test"
                    timestamp="00.00.0000 00:00"
                />
                <DocumentRow
                    icon="ppt"
                    name="Präsentation.ppt"
                    author="Test"
                    timestamp="00.00.0000 00:00"
                />
                <DocumentRow
                    icon="excel"
                    name="Tabelle.xlx"
                    author="Test"
                    timestamp="00.00.0000 00:00"
                />
                <DocumentRow
                    icon="misc"
                    name="Sonstiges.csv"
                    author="Test"
                    timestamp="00.00.0000 00:00"
                />
                <DocumentRow
                    icon="jpg"
                    name="Logo.jpg"
                    author="Test"
                    timestamp="00.00.0000 00:00"
                />
            </tbody>
            </Table>
        </Card.Body>
        <Card.Footer className="text-muted">Status</Card.Footer>
    </Card>
    </Container>
};

export default Documents;
