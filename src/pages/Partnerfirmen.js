import React from 'react';
import SiteTitle from '../components/SiteTitle';
import CollapsibleTable from '../components/tables/Partner-Collapsible-Table';
import {Container} from 'react-bootstrap';
import Alerts from '../components/Alerts';
import CreatePartnerForm from '../components/forms/CreaterPartnerForm';

const Partnerfirmen = () => {
	return <div>
		<SiteTitle 
			title="Partnerfirmen" 
			subtitle="Unterüberschrift zu Partnerfirmen" 
			text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.">
		</SiteTitle>
		<Container>
			<Alerts variant="success" text="Erfolgsnachricht"/>
			<Alerts variant="warning" text="Warnung"/>
			<Alerts variant="danger" text="Fehlschlag"/>
		</Container>
		<CreatePartnerForm></CreatePartnerForm>
		<CollapsibleTable></CollapsibleTable>
	</div>;
};

export default Partnerfirmen;
