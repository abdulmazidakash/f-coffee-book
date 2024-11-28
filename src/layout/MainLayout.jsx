import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const MainLayout = () => {
	return (
		<div>
			{/* Navbar  */}
			<div>
				<Navbar />
			</div>
			{/* Dynamic Section  */}
			<div className="min-h-[calc(100vh-212px)] py-12 container mx-auto">
				<Outlet />
			</div>
			{/* Footer  */}
			<div>
				<Footer />
			</div>
		</div>
	);
};

export default MainLayout;