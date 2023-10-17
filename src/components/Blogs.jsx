
import iphoneImage from '../images/iphone.jpg';
function Blogs() {
    return (
        <>
            <div class="flex items-center gap-2 justify-center m-8">
                <div class="w-2 h-1 rounded-full bg-red-500"></div>
                <div class="w-2 h-1 rounded-full bg-red-500"></div>
                <div class="w-4 h-1 rounded-full bg-red-500"></div>
                <div class="h-1 w-12 rounded-full bg-red-500"></div>
                <div class="text-2xl font-bold text-red-500">Our Blogs</div>
                <div class="h-1 w-12 rounded-full bg-red-500"></div>
                <div class="w-4 h-1 rounded-full bg-red-500"></div>
                <div class="w-2 h-1 rounded-full bg-red-500"></div>
                <div class="w-2 h-1 rounded-full bg-red-500"></div>
            </div>
            <div className="container flex m-auto justify-center space-x-4 p-10 ">
                <div className='border-4 w-72 hover:border-red-500'>
                    <img src={iphoneImage} className=' hover:cursor-pointer transition-all'></img>
                    <div className='text-center p-4'>
                        <div className='p-4 text-center '>
                            <h3 className='text-base'>Lorem ipsum dolor sit amet, consectet
                                ur adipisicing elit. Rem architecto deleniti repellendus eveniet quam </h3>

                        </div>
                        <a href='' className='text-red-500 font-bold underline'>View More</a>
                    </div>
                </div>
                <div className='border-4 w-72 hover:border-red-500'>
                    <img src={iphoneImage} className=' hover:cursor-pointer transition-all'></img>
                    <div className='text-center p-4'>
                        <div className='p-4 text-center '>
                            <h3 className='text-base'>Lorem ipsum dolor sit amet, consectet
                                ur adipisicing elit. Rem architecto deleniti repellendus eveniet quam </h3>

                        </div>
                        <a href='' className='text-red-500 font-bold underline'>View More</a>
                    </div>
                </div><div className='border-4 w-72 hover:border-red-500'>
                    <img src={iphoneImage} className=' hover:cursor-pointer transition-all'></img>
                    <div className='text-center p-4'>
                        <div className='p-4 text-center '>
                            <h3 className='text-base'>Lorem ipsum dolor sit amet, consectet
                                ur adipisicing elit. Rem architecto deleniti repellendus eveniet quam </h3>

                        </div>
                        <a href='' className='text-red-500 font-bold underline'>View More</a>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Blogs;