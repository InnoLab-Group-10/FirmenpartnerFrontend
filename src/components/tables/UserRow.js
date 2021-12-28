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
                            <strong>Test 1:</strong>
                            <br/>
                            <strong>Test 2:</strong>
                        </td>
                            <td colSpan="3">
                            {props.text}
                            <br/>
                            {props.text}
                        </td>
                    </tr>
                </Collapse>
            </>
};

export default UserRow;
