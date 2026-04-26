import { aiGatewayImageUrl } from "../constants"

const ThirdSection = () => {
  return (
    <section className="w-full flex">
        <div className="p-12 flex flex-col gap-4 flex-1 border-r border-gallery">
            <div className="flex items-center gap-2">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    width="16"
                    aria-hidden="true"
                    className="text-dove-gray"
                >
                    <use href="/golden-gate.svg#golden-gate"></use>
                </svg>
                <h2 className="text-dove-gray text-base">
                    Vercel AI Gateway
                </h2>                
            </div>
            <div className="text-dove-gray text-2xl font-medium leading-8 tracking-[-0.96px] text-balance">
                <strong className="text-cod-gray font-semibold">
                    Deploy AI in seconds.{" "}
                </strong>
                <p className="inline text-balance">
                    Access all major models through a single, unified interface and shared AI credit wallet.
                </p>
            </div>
            <div>
                <img src={aiGatewayImageUrl} alt="" />
            </div>
        </div>
        <div className="p-12 flex flex-col gap-4 flex-1">
            <div className="flex items-center gap-2">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    width="16"
                    aria-hidden="true"
                    className="text-dove-gray"
                >
                    <use href="/clock-rewind.svg#clock-rewind"></use>
                </svg>
                <h2 className="text-dove-gray text-base">
                    Instant Rollbacks
                </h2>                
            </div>
            <div className="text-dove-gray text-2xl font-medium leading-8 tracking-[-0.96px] text-balance">
                <strong className="text-cod-gray font-semibold">
                    Go ahead, deploy on Friday.{" "}
                </strong>
                <p className="inline text-balance">
                    Safely manage releases with automated deployments and instant rollbacks.
                </p>
            </div>
            <div className="flex flex-col">
                <div className="bg-white flex justify-between w-fit gap-6 rollbacksShadow border 
                    border-[#00000014] rounded-xl p-3">
                    <div className="flex flex-col gap-1">
                        <div className="flex justify-between">
                            <span className="text-sm text-dove-gray leading-5">
                                vercel-site/
                                <strong className="text-dove-gray">jvjb4ynna</strong>
                            </span>
                            <span className="text-sm text-dove-gray leading-4">
                                1d ago
                            </span>
                        </div>
                        <div className="flex items-center gap-2">
                            <img src="/view.svg" alt="" />
                            <span className="text-cod-gray text-[13px] leading-3.5">
                                ba5f55f
                            </span>
                            <span className="text-cod-gray text-sm leading-5">
                                Update bento box design
                            </span>
                        </div>
                    </div>
                    <div className="flex items-center relative">
                        <img src="/ring-blue.svg" alt="" />
                        <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            90
                        </p>
                    </div>
                </div>
                <div className="relative flex justify-center mt-2">
                    <img src="/curve-line.svg" alt="" />
                    <div className="bg-white w-7.5 h-7.5 rounded-full lineShadow absolute top-1/2 left-1/2 center flex justify-center items-center">
                        <img src="/history-icon.svg" alt="" />
                    </div>
                </div>
                <div className="bg-white flex justify-between w-fit gap-6 rollbacksShadow border border-dotted
                    border-[#00000014] rounded-xl p-3 self-end">
                    <div className="flex flex-col gap-1">
                        <div className="flex justify-between">
                            <span className="text-sm text-dove-gray leading-5">
                                vercel-site/
                                <strong className="text-dove-gray">gigj178pv</strong>
                            </span>
                            <span className="text-sm text-dove-gray leading-4">
                                10m ago
                            </span>
                        </div>
                        <div className="flex items-center gap-2">
                            <img src="/view.svg" alt="" />
                            <span className="text-cod-gray text-[13px] leading-3.5">
                                bx012mm
                            </span>
                            <span className="text-cod-gray text-sm leading-5">
                                Fix ESLint error on query
                            </span>
                        </div>
                    </div>
                    <div className="flex items-center relative">
                        <img src="/ring-red.svg" alt="" />
                        <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            55
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ThirdSection