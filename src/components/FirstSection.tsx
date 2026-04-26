import TriangleIcon from "../Icons/TriangleIcon"

const FirstSection = () => {
    return (
        <section className="w-full flex">
            <div className="flex flex-col gap-12 flex-1 p-12 border-r border-gallery">
                <div className="flex gap-4 flex-col self-start">
                    <div className="flex items-center gap-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="16"
                            width="16"
                            aria-hidden="true"
                            className="text-dove-gray"
                        >
                            <use href="/terminal.svg#terminal"></use>
                        </svg>
                        <h2 className="text-dove-gray text-base">Git-connected Deploys</h2>
                    </div>
                    <div className="text-dove-gray text-2xl font-medium leading-8 tracking-[-0.96px]">
                        <strong className="text-cod-gray font-semibold">
                            From localhost to https, in seconds.
                        </strong>
                        <p>Deploy from Git or your CLI.</p>
                    </div>
                </div>
                <div className="w-full select-none flex flex-col">
                    <div className="border border-[#00000014] rounded-xl p-3 max-w-85">
                        <div className="flex gap-1.5 mb-3">
                            <div className="bg-[#00000014] h-2 w-2 rounded-full"></div>
                            <div className="bg-[#00000014] h-2 w-2 rounded-full"></div>
                            <div className="bg-[#00000014] h-2 w-2 rounded-full"></div>
                        </div>
                        <div className="flex flex-col gap-1">
                            <div className="text-cod-gray text-[0.75rem] leading-4">
                                <span>~ vercel-site/ </span>
                                git push
                            </div>
                            <div className="text-cod-gray text-[0.75rem] leading-4">
                                Enumerating objects: 1, done.
                            </div>
                            <div className="text-cod-gray text-[0.75rem] leading-4 codeline">
                                Counting objects: 100% (1/1), done.
                            </div>
                            <div className="text-cod-gray text-[0.75rem] leading-4 codeline">
                                Writing objects: 100% (1/1), 214 bytes | 214.00 KiB/s, done.
                            </div>
                            <div className="text-cod-gray text-[0.75rem] leading-4 codeline">
                                Total 1 (delta 0), reused 0 (delta 0), pack-reused 0
                            </div>
                            <div className="text-cod-gray text-[0.75rem] leading-4 codeline">
                                To github.com:vercel/site.git
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl h-45 -mt-7.25 pt-2 overflow-hidden p-3 self-end z-10">
                        <div className="flex items-center mb-3 relative">
                            <div className="flex gap-1 5">
                                <div className="bg-[#fc0135] h-2 w-2 rounded-full"></div>
                                <div className="bg-[#48aeff] h-2 w-2 rounded-full"></div>
                                <div className="bg-[#00e3c4] h-2 w-2 rounded-full"></div>
                            </div>
                            <div className="flex items-center gap-1 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                <img src="/lock.svg" alt="" />
                                <div className="text-[#666666] text-[0.75rem]">vercel.com</div>
                            </div>
                        </div>
                        <div className="relative">
                            <span className="textShadow absolute top-[16%] left-[5%] font-semibold text-4xl 
                                leading-[0.83] tracking-[-0.075em] text-white">
                                What will you ship?
                            </span>
                            <TriangleIcon />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex-1 p-12 flex flex-col gap-6">
                <div className="flex gap-4 flex-col self-start">
                    <div className="flex items-center gap-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="16"
                            width="16"
                            aria-hidden="true"
                            className="text-dove-gray"
                        >
                            <use href="/message.svg#message"></use>
                        </svg>
                        <h2 className="text-dove-gray text-base">
                            Collaborative Pre-production
                        </h2>
                    </div>
                    <div className="text-dove-gray text-2xl font-medium leading-8 tracking-[-0.96px] text-balance">
                        <strong className="text-cod-gray font-semibold">
                            Every deploy is remarkable.{" "}
                        </strong>
                        <p className="inline">
                            Chat with your team on real, production-grade UI, not just designs.
                        </p>
                    </div>
                </div>
                <div className="w-fit">
                    <div className="codeShadow leading-5 text-sm p-3 rounded-xl bg-clip-padding text-cod-gray 
                        border border-[#00000014] bg-white">
                        Swapped out the{""}
                        <code className="text-[13px] rounded-sm text-dove-gray bg-gallery pl-1 pr-1 
                            inline-block">
                            button
                        </code>
                        for <span className="block"> some variants we needed.</span>
                    </div>
                </div>
                <div className="w-fit ml-auto relative">
                    <div className="codeShadow leading-5 text-sm p-3 rounded-xl bg-clip-padding text-cod-gray 
                        border border-[#00000014] bg-white">
                        <div className="absolute -left-9 top-0">
                            <div className="cursorDropShadow">
                                <img src="/cursor-blue.svg" alt="" />
                            </div>
                            <div className="bg-[#48aeff] h-5 text-[#fafafa] rounded-md items-center pr-1 
                                pl-1 text-[11px] font-medium leading-4 flex absolute top-4 right-4">
                                Pranathi
                            </div>
                        </div>
                        How about this instead?
                    </div>
                </div>
                <div className="w-fit mr-auto relative">
                    <div className="codeShadow leading-5 text-sm p-3 rounded-xl bg-clip-padding text-cod-gray 
                        border border-[#00000014] bg-white">
                        I like it. Does this work with <span className="block"></span> the brand tweaks{""}
                        <strong className="text-cod-gray font-semibold"> @mamuso</strong>
                        <div className="absolute -right-12 bottom-4">
                            <div className="cursorDropShadow">
                                <img src="/cursor-red.svg" alt="" />
                            </div>
                            <div className="bg-[#fc0135] h-5 text-[#fafafa] rounded-md items-center pr-1 
                                pl-1 text-[11px] font-medium leading-4 flex absolute top-4 left-4">
                                Rauno
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-fit ml-auto relative">
                    <div className="codeShadow leading-5 text-sm p-3 rounded-xl bg-clip-padding text-cod-gray 
                        border border-[#00000014] bg-white">
                            This looks great!
                    </div>
                    <div className="absolute -right-7 -bottom-1">
                        <div className="cursorDropShadow">
                            <img src="/cursor-aqua.svg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FirstSection