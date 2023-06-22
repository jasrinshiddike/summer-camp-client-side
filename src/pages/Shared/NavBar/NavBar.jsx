import { Link } from 'react-router-dom';
import logo from '../../../assets/logo5.jpg'
import { useContext, useState } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import { FaShoppingCart, FaUserCircle } from 'react-icons/fa';
import useSelectedClassCart from '../../../hooks/useSelectedClassCart';
const NavBar = () => {
    const { user, logOut, auth } = useContext(AuthContext);
    const [selectedCart] = useSelectedClassCart();
    const [theme, setTheme] = useState('light');
    const changeTheme = (newTheme) => {
        setTheme(newTheme);
        document.documentElement.dataset.theme = newTheme;
    };
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(err => console.log(err))
    }
    const navOptions =
        <>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/instructors">Instructors</Link></li>
            <li><Link to="/classes">Classes</Link></li>
            <li><Link to='/dashboard/myselectedclass' className='btn btn-ghost gap-2'>
                Dashboard
                <span className='badge badge-primary'><FaShoppingCart />+{selectedCart?.length || 0}</span>
            </Link></li>

            {
                user ?
                    <>
                        <span>{user?.displayName}</span>
                        <button onClick={handleLogOut} className="btn btn-ghost">Logout</button>
                    </> :
                    <>
                        <li><Link to="/login">Login</Link></li>
                    </>
            }
            {user &&
                <li className="text-3xl"><p title={auth?.currentUser?.displayName} ><FaUserCircle /></p></li>
            }
            <li className='ml-6 -mt-4 p-2'>
                <button onClick={() => changeTheme('light')}>L</button>
            </li>
            <li className='ml-6 -mt-4 p-2'>
                <button onClick={() => changeTheme('dark')}>D</button>
            </li>
        </>
    return (
        <div className='mb-24'>
            <div className="navbar fixed  top-0 z-20 bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown mx-auto">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box ">
                            {navOptions}
                        </ul>
                    </div>
                    <Link to="/" className="btn btn-ghost normal-case text-xl">
                        <img src={logo} className="w-12 h-12 rounded-full" alt="" />
                        <h3 className="font-bold font-sans hover:font-serif">The Creativity Center</h3>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">

                </div>
            </div>
        </div>
    );
};

export default NavBar;