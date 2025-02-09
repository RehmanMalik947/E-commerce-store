import { useEffect, useState } from 'react';

import './App.css';
import Category from './category';
import axios from 'axios'

function App() {
  const [count, setCount] = useState(0);
  let [finalCtegory,setFinalCategory]=useState([]);
  const getCategory=()=>
  {
    axios.get('https://dummyjson.com/products')
    .then((res)=>res.data)
    .then((finalres)=>{setFinalCategory(finalres.products)})
  }
  useEffect(() => {
    getCategory();
  }, [])

  

   

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
            {finalCtegory.map((v) => (
                  <ProductItems key={v.id} title={v.title} description={v.description} images={v.images} />
                ))}
                
            </div>
          </div>
        </div>
      </div>
       
    </div>
      
    </>
   
  );
}

export default App;

function ProductItems({title , description , images})
{
  
  return(
    <div className='shadow-lg text-center h-auto w-48 object-contain pb-3'>
    <img src={images} ></img>
    <h3>{title}</h3>
    <p className='mt-1 text-sm text-gray-600 line-clamp-2 overflow-hidden overflow-ellipsis'>{description}</p>
  </div>
  )
}