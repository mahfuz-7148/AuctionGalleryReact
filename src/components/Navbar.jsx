import logo from '../assets/AuctionGallery.png';

const Navbar = () => {
    return (
        <div className="max-w-screen-2xl mx-auto navbar poppins">
            <div className="navbar-start">
                <img className="w-48 cursor-pointer" src={logo} alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-normal text-xl">
                    <li><a>Home</a></li>
                    <li><a>Auctions</a></li>
                    <li><a>Categories</a></li>
                    <li><a>How to works</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                <div className="flex-none space-x-4">
                    <button className="btn btn-ghost btn-circle hover:bg-transparent">
                        <div className="indicator">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                            </svg>
                            <span className="badge badge-xs badge-primary indicator-item mr-5">9</span>
                        </div>
                    </button>

                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle w-14 avatar">
                            <div className="rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                        </div>
                    </div>
                </div>

        </div>
    );
};

export default Navbar;