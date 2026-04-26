
const FifthSection = () => {
  return (
    <section className="flex border-t border-gallery text-balance">
        <div className="p-12 flex gap-6 flex-col flex-2 border-r border-gallery border-dotted">
            <p className="tracking-[-0.96px] text-2xl text-balance text-dove-gray font-medium leading-normal">
                <b className="text-cod-gray font-semibold">
                    Ready to deploy? 
                </b>
                {" "}Start building with a free account. Speak to an expert for your{" "}
                <i className="text-[#005ff2] font-semibold not-italic">Pro</i> or{" "}
                <u className="text-[#7d00cc] font-semibold no-underline">Enterprise</u> needs.
            </p>
            <div className="flex gap-4">
                <button className="text-sm cursor-pointer lineShadow font-medium bg-cod-gray text-white 
                    rounded-[100px] pt-2.5 pb-2.5 pl-3.5 pr-3.5">
                        Start Deploying
                </button>
                <button className="text-sm cursor-pointer lineShadow font-medium bg-white rounded-[100px] 
                    pt-2.5 pb-2.5 pl-3.5 pr-3.5">Talk to an Expert</button>
            </div>
        </div>
        <div className="flex-1 p-12 flex gap-6 flex-col items-center">
            <p className="text-dove-gray tracking-[-0.32px] text-base font-medium leading-normal">
                <b className="text-cod-gray font-semibold">Explore Vercel Enterprise{" "}</b>
                with an interactive product tour, trial, or a personalized demo.
            </p>
            <button className="text-sm cursor-pointer lineShadow font-medium bg-white rounded-[100px] 
                    pt-2.5 pb-2.5 pl-3.5 pr-3.5 self-start">Explore Enterprise</button>
        </div>
    </section>
  )
}

export default FifthSection