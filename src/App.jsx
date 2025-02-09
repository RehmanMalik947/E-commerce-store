import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Category from './category';
import axios from 'axios';


function App() {
  const [count, setCount] = useState(0);
  // let [finalCtegory,setFinalCategory]=useState([]);
  // const getCategory=()=>
  // {
  //   axios.get('https://dummyjson.com/products')
  //   .then((res)=>res.data)
  //   .then((finalres)=>{setFinalCategory(finalres)})
  // }
  // useEffect(() => {
  //   getCategory();
  // }, [])

  

   

  return (
    <>
    <div className='py-[50px] bg-gray-100'>
      <div className='max-w-[1320px] mx-auto ml-20 '>
        <h1 className='text-center text-[40px] font-bold mb-[30px]'>Our Products</h1>
        <div className='grid grid-cols-[30%_auto] gap-[20px]'>
          <div className='bg-blue-200'>
              {/* <Category finalCtegory={finalCtegory}/> */}
          </div>
          
          <div>
            <div className='grid grid-cols-4 gap-2 ' >
                <ProductItems/>
                <ProductItems/>
                <ProductItems/>
                <ProductItems/>
                <ProductItems/>
            </div>
          </div>
        </div>
      </div>
       
    </div>
      
    </>
   
  );
}

export default App;

function ProductItems()
{
  return(
    <div className='shadow-lg text-center h-auto w-48 object-contain pb-3'>
    <img src='https://wearjewelery.com/cdn/shop/files/IMG_2013.heic?v=1734114252&width=1445' ></img>
    <h3>Butterfly Necklace</h3>
    <h3>Rs.1250</h3>
  </div>
  )
}