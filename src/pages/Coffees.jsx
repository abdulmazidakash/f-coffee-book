import { useLoaderData } from "react-router-dom";
import Card from "../components/Card";
import { useState } from "react";
import sortBy from "sort-by";
import { Helmet } from "react-helmet";


const Coffees = () => {
	const data = useLoaderData();
	const [coffees, setCoffees] = useState(data);

	const handleSort = sortBy =>{
		if(sortBy == 'popularity'){
			const sorted = [...data].sort((a, b) => b.popularity - a.popularity);
			setCoffees(sorted);
		}
		else if(sortBy == 'rating'){
			const sortRating = [...data].sort((a, b) => b.rating - a.rating);
			setCoffees(sortRating);
		}
	}

	return (
		<>
		<div className="flex justify-between items-center">
			<Helmet>
				<title>Coffees | Coffee Book</title>
			</Helmet>
			<div>
				<h1 className="text-3xl font-thin">Sort Coffee&apos;s by Popularity & Rating-&gt;</h1>
			</div>
			<div className="space-x-4">
				<button onClick={() => handleSort('popularity')} className="btn btn-warning">Sort By Popularity</button>
				<button onClick={() => handleSort('rating')} className="btn btn-warning">Sort By Rating</button>
			</div>
		</div>
		
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
			{
				coffees.map(coffee => <Card key={coffee.id} coffee={coffee} />)
			}
		</div>
		</>
	);
};

export default Coffees;