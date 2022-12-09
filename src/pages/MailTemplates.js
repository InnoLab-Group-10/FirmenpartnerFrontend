import React from 'react';
import SiteTitle from '../components/SiteTitle';
import { Container } from 'react-bootstrap';
import MailTemplateDesignForm from '../components/forms/MailTemplateDesignForm';
import MailTemplateTable from '../components/tables/MailTemplate-Table';
/*import Alerts from '../components/Alerts.js';*/

const MailTemplates = () => {
	return (
		<div>
			<SiteTitle
				title='Mail-Vorlagen'
				subtitle='E-Mail-Vorlagen Verwaltung'
				text='Hier können Sie Mailingvorlagen erstellen, bearbeiten und löschen.'
            />
			<Container>
				{/* <Alerts variant='success' text='Erfolgsnachricht' />
				<Alerts variant='warning' text='Warnung' />
				<Alerts variant='danger' text='Fehlschlag' /> */}
			</Container>
            <MailTemplateDesignForm/>
            <MailTemplateTable/>
		</div>
	);
};

export default MailTemplates;
