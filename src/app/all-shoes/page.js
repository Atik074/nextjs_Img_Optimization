import React from 'react';

const AllShoes = async() => {
    const res = await fetch('http://localhost:5000/shoes' , 
    {cache:'no-store'})
    const shoes =  await res.json()
  

    return (
        <div className='grid grid-cols-3  mt-10 space-x-4 space-y-5'>
        {
          shoes.map(shoe =>
           <div 
               key={shoe.id}
          className="card bg-base-100 shadow-xl ">
          <figure>
           <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title ">
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
    );
};

export default AllShoes;