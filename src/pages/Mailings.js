import React from 'react';
import SiteTitle from '../components/SiteTitle';
import { Container } from 'react-bootstrap';
import MailinglistTable from '../components/tables/MailinglistTable';
import CreateNewMailingListForm from '../components/forms/CreateNewMailingListForm';
/*import Alerts from '../components/Alerts.js';*/

const Mailings = () => {
	return (
		<div>
			<SiteTitle
				title='Mailinglisten'
				subtitle='Empfänger-Verwaltung'
				text='Hier können Sie Mailinglisten erstellen, bearbeiten und löschen.'
			/>
			<Container>
				{/* <Alerts variant='success' text='Erfolgsnachricht' />
				<Alerts variant='warning' text='Warnung' />
				<Alerts variant='danger' text='Fehlschlag' /> */}
			</Container>
			<CreateNewMailingListForm />
			<MailinglistTable />
		</div>
	);
};

export default Mailings;
