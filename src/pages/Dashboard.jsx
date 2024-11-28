import { useEffect, useState } from 'react';
import Heading from '../components/Heading'
import { getAllFavorites, removeFavorite } from '../utils';
import Card from '../components/Card';
import { Helmet } from 'react-helmet';

const Dashboard = () => {

	const [coffees, setCoffees] = useState([]);
	useEffect(()=> {
		const favorites = getAllFavorites();
		setCoffees(favorites);
	}, [])

	const handleRemove = id =>{
		removeFavorite(id)
		const favorites = getAllFavorites();
		setCoffees(favorites);
	}
	return (
		<div>
			<Helmet>
				<title>Dashboard | Coffee Book</title>
			</Helmet>
			<Heading title='Welcome to Dashboard' subtitle='Manage coffee that you have previously added as favorites. You can view or remove them from here.' />

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
			{
				coffees.map(coffee => <Card handleRemove={handleRemove} key={coffee.id} coffee={coffee} />)
			}
		</div>
		</div>
	);
};

export default Dashboard;