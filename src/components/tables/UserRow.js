import React from 'react';
import {Button} from 'react-bootstrap'
import { BiTrash, BiPencil, BiReset } from 'react-icons/bi';

const UserRow = props => {
	const user = props.entry;

	return (
		<>
			<tr>
				<td>{user.username}</td>
				<td>{user.roles.toString()}</td>
				<td>{user.email}</td>
				<td className="table-icon-column-three-icons">
					<Button variant="danger" className="table-icons table-delete-icon">
						<BiTrash/>
					</Button>
					<Button variant="secondary" className="table-icons">
						<BiReset/>
					</Button>
					<Button variant="secondary" className="table-icons">
						<BiPencil/>
					</Button>
				</td>
			</tr>
		</>
	);
};

export default UserRow;
