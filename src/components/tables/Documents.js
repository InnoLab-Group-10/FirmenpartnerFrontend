import React from 'react';
import {Card, Container, Row, Col, Table} from 'react-bootstrap';
import { BiInfoCircle,
        BiSortAZ, 
        BiSortZA, 
        BiSortDown, 
        BiSortUp } from 'react-icons/bi';
import {GrDocumentPdf, 
        GrDocumentPpt, 
        GrDocumentExcel,
        GrDocumentWord,
        GrDocument} from 'react-icons/gr';

const Documents = () => {
	return <Container className="document-table">
        <Card>
        <Card.Header>
            <Row>
                <Col>
                    Test
                </Col>
                <Col>
                    <BiInfoCircle className="info-button"></BiInfoCircle>
                </Col>
            </Row>
        </Card.Header>
        <Card.Body>
        <Table hover>
            <thead>
                <tr>
                <th>
                    <BiSortDown className="sort-icon-center"/>
                    <BiSortUp className="sort-icon-center" hidden/>
                </th>
                <th>
                    Dateiname
                    <BiSortAZ className="sort-icon"/>
                    <BiSortZA className="sort-icon" hidden/>
                </th>
                <th>
                    Author
                    <BiSortAZ className="sort-icon"/>
                    <BiSortZA className="sort-icon" hidden/>   
                </th>
                <th>
                    Änderungsdatum
                    <BiSortDown className="sort-icon"/>
                    <BiSortUp hidden/>
                </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <GrDocumentPdf className="pdf"/>
                    </td>
                    <td>Dokumentename.pdf</td>
                    <td>Benutzername</td>
                    <td>00.00.0000 00:00</td>
                </tr>
                <tr>
                    <td>
                        <GrDocumentWord className="word"/>
                    </td>
                    <td>Bezeichner.docx</td>
                    <td>Benutzername</td>
                    <td>00.00.0000 00:00</td>
                </tr>
                <tr>
                    <td>
                        <GrDocumentPpt className="ppt"/>
                    </td>
                    <td>Präsentation.ppt</td>
                    <td>Benutzername</td>
                    <td>00.00.0000 00:00</td>
                </tr>
                <tr>
                    <td>
                        <GrDocumentExcel className="excel"/>
                    </td>
                    <td>Tabelle.xlx</td>
                    <td>Benutzername</td>
                    <td>00.00.0000 00:00</td>
                </tr>
                <tr>
                    <td>
                        <GrDocument className="misc"/>
                    </td>
                    <td>Sonstiges.csv</td>
                    <td>Benutzername</td>
                    <td>00.00.0000 00:00</td>
                </tr>
            </tbody>
            </Table>
        </Card.Body>
        <Card.Footer className="text-muted">Status</Card.Footer>
    </Card>
    </Container>
};

export default Documents;
