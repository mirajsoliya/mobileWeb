import retur from '../images/return.png';
import payment from '../images/payment.png';
import shipping from '../images/shipping.png';
import customer from '../images/customer.png';

function Services() {
    return (
        <div className='bg-red-500 p-8'>
            <div class="flex items-center gap-2 justify-center">
                <div class="w-2 h-1 rounded-full bg-white"></div>
                <div class="w-2 h-1 rounded-full bg-white"></div>
                <div class="w-4 h-1 rounded-full bg-white"></div>
                <div class="h-1 w-12 rounded-full bg-white"></div>
                <div class="text-2xl font-bold text-white">Our Services</div>
                <div class="h-1 w-12 rounded-full bg-white"></div>
                <div class="w-4 h-1 rounded-full bg-white"></div>
                <div class="w-2 h-1 rounded-full bg-white"></div>
                <div class="w-2 h-1 rounded-full bg-white"></div>
            </div>
            <div className="container flex m-auto justify-around space-x-4 p-10 ">
                <div className=''>
                    <img src={retur} className='w-36 p-4 rounded-full bg-white'></img>
                    <div className='text-center'>
                        <h3 className='text-white text-2xl my-3'>100 Day Return</h3>
                    </div>
                </div>
                <div className=''>
                    <img src={payment} className='w-36  p-9 rounded-full bg-white'></img>
                    <div className='text-center'>
                        <h3 className='text-white text-2xl my-3'>Secure Payments</h3>
                    </div>
                </div>
                <div className=''>
                    <img src={shipping} className='w-36  p-9 rounded-full bg-white'></img>
                    <div className='text-center'>
                        <h3 className='text-white text-2xl my-3'>Free Shipping</h3>
                    </div>
                </div>
                <div className=''>
                    <img src={customer} className='w-36  p-9 rounded-full bg-white'></img>
                    <div className='text-center'>
                        <h3 className='text-white text-2xl my-3'>Customer Service</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services