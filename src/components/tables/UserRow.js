import React, {useState} from 'react';
import {Collapse} from 'react-bootstrap';

const UserRow = (props) => {
	const [open, setOpen] = useState(false);

	return <>
                <tr
                    onClick={() => setOpen(!open)}
                    aria-controls="example-collapse-text"
                    aria-expanded={open}
                >
                    <td>{props.username}</td>
                    <td>{props.userrole}</td>
                    <td>{props.useremail}</td>
                    <td>BUTTON</td>
                </tr>
                <Collapse in={open}>
                    <tr id="example-collapse-text">
                        <td colSpan="1">
                            <strong>Name:</strong>
                            <br/>
                            <strong>Telefonnummer:</strong>
                            <br/>
                            <strong>Notiz:</strong>
                        </td>
                        <td colSpan="3">
                            Titel Vorname Nachname Titel
                            <br/>
                            +43 (0) 000 000 00 00
                            <br/>
                            Beispieltext
                        </td>
                    </tr>
                </Collapse>
            </>
};

export default UserRow;
