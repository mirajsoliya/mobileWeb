import { FaLocationDot } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";
import { IoIosMail } from "react-icons/io";

function Footer() {
    return (
        <div className="p-4 flex justify-center space-x-20 border-y-2 border-red-500 my-4">
            <div className="flex items-center ">
                <FaLocationDot className="text-2xl m-5 text-red-500"/>
                <div>
                    <h2>60, 29th Street #343 CA 94110,</h2>
                    <h2>United States of America</h2>
                </div>
            </div>
            <div className="flex items-center" >
                <FiPhoneCall className="text-2xl m-5 text-red-500"/>
                <div>
                    <h2>+01 2222 365/ +91 1256 789</h2>
                </div>
            </div>
            <div className="flex items-center">
                <IoIosMail className="text-2xl m-5 text-red-500" />
                <div>
                    <h2>contact@gmail.com</h2>
                </div>
            </div>
        </div>
    )
}

export default Footer