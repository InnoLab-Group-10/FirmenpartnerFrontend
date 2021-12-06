import React from 'react';
import SiteTitle from '../components/SiteTitle';
import CollapsibleTable from '../components/tables/Collapsible-Table';

const Partnerfirmen = () => {
	return <div>
		<SiteTitle 
			title="Partnerfirmen" 
			subtitle="Unterüberschrift zu Partnerfirmen" 
			text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.">
		</SiteTitle>
		<CollapsibleTable></CollapsibleTable>
	</div>;
};

export default Partnerfirmen;
