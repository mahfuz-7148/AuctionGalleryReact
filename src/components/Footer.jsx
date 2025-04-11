import logo from '../assets/AuctionGallery.png';

const Footer = () => {
    return (
        <div>
            <footer className="flex flex-col justify-center items-center text-center space-y-4 bg-white rounded p-24">
                <img src={logo} />

                <div className="flex gap-2 text-2xl text-black sora">
                    <h1>Bid.</h1>
                    <h1>Win.</h1>
                    <h1>Own.</h1>
                </div>

                <nav className="flex gap-6 text-xl poppins">
                    <a className="link link-hover">Home</a>
                    <a className="link link-hover">Auction</a>
                    <a className="link link-hover">Categories</a>
                    <a className="link link-hover">How To Works</a>
                </nav>

                <div>
                    <p className="text-xl sora">
                        © {new Date().getFullYear()} AuctionHub. All right reserved
                    </p>
                </div>

            </footer>
        </div>
    );
};

export default Footer;