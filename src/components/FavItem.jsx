
const FavItem = ({ item, removeFromFavorites }) => {
    const { image, title, currentBidPrice, bidsCount, id } = item;

    return (
        <div className="bg-white flex mt-5 items-center justify-between">
            <div className="flex items-center space-x-4">
                <img
                    src={image}
                    className="w-24 h-20 object-cover"
                />
                <div className="p-4 flex flex-col justify-between text-lg font-normal text-[#0E2954]">
                    <h3>{title}</h3>
                    <div className='space-x-14'>
                        <span>${currentBidPrice}</span>
                        <span>Bids: {bidsCount}</span>
                    </div>
                </div>
            </div>
            <button
                onClick={() => removeFromFavorites(id)}
            >
                <i className="ri-close-large-line font-bold pr-4 cursor-pointer"></i>
            </button>
        </div>
    );
};

export default FavItem;