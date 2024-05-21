import Link from 'next/link';
import React from 'react';

const Home = async() => {
    const res = await fetch("http://localhost:5000/shoes",{
       next:{
        revalidate:5
       }
    })

    const shoes = await res.json()

    throw new Error("error from home page")
   
    return (
          <div>

       

        <div className='flex justify-center mt-10 space-x-6'>
             {
               shoes.slice(0,3).map(shoe =>
                <div 
                    key={shoe.id}
               className="card w-80 bg-base-100 shadow-xl">
               <figure>
                <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" />
               </figure>
               <div className="card-body">
                 <h2 className="card-title">
                   {shoe.title}
                   <div className="badge badge-secondary">{shoe.price}</div>
                 </h2>
                 <p>{shoe.description}</p>
                 <div className="card-actions justify-end">
                 <button className="btn btn-primary">Buy Now</button>
               <button className="btn btn-secondary">Details</button>
                 </div>
               </div>
             </div>
               )
             }


        </div>
           <Link href='/all-shoes'> <button className="btn btn-secondary">Details</button></Link> 
        </div>
    );
};

export default Home;