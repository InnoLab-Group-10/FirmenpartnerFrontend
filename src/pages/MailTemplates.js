import React from 'react';
import SiteTitle from '../components/SiteTitle';
import MailTemplateDesignForm from '../components/forms/MailTemplateDesignForm';
import MailTemplateTable from '../components/tables/MailTemplate-Table';
import NewMailingTemplate from '../components/forms/NewMailingTemplate';

const MailTemplates = () => {
	return (
		<div>
			<SiteTitle
				title='Mailing-Vorlagen'
				subtitle='E-Mail-Vorlagen Verwaltung'
				text='Hier können Sie Mailingvorlagen erstellen, bearbeiten und löschen.'
			/>
			<MailTemplateDesignForm />
			<NewMailingTemplate />
			<MailTemplateTable />
		</div>
	);
};

export default MailTemplates;
