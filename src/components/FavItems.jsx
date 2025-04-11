import FavItem from "./FavItem.jsx";

const FavItems = ({ favorites, removeFromFavorites }) => {
    return (
        <div className="w-[30%] p-4 bg-white rounded-3xl mt-[200px]">
            <div className="flex justify-center items-center gap-2 mb-4 border-b border-slate-400">
                <i className="ri-heart-3-line text-4xl text-black mt-1"></i>
                <h2 className="text-[#0E2954] font-medium text-3xl ">Favorite Items</h2>
            </div>

            {favorites.length === 0 ? (
                <div className='mt-10'>
                    <p className="text-gray-900 font-medium mb-2 text-2xl text-center">No favorites yet</p>
                    <p className="text-gray-500 text-lg text-center mt-5">
                        Click the heart icon on any item <br/> to add it to your favorites
                    </p>
                </div>
            ) : (
                <div>
                    {favorites.map((item, index) => (
                        <FavItem
                            key={item.id}
                            item={item}
                            removeFromFavorites={removeFromFavorites}
                            isLast={index === favorites.length - 1}
                        />
                    ))}
                </div>
            )}

            <div className="mt-4 pt-4 border-t border-slate-400 flex justify-between text-2xl font-medium">
                <p className='text-left'>Total bids Amount</p>
                <span>${favorites.reduce((total, item) => total + item.currentBidPrice, 0)}</span>
            </div>
        </div>
    );
};

export default FavItems;


