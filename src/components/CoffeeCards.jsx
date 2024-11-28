import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import Card from "./Card";
import { useEffect, useState } from "react";


const CoffeeCards = () => {

	const data = useLoaderData();
	const {category} = useParams();
	const [coffees, setCoffees] = useState([]);
	const navigate = useNavigate();

	// console.log(category);
	// console.log(data);

	useEffect(()=> {
		if(category){
			const filteredByCategory = [...data].filter(coffee => coffee.category === category);
			setCoffees(filteredByCategory);
		}
		else{
			setCoffees(data.slice(0,6));
		}
	}, [category, data])

	return (
		<div>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
			{
				coffees.map(coffee => <Card key={coffee.id} coffee={coffee} />)
			}
			</div>
			<button onClick={()=> navigate('/coffees')} className="btn btn-warning">View All</button>
		</div>
	
	);
};

export default CoffeeCards;