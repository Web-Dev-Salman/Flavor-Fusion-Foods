
const Banner = () => {
    return (
        <div className="container mx-auto">
            <div className="hero h-auto md:h-[700px] bg-[url('/hero-banner.png')] rounded-3xl">
                <div className="hero-content text-center ">
                    <div className="w-full md:w-[933px]">
                        <h1 className="text-2xl md:text-5xl font-bold text-white">Discover an exceptional cooking class tailored for you!</h1>
                        <p className="py-6 text-white"> Discover a world of flavors, aromas, and delectable delights as you embark on a gastronomic journey with us. From mouthwatering recipes crafted with love to expert cooking tips and tricks, our kitchen is your ultimate destination for culinary inspiration.</p>
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