import React, {useState} from 'react';
import {Collapse} from 'react-bootstrap';

const PartnerRow = (props) => {
    const [open, setOpen] = useState(false);

    let activity = "";

    switch(props.activity){
        case "1":
            activity = "active-row";
            break;
        case "2":
            activity = "pending-row";
            break;
        case "0":
            activity = "deactivated-row";
            break; 
        default:
            activity = "";
            break;       
    }

	return <>
                <tr className={activity}
                    onClick={() => setOpen(!open)}
                    aria-controls="example-collapse-text"
                    aria-expanded={open}
                >
                    <td>{props.name}</td>
                    <td>{props.maincontactname}</td>
                    <td>{props.email}</td>
                    <td>{props.phone}</td>
                </tr>
                <Collapse in={open}>
                    <tr id="example-collapse-text">
                        <td colSpan="1">
                            <strong>Anschrift:</strong>
                            <br/>
                            <strong>Studierende:</strong>
                        </td>
                        <td colSpan="3">
                            {props.adress}, {props.zipcode}, {props.city}
                            <br/>
                            {props.studentsPerYear} pro Jahr
                        </td>
                    </tr>
                </Collapse>
            </>
};

export default PartnerRow;
