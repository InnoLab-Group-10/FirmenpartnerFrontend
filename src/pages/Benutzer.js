import React from 'react';
import CollapsibleTable from '../components/tables/Collapsible-Table.js';
import SiteTitle from '../components/SiteTitle.js';

const Benutzer = () => {
	return <div>
		<SiteTitle 
			title="Benutzerverwaltung" 
			subtitle="Unterüberschriften zu Benutzern" 
			text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.">
		</SiteTitle>
		<CollapsibleTable></CollapsibleTable>
	</div>;

};

export default Benutzer;
