import React, {useState} from 'react';
import {Container, Collapse, Table, Card, Col, Row, Button} from 'react-bootstrap';
import {BiInfoCircle, 
    BiSortAZ, 
    BiSortZA} from 'react-icons/bi';

import 'bootstrap/js/src/collapse.js';

const CollapsibleTable = () => {
	const [open, setOpen] = useState(false);

  return (<Container>
    <Card>
        <Card.Header>
            <Row>
                <Col>
                    Studierende
                </Col>
                <Col>
                    <BiInfoCircle className="info-button"></BiInfoCircle>
                </Col>
            </Row>
        </Card.Header>
        <Card.Body>
            <Card.Title>Überschrift</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Subheader</Card.Subtitle>
            <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
            </Card.Text>
            <Table hover responsive>
                <thead>
                    <tr>
                    <th>
                        <Button variant="light">
                            Studenten-ID.
                            <BiSortAZ className="sort-icon"/>
                            <BiSortZA className="sort-icon" hidden/>
                        </Button>
                    </th>
                    <th>
                        <Button variant="light">
                            Name
                            <BiSortAZ className="sort-icon"/>
                            <BiSortZA className="sort-icon" hidden/>
                        </Button>
                    </th>
                    <th>
                        <Button variant="light">
                            Studiengang
                            <BiSortAZ className="sort-icon"/>
                            <BiSortZA className="sort-icon" hidden/>
                        </Button>
                    </th>
                    <th>
                        <Button variant="light">
                            E-Mail
                            <BiSortAZ className="sort-icon"/>
                            <BiSortZA className="sort-icon" hidden/>
                        </Button>
                    </th>
                    </tr>
                </thead>
                <tbody>
                    <tr
                        onClick={() => setOpen(!open)}
                        aria-controls="example-collapse-text"
                        aria-expanded={open}
                    >
                        <td>i00b000</td>
                        <td>Vorname Nachname</td>
                        <td>BIFA3</td>
                        <td>name@name.name</td>
                    </tr>
                    <Collapse in={open}>
                        <tr id="example-collapse-text">
                            <td colSpan="4">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                                            terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                                            labore wes anderson cred nesciunt sapiente ea proident.
                            </td>
                        </tr>
                    </Collapse>
                </tbody>
                </Table>
        </Card.Body>
        <Card.Footer className="text-muted">Status</Card.Footer>
    </Card>
    </Container>
  );
};

export default CollapsibleTable;
