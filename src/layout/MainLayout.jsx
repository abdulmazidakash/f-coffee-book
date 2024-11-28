import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Toaster } from "react-hot-toast";


const MainLayout = () => {
	return (
		<div>
			<Toaster/>
			{/* Navbar  */}
			<div className="h-16">
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