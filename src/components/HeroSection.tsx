
const HeroSection = () => {
    return (
        <div className="max-w-270 relative flex flex-col justify-center mt-8 z-999">
            <div className="flex flex-col pt-36 gap-8 border-t border-r border-l border-gallery z-2000">
                <h1 className="text-5xl tracking-[-2.4px] font-semibold text-cod-gray text-center whitespace-nowrap">
                    Build and deploy on the AI Cloud.
                </h1>
                <p className="text-center text-dove-gray text-[20px] text-balance">
                    Vercel provides the developer tools and cloud infrastructure to build, scale, and secure a faster, more personalized web.
                </p>

                <div className="flex gap-4 justify-center">
                    <button className="flex items-center rounded-[100px] bg-cod-gray text-white text-base 
                        font-medium gap-1.5 py-3 px-4 cursor-pointer border border-transparent 
                         hover:bg-[#383838] hover:border-gallery">
                        <img src="./vercel-white.svg" alt="" />
                        Start Deploying
                    </button>
                    <button className="flex items-center rounded-[100px] bg-white text-cod-gray text-base 
                        font-medium gap-1.5 py-3 px-[2.9rem] cursor-pointer border border-transparent 
                        hover:bg-[#f2f2f2] hover:border-gallery">
                        Get a Demo
                    </button>
                </div>
            </div>

            <div className="grid w-full h-87.5 heroGradient">
                <div className="triangleRainbow"></div>
            </div>
            <div className="absolute inset-0 bottom-64">
                <img src="./vercel-logo.svg" alt="" className="h-full w-full" />
            </div>

            <div className="h-67.5 flex justify-center items-center border border-gallery">
                <div className="flex h-full items-center justify-center flex-col tracking-[-1.28px] 
                                text-[32px] font-semibold">
                    <span className="flex items-center gap-2">
                        Develop with your favorite tools <img src="./arrow-right.svg" alt="" />
                    </span>
                    <div className="flex gap-2">
                        <span className="flex items-center gap-2">Launch globally, instantly <img src="./globe-icon.svg" alt="" /></span>
                        <span className="flex items-center gap-2">
                            Keep pushing <img src="./fork.svg" alt="" />
                        </span>
                    </div>
                </div>
            </div>
            <div className="h-4 border-l border-r border-gallery"></div>
        </div>
    )
}

export default HeroSection