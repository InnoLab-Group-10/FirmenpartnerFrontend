import React from 'react';
import {Container} from 'react-bootstrap';
import Appointment from './Appointment';

const Timeline = (props) => {
	return <Container>
                    <h4 className="timeline-year">2021</h4>
                    <h5 className="timeline-month">Dezember</h5>
                    <Appointment 
                        title="Typ 1"
                        info="Erstellt am 07.12.21"
                        text="Hier kann etwas stehen."
                        button="Jetzt absenden"
                        link="https://www.google.at"
                        variant="primary"
                    />
                    <Appointment 
                        title="Typ 2"
                        info="Läuft am 10.12.21 ab"
                        text="Hier kann etwas anderes stehen."
                        button="Nachricht verfassen"
                        link="partnerfirmen"
                        variant="warning"
                    />
                    <Appointment 
                        title="Typ 3"
                        info="Sonstige Info"
                        text="Allerhand Möglichkeiten."
                        button="Sonstiges"
                        link=""
                        variant="info"
                    />
                    <h4 className="timeline-year">2022</h4>
                    <h5 className="timeline-month">Januar</h5>
                    <Appointment 
                        title="Typ 4"
                        info="Sonstige Info"
                        text="Allerhand Möglichkeiten."
                        button="Sonstiges"
                        link=""
                        variant="success"
                    />
                    <Appointment 
                        title="Typ 5"
                        info="Sonstige Info"
                        text="Allerhand Möglichkeiten."
                        button="Sonstiges"
                        link=""
                        variant="light"
                    />
                    <Appointment 
                        title="Typ 6"
                        info="Sonstige Info"
                        text="Allerhand Möglichkeiten."
                        button="Sonstiges"
                        link=""
                        variant="danger"
                    />
        </Container>
};

export default Timeline;
