import React from 'react';
import SiteTitle from '../components/SiteTitle';
import Documents from '../components/tables/Documents';

const Dokumente = () => {
	return <div>
		<SiteTitle 
			title="Dokumente" 
			subtitle="Unterüberschrift zu Dokumenten" 
			text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.">
		</SiteTitle>
		<Documents/>
	</div>;
};

export default Dokumente;
