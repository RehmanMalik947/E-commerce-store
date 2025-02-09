import React from 'react';

export default function Category({finalCtegory}) {
    let cat=finalCtegory.map((v,i)=>{
    return(
        <li key={i} className='bg-gray-400 p-[9px] cursor-pointer font-serif font-[200] mb-2'>
            {v}
        </li>
    )
    })

  return (
    <div >
      <h3 className='p-[10px] text-[23px] font-[500]'>
      Product Category</h3>
      <ul>
            {cat}
      </ul>
    </div>
  );
}
