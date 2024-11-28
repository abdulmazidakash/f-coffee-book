import Banner from "../components/Banner";
import Heading from "../components/Heading";


const Home = () => {
	return (
		<div>
			{/* Banner  */}
			<Banner></Banner>
			{/* Heading  */}
			<Heading title='Browse coffees by category' subtitle='Choose your desired coffee category to browse through specific coffees that fit in your taste' />
			{/* Coffees category tab section  */}
			{/* Dynamic nested components  */}
		</div>
	);
};

export default Home;