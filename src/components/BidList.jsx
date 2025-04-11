
import 'remixicon/fonts/remixicon.css';

const BidList = ({ bidList, addToFavorites, favorites }) => {
    const { image, title, currentBidPrice, timeLeft, id } = bidList;
    const isFavorited = favorites.some(fav => fav.id === id);

    return (
        <tr className="text-lg font-medium text-[#0E2954] border-b border-[#E5E7EB]">
            <td className="p-4 w-1/2">
                <div className="flex items-center space-x-4">
                    <img
                        src={image}
                        className="w-24 h-20 object-cover rounded"
                    />
                    <span>{title}</span>
                </div>
            </td>
            <td className="p-4  text-center">${currentBidPrice}</td>
            <td className="p-4  text-center">{timeLeft}</td>
            <td className="flex justify-center items-center p-10">
                <button
                    className={`${
                        isFavorited
                            ? 'cursor-not-allowed'
                            : 'cursor-pointer text-red-500'
                    }`}
                    onClick={() => {
                        if (!isFavorited) {
                            addToFavorites(bidList);
                        }
                    }}
                    disabled={isFavorited}
                >
                    {!isFavorited ? (
                        <i className="ri-heart-3-line text-3xl text-black"></i>
                    ) : (
                        <i className="ri-heart-3-fill text-3xl text-red-600"></i>
                    )}
                </button>
            </td>
        </tr>
    );
};

export default BidList;