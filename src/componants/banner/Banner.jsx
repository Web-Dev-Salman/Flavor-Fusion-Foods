
const Banner = () => {
    return (
        <div className="container mx-auto">
            <div className="hero h-auto md:h-[700px] bg-[url('/hero-banner.png')] rounded-3xl">
                <div className="hero-content text-center ">
                    <div className="w-full md:w-[933px]">
                        <h1 className="text-2xl md:text-5xl font-bold text-white">Discover an exceptional cooking class tailored for you!</h1>
                        <p className="py-6 text-white">Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.</p>
                        <div className="flex justify-center gap-3">
                            <button className="btn bg-[#02b76c] border-none">Explore Now</button>
                            <button className="btn  btn-outline text-white">Our Feedback</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;