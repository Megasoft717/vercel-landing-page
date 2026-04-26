
const SecondSection = () => {
    return (
        <section className="w-full bg-white flex flex-col">
            <div className="p-12 flex flex-col gap-4">
                <div className="flex items-center gap-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="16"
                        width="16"
                        aria-hidden="true"
                        className="text-dove-gray"
                    >
                        <use href="/analytics.svg#analytics"></use>
                    </svg>
                    <h2 className="text-dove-gray text-base">
                        Observability
                    </h2>
                </div>
                <div className="text-dove-gray text-2xl font-medium leading-8 tracking-[-0.96px] text-balance">
                    <strong className="text-cod-gray font-semibold">
                        Route-aware observability
                    </strong>
                    <p>
                        Monitor and analyze the performance <span className="block"></span>{" "}
                        and traffic of your projects.
                    </p>
                </div>
            </div>
            <div className="self-end">
                <img 
                    width="982"
                    height="345"
                    loading="lazy"
                    className="pointer-events-none max-w-full h-auto"
                    src="/analytics-large-light.avif" alt="" 
                />
            </div>
        </section>
    )
}

export default SecondSection