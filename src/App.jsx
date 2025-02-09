import { useEffect, useState } from 'react';

import './App.css';
import Category from './category';
import axios from 'axios'



function App() {
  let [finalProduct,setFinalProduct]=useState([]);
  let [finalCategory,setFinalCategory]=useState([]);


  const getProduct=()=>
  {
    axios.get('https://dummyjson.com/products')
    .then((res)=>res.data)
    .then((finalres)=>{setFinalProduct(finalres.products)})
  }
 




  const getCategory=()=>
  {
    axios.get('https://dummyjson.com/products')
    .then((res)=>res.data)
    .then((finalres)=>{setFinalCategory(finalres.products)})
  }




  useEffect(() => {
    getCategory();
    getProduct();
  }, [])

  

   

  return (
    <>
    <div className='py-[50px] bg-gray-100'>
      <div className='max-w-[1320px] mx-auto ml-20 '>
        <h1 className='text-center text-[40px] font-bold mb-[30px]'>Our Products</h1>
        <div className='grid grid-cols-[30%_auto] gap-[20px]'>
          <div className='bg-gray-200'>
            <h3 className='p-[10px] text-[23px] font-[500] bg-gray-300'>Product Category</h3>
            <ul className='text-center'>
              {
                finalCategory.map((v)=>{
                  return(
                  <>
                  <Category key={v.id} category={v.category} />
                  </>)}
                )
              }
              </ul>
          </div>
          
          <div>
            <div className='grid grid-cols-4 gap-2 ' >
            {finalProduct.map((v) => (
                  <ProductItems key={v.id} title={v.title} description={v.description} images={v.images} price={v.price} />
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

function ProductItems({title , description , images , price })
{
  
  return(
    <div className='shadow-lg text-center h-auto w-48 object-contain pb-3'>
    <img src={images} ></img>
    <h3>{title.substring(0,12)}</h3>
    <p className='mt-1 text-sm text-gray-600 line-clamp-2 overflow-hidden overflow-ellipsis'>{description.substring(0,40)}</p>
    <h1 className='font-bold'>${price}</h1>
  </div>
  )
}