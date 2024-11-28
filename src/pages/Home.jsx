import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import Heading from "../components/Heading";
import Categories from "../components/Categories";
import { Helmet } from "react-helmet";


const Home = () => {

	const categories = useLoaderData();
	// console.log(categories);


	return (
		<div>
			<Helmet>
				<title>Home | Coffee Book</title>
			</Helmet>
			{/* Banner  */}
			<Banner></Banner>
			{/* Heading  */}
			<Heading title='Browse coffees by category' subtitle='Choose your desired coffee category to browse through specific coffees that fit in your taste' />
			{/* Coffees category tab section  */}

			<Categories categories={categories} />
			<Outlet />

			{/* Dynamic nested components  */}
		</div>
	);
};

export default Home;