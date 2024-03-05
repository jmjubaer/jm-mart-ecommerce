import { Outlet } from "react-router-dom";
import Navbar from "../pages/shere/Navbar";
import Footer from "../pages/shere/Footer";

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="min-h-[calc(100vh-150px)]">
                <Outlet/>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;