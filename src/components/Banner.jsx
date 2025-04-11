import banner from '../../src/assets/Banner-min.jpg'


const Banner = () => {
    return (
        <div className="hero min-h-screen flex pl-36 pb-14 sora"
            style={{
                backgroundImage: `url(${banner})`,
            }}>
            <div className="hero-content text-neutral-content text-start ">
                <div className="">
                    <h1 className="mb-5 text-5xl font-bold">Bid on Unique Items <br/> from Around the World</h1>
                    <p className="mb-5 text-2xl text-white font-light">
                        Discover rare collectibles, luxury goods, and <br/> vintage treasures in our curated auctions
                    </p>
                    <button className="btn btn-primary text-black bg-white rounded-2xl text-xl p-5">Explore Auctions</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;