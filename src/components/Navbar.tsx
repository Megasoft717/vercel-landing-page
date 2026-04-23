import { navbarItems } from "../constants"

const Navbar = () => {
    return (
        <header className="flex justify-between px-9 pt-4 items-center w-full">
            <div className="flex gap-8">
                <div className="pt-2">
                    <svg
                        width="90"
                        height="18"
                        viewBox="0 0 76 65"
                        fill="none" xmlns="http://www.w3.org/2000/svg"><path
                            d="M37.5274 0L75.0548 65H0L37.5274 0Z" fill="#000000" /></svg>
                </div>
                <ul className="flex">
                    {navbarItems.map((item, index) => (
                        <li className="text-dove-gray text-sm py-2 px-3 cursor-pointer transition 
                        duration-200 ease-in hover:text-cod-gray hover:bg-gallery 
                        rounded-[9999px]" key={index}>
                            {item}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="flex gap-3">
                <button className="py-1.5 px-3 bg-white text-sm font-medium rounded-md border 
                border-[#00000014] cursor-pointer" >
                    Log in
                </button>
                <button className="py-1.5 px-3 bg-white text-sm font-medium rounded-md border 
                border-[#00000014] cursor-pointer" >
                    Contact
                </button>
                <button className="py-1.5 px-3 bg-cod-gray text-white text-sm font-medium rounded-md border 
                border-[#00000014] cursor-pointer" >
                    Sign Up
                </button>
            </div>
        </header>
    )
}

export default Navbar