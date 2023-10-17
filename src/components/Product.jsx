import iphoneImage from '../images/iphone.jpg';

function Product() {
    const StarRating = ({ rating }) => {
        const maxStars = 5; // You can change this to set the maximum number of stars
      
        const renderStars = () => {
          const stars = [];
          for (let i = 1; i <= maxStars; i++) {
            const starStyle = {
              fontSize: '24px',
              color: i <= rating ? 'yellow' : 'gray',
              cursor: 'pointer',
              transition: 'color 0.3s',
            };
            stars.push(
              <span key={i} style={starStyle}>
                {i <= rating ? '★' : '☆'}
              </span>
            );
          }
          return stars;
        };
      
        return <div className="star-rating">{renderStars()}</div>;
      };
    return (
        <>
            <div class="flex items-center gap-2 justify-center m-8">
                <div class="w-2 h-1 rounded-full bg-red-500"></div>
                <div class="w-2 h-1 rounded-full bg-red-500"></div>
                <div class="w-4 h-1 rounded-full bg-red-500"></div>
                <div class="h-1 w-12 rounded-full bg-red-500"></div>
                <div class="text-2xl font-bold text-red-500">Our Products</div>
                <div class="h-1 w-12 rounded-full bg-red-500"></div>
                <div class="w-4 h-1 rounded-full bg-red-500"></div>
                <div class="w-2 h-1 rounded-full bg-red-500"></div>
                <div class="w-2 h-1 rounded-full bg-red-500"></div>
            </div>
            <div className="bar mx-36">

                <div className="space-x-6">
                    <a href="" className="text-lg text-gray-300 hover:text-red-500 hover:underline">LATEST</a>
                    <a href="" className="text-lg  text-gray-300  hover:text-red-500 hover:underline">BEST SELLERS</a>
                    <a href="" className="text-lg  text-gray-300  hover:text-red-500 hover:underline">FEATURED</a>
                </div>

            </div>
            <div className="container flex m-auto justify-center space-x-4 p-10 ">
                <div className='border-8 hover:bg-gray-300'>
                    <img src={iphoneImage} className='w-64   hover:cursor-pointer transition-all'></img>
                    <div className=''>
                        <div className='p-4'>
                            <h3 className='text-base'>Norm 06 Lamp Medium</h3>
                            <h3>$341.05</h3>
                            <StarRating rating={5}/>
                        </div>
                    </div>
                </div>
                <div className='border-8 hover:bg-gray-300'>
                    <img src={iphoneImage} className='w-64   hover:cursor-pointer transition-all'></img>
                    <div className=''>
                        <div className='p-4'>
                            <h3 className='text-base'>Norm 06 Lamp Medium</h3>
                            <h3>$341.05</h3>
                            <StarRating rating={5}/>
                        </div>
                    </div>
                </div>
                <div className='border-8 hover:bg-gray-300'>
                    <img src={iphoneImage} className='w-64   hover:cursor-pointer transition-all'></img>
                    <div className=''>
                        <div className='p-4'>
                            <h3 className='text-base'>Norm 06 Lamp Medium</h3>
                            <h3>$341.05</h3>
                            <StarRating rating={5}/>
                        </div>
                    </div>
                </div>
                <div className='border-8 hover:bg-gray-300'>
                    <img src={iphoneImage} className='w-64   hover:cursor-pointer transition-all'></img>
                    <div className=''>
                        <div className='p-4'>
                            <h3 className='text-base'>Norm 06 Lamp Medium</h3>
                            <h3>$341.05</h3>
                            <StarRating rating={5}/>
                        </div>
                    </div>
                </div>
                <div className='border-8 hover:bg-gray-300'>
                    <img src={iphoneImage} className='w-64   hover:cursor-pointer transition-all'></img>
                    <div className=''>
                        <div className='p-4'>
                            <h3 className='text-base'>Norm 06 Lamp Medium</h3>
                            <h3>$341.05</h3>
                            <StarRating rating={5}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Product;