import Navbar from "./components/Navbar.jsx";
import Banner from "./components/Banner.jsx";
import BidLists from "./components/BidLists.jsx";
import {useState} from "react";
import FavItems from "./components/FavItems.jsx";
import Footer from "./components/Footer.jsx";
import { ToastContainer, toast, Zoom } from "react-toastify";

const App = () => {
    const [favorites, setFavorites] = useState([])
    const [, setTotalBids] = useState(0);

    const calculateTotalBids = (favArray) => {
        console.log(favArray)

        let total = 0;
        favArray.forEach(item => {
            total += item.currentBidPrice;
        });
        return total;
    };

    const addToFavorites = addFav => {
        const newFavorites = [...favorites, addFav];
        setFavorites(newFavorites);
        setTotalBids(calculateTotalBids(newFavorites));
        toast.success('Item added to your favorite list!', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Zoom,
        });
    };

    const removeFromFavorites = (id) => {
        const newFavorites = favorites.filter(item => item.id !== id);
        setFavorites(newFavorites);
        setTotalBids(calculateTotalBids(newFavorites));
        toast.warn('Item removed to your favorite list!', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Zoom,
        });
    };

    return (
        <div>
            <Navbar />
            <Banner />
            <div className='bg-[#E5E7EB] sora'>
                <div className='max-w-screen-2xl mx-auto flex gap-10 items-start'>
                    <BidLists addToFavorites={addToFavorites} favorites={favorites} />
                    <FavItems
                        favorites={favorites}
                        removeFromFavorites={removeFromFavorites}
                    />
                </div>
            </div>
            <Footer />
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                transition={Zoom}
            />
        </div>
    );
};

export default App;