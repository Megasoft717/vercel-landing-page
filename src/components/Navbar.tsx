import { navbarItems } from "../constants"

const Navbar = () => {
    return (
        <div>
            <div>
                <svg
                    width="90"
                    height="18"
                    viewBox="0 0 76 65"
                    fill="none" xmlns="http://www.w3.org/2000/svg"><path
                        d="M37.5274 0L75.0548 65H0L37.5274 0Z" fill="#000000" /></svg>
                <ul className="flex">
                    {navbarItems.map((item, index) => (
                        <li className="text-dove-gray text-sm py-2 px-3 cursor-pointer transition 
                        duration-200 ease-in" key={index}>
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Navbar