import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Category from './category';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <div className='py-[50px] bg-gray-100'>
      <div className='max-w-[1320px] mx-auto ml-20 bg-red-200'>
        <h1 className='text-center text-[40px] font-bold mb-[30px]'>Our Products</h1>
        <div className='grid grid-cols-[30%_auto] gap-[20px]'>
          <div className='bg-blue-200'>
              <Category/>
          </div>
          
          <div>
            <div className='flex flex-wrap gap-2 ' >
              <div className='shadow-lg text-center h-auto w-48 object-contain pb-3'>
                <img src='https://wearjewelery.com/cdn/shop/files/IMG_2013.heic?v=1734114252&width=1445' ></img>
                <h3>Butterfly Necklace</h3>
                <h3>Rs.1250</h3>
              </div>

              <div className='shadow-lg text-center h-auto w-48 object-cover pb-4'>
                <img src='https://wearjewelery.com/cdn/shop/files/IMG_2013.heic?v=1734114252&width=1445' ></img>
                <h3>Butterfly Necklace</h3>
                <h3>Rs.1250</h3>
              </div>

              <div className='shadow-lg text-center h-auto w-48 object-cover pb-4'>
                <img src='https://wearjewelery.com/cdn/shop/files/IMG_2013.heic?v=1734114252&width=1445' ></img>
                <h3>Butterfly Necklace</h3>
                <h3>Rs.1250</h3>
              </div>

              <div className='shadow-lg text-center h-auto w-48 object-cover pb-4'>
                <img src='https://wearjewelery.com/cdn/shop/files/IMG_2013.heic?v=1734114252&width=1445' ></img>
                <h3>Butterfly Necklace</h3>
                <h3>Rs.1250</h3>
              </div>
              <div className='shadow-lg text-center h-auto w-48 object-cover pb-4'>
                <img src='https://wearjewelery.com/cdn/shop/files/IMG_2013.heic?v=1734114252&width=1445' ></img>
                <h3>Butterfly Necklace</h3>
                <h3>Rs.1250</h3>
              </div>

            </div>
          </div>
        </div>
      </div>
       
    </div>
      
    </>
   
  );
}

export default App;
