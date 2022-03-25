import React from 'react';
import SiteTitle from '../components/SiteTitle';
import CollapsibleTable from '../components/tables/Students-Collapsible-Table';
import { Container } from 'react-bootstrap';
import Alerts from '../components/Alerts';
import CreateStudentForm from '../components/forms/CreateStudentForm';

const Studierende = () => {
	return (
		<div>
			<SiteTitle
				title='Studierende'
				subtitle='Unterüberschrift zu Studierenden'
				text='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.'
			/>
			<Container>
				<Alerts variant='success' text='Erfolgsnachricht' />
				<Alerts variant='warning' text='Warnung' />
				<Alerts variant='danger' text='Fehlschlag' />
			</Container>
			<CreateStudentForm />
			<CollapsibleTable />
		</div>
	);
};

export default Studierende;
