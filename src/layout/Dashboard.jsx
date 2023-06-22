import { NavLink, Outlet } from "react-router-dom";
import { FaBook, FaBookReader, FaHome, FaShoppingCart, FaUserFriends, FaUsers, FaWallet } from "react-icons/fa";
import useSelectedClassCart from "../hooks/useSelectedClassCart";
import useAdmin from "../hooks/useAdmin";
import useInstructor from "../hooks/useInstructor";
import NavBar from "../pages/Shared/NavBar/NavBar";


const Dashboard = () => {
    const [selectedCart] = useSelectedClassCart();
    //TODO: load data from the server to have dynamic isAdmin based on data
    //const isAdmin = true;
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center -ml-96">
                {/* Page content here */}
                <div className="w-96">
                    <NavBar />
                </div>
                <Outlet />
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side bg-[#336699] ">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full text-base-content mt-20 text-semibold" >
                    {
                        isAdmin ? <>
                            {/* Sidebar content here */}
                            <li><NavLink to="/dashboard/allusers"><FaUsers />Manage Users</NavLink></li>
                            <li><NavLink to="/dashboard/manageclass"><FaUsers />Manage Classes</NavLink></li>
                            <div className="divider border-b-2 shadow-current"></div>
                        </> : isInstructor ?
                        <>
                             <li><NavLink to="/dashboard/additem"><FaShoppingCart />Add a Class</NavLink></li>
                                <li><NavLink to="/dashboard/myclasses"><FaBookReader />My Classes </NavLink></li>
                                <div className="divider border-b-2 shadow-current"></div>
                        </>
                            :
                            <>
                                {/* Sidebar content here */}
                                <li><NavLink to="/dashboard/myselectedclass"><FaShoppingCart />My Selected Class<span className='badge badge-secondary'>+{selectedCart?.length || 0}</span></NavLink>

                                </li>
                                <li><NavLink to="/dashboard/myenrollclass"><FaBookReader />My Enrolled Classes </NavLink></li>
                                <li><NavLink to="/dashboard/mypaymenthistory"><FaWallet />My Payment History</NavLink></li>
                                <div className="divider border-b-2 shadow-current"></div>
                            </>
                    }

                </ul>

            </div>
        </div>
    );
};

export default Dashboard;