import React from 'react';

const UserRow = props => {
	const user = props.entry;

	return (
		<>
			<tr>
				<td>{user.username}</td>
				<td>{user.roles.toString()}</td>
				<td>{user.email}</td>
				<td>BUTTON</td>
			</tr>
		</>
	);
};

export default UserRow;
