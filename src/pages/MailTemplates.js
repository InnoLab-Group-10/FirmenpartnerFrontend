import React from 'react';
import SiteTitle from '../components/SiteTitle';
import MailTemplateDesignForm from '../components/forms/MailTemplateDesignForm';
import MailtemplateTable from '../components/tables/MailtemplateTable';
import NewMailingTemplate from '../components/forms/NewMailingTemplate';

const Mailtemplates = () => {
	return (
		<div>
			<SiteTitle
				title='Mailing-Vorlagen'
				subtitle='E-Mail-Vorlagen Verwaltung'
				text='Hier können Sie Mailingvorlagen erstellen, bearbeiten und löschen.'
			/>
			<MailTemplateDesignForm />
			<NewMailingTemplate />
			<MailtemplateTable />
		</div>
	);
};

export default Mailtemplates;
