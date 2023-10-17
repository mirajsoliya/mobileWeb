import { AiFillFacebook, AiFillTwitterSquare, AiFillInstagram } from "react-icons/ai";
import { FaPinterestSquare } from "react-icons/fa";
function sections() {
    return (
        <div className="flex justify-center space-x-28 p-8">

            <div>
                <div>
                    <h1 className="text-red-500 font-bold text-4xl">LOGO</h1>
                </div>
                <div className="flex space-x-4 my-5">
                    <AiFillFacebook className="text-4xl text-red-500" />
                    <AiFillTwitterSquare className="text-4xl text-red-500" />
                    <FaPinterestSquare className="text-4xl text-red-500" />
                    <AiFillInstagram className="text-4xl text-red-500" />
                </div>
            </div>
            <div>
                <div>
                    <h1 className="text-lg font-bold m-3 ">SERVICES</h1>
                </div>
                <div>
                    <h3 className="text-lg m-3">About us</h3>
                    <h3 className="text-lg m-3">Contact us</h3>
                    <h3 className="text-lg m-3">FAQ</h3>
                    <h3 className="text-lg m-3">Blog</h3>
                </div>
            </div>
            <div>
                <div>
                    <h1 className="text-lg font-bold m-3 ">SHOP</h1>
                </div>
                <div>
                    <h3 className="text-lg m-3">New Arrivals</h3>
                    <h3 className="text-lg m-3">Accessories</h3>
                    <h3 className="text-lg m-3">Men</h3>
                    <h3 className="text-lg m-3">Women</h3>
                    <h3 className="text-lg m-3">Shop All</h3>
                </div>
            </div>
            <div>
                <div>
                    <h1 className="text-lg font-bold m-3 ">HELP</h1>
                </div>
                <div>
                    <h3 className="text-lg m-3">Customer Service</h3>
                    <h3 className="text-lg m-3">My Account</h3>
                    <h3 className="text-lg m-3">Find a Store</h3>
                    <h3 className="text-lg m-3">Legal & Privacy</h3>
                    <h3 className="text-lg m-3">Contact</h3>
                </div>
            </div>
            <div>
                <div>
                    <h1 className="text-lg font-bold m-3 ">SUBSCRIBE</h1>
                </div>
                <div>
                    <h3>Be the first to get the latest news about trends , promotions and much more!</h3>
                </div>
                <div>
                    <input
                        type="email" // Set the type to "email" for email validation
                        id="email"
                        name="email"
                        placeholder="  Enter your email  "
                        className="border-2 border-gray-400 w-[75%] h-10 rounded-sm my-8"
                    />
                </div>
            </div>

        </div>
    )
}

export default sections;