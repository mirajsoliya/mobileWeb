import iphoneImage from '../images/iphone.jpg';


function categories() {
    return (
        <>
            <div class="flex items-center gap-2 justify-center m-8">
                <div class="w-2 h-1 rounded-full bg-red-500"></div>
                <div class="w-2 h-1 rounded-full bg-red-500"></div>
                <div class="w-4 h-1 rounded-full bg-red-500"></div>
                <div class="h-1 w-12 rounded-full bg-red-500"></div>
                <div class="text-2xl font-bold text-red-500">Our Categories</div>
                <div class="h-1 w-12 rounded-full bg-red-500"></div>
                <div class="w-4 h-1 rounded-full bg-red-500"></div>
                <div class="w-2 h-1 rounded-full bg-red-500"></div>
                <div class="w-2 h-1 rounded-full bg-red-500"></div>
            </div>
            <div className="container flex m-auto justify-center space-x-4 p-10 ">
                <div className=''>
                    <img src={iphoneImage} className='w-48 border-2  rounded-full hover:border-red-500 hover:cursor-pointer transition-all'></img>
                    <div className='text-center'><h3>Mobile</h3></div>
                </div>
                <div className=''>
                    <img src={iphoneImage} className='w-48 border-2  rounded-full hover:border-red-500 hover:cursor-pointer transition-all'></img>
                    <div className='text-center'><h3>Mobile</h3></div>
                </div><div className=''>
                    <img src={iphoneImage} className='w-48 border-2  rounded-full hover:border-red-500 hover:cursor-pointer transition-all'></img>
                    <div className='text-center'><h3>Mobile</h3></div>
                </div><div className=''>
                    <img src={iphoneImage} className='w-48 border-2  rounded-full hover:border-red-500 hover:cursor-pointer transition-all'></img>
                    <div className='text-center'><h3>Mobile</h3></div>
                </div><div className=''>
                    <img src={iphoneImage} className='w-48 border-2  rounded-full hover:border-red-500 hover:cursor-pointer transition-all'></img>
                    <div className='text-center'><h3>Mobile</h3></div>
                </div><div className=''>
                    <img src={iphoneImage} className='w-48 border-2  rounded-full hover:border-red-500 hover:cursor-pointer transition-all'></img>
                    <div className='text-center'><h3>Mobile</h3></div>
                </div>
            </div>
        </>
    )
}

export default categories