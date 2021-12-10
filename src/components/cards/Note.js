import React from 'react';
import {Toast, Container, Row} from 'react-bootstrap';

const Note = (props) => {
	return <Toast className="appointment-card" bg={props.variant}>
            <Toast.Header>
                <strong className="me-auto">{props.title}</strong>
                <small>{props.info}</small>
            </Toast.Header>
            <Toast.Body>
                <Container>
                    <Row className="toast-message">
                        {props.text}
                    </Row>
                </Container>  
            </Toast.Body>
        </Toast>
};

export default Note;
