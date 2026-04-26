import { companies, products, resources, socials } from "../constants"

const Footer = () => {
  return (
    <footer className="max-w-270 w-full grid grid-cols-[repeat(4,1fr)_80px] pr-8 pl-8 pb-22.5">
        <div>
            <h2 className="text-sm font-medium text-cod-gray mt-3 mb-3">Products</h2>
            <ul>
                {products.map((product) => (
                    <li key={product} className="text-dove-gray leading-5 pt-1.5 pb-1.5">
                        {product}
                    </li>
                ))}
            </ul>
        </div>
        <div>
            <h2 className="text-sm font-medium text-cod-gray mt-3 mb-3">Resources</h2>
            <ul>
                {resources.map((resource) => (
                    <li key={resource} className="text-dove-gray leading-5 pt-1.5 pb-1.5">
                        {resource}
                    </li>
                ))}
            </ul>
        </div>
        <div>
            <h2 className="text-sm font-medium text-cod-gray mt-3 mb-3">Company</h2>
            <ul>
                {companies.map((company) => (
                    <li key={company} className="text-dove-gray leading-5 pt-1.5 pb-1.5">
                        {company}
                    </li>
                ))}
            </ul>
        </div>
        <div>
            <h2 className="text-sm font-medium text-cod-gray mt-3 mb-3">Social</h2>
            <ul>
                {socials.map((social) => (
                    <li key={social.label} className="text-dove-gray leading-5 pt-1.5 pb-1.5 
                        flex items-center gap-2">
                        <img src={social.icon} alt="" />
                        {social.label}
                    </li>
                ))}
            </ul>
        </div>
        <div className="justify-self-end cursor-pointer">
            <img src="/vercel.svg" alt="" />
        </div>
        <div className="flex gap-1.5 items-center text-sm mt-8">
                <span className="bg-[#0070f3] rounded-full w-2 h-2 inline-block"></span>
                <p className="text-[#0070f3]">All systems normal</p>
        </div>
    </footer>
  )
}

export default Footer