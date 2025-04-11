import { useEffect, useState } from "react";
import BidList from "./BidList.jsx";

const BidLists = ({ addToFavorites, favorites }) => {
    const [bidLists, setBidlists] = useState([]);

    useEffect(() => {
        fetch('fakeData.json')
            .then(res => res.json())
            .then(data => setBidlists(data));
    }, []);

    return (
        <div className='pt-20 w-[70%] mb-20'>
            <h1 className='text-[#0E2954] text-4xl font-semibold'>Active Auctions</h1>
            <p className='text-black text-xl font-normal mt-3'>Discover and bid on extraordinary items</p>
            <div className=" bg-white rounded-3xl mt-10">
                <table>
                    <thead>
                    <tr className="text-xl text-gray-800 font-normal border-b border-slate-400">
                        <th className="p-4 text-left">Items</th>
                        <th className="p-4 text-center">Current Bid</th>
                        <th className="p-4 text-center">Time Left</th>
                        <th className="p-4 text-center">Bid Now</th>
                    </tr>
                    </thead>
                    <tbody>
                    {bidLists.map((bidList, index) => (
                        <BidList
                            key={bidList.id}
                            bidList={bidList}
                            addToFavorites={addToFavorites}
                            favorites={favorites}
                            isLast={index === bidLists.length - 1}
                        />
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default BidLists;