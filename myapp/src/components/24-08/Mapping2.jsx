import React, { useState } from 'react'

export const Mapping2 = () => {
    const [product, setProducts]=useState([{
    name :"tshirt",
    price: 3000,
    size: "M",
    image: "https://www.apetogentleman.com/wp-content/uploads/2020/10/wear-overshirt-1.jpg"
    },{
    name :"shirt",
    price: 6000,
    size: "S",
    image: "https://www.apetogentleman.com/wp-content/uploads/2020/10/wear-overshirt-1.jpg"
    },
    {
    name :"tie",
    price: 8000,
    size: "L",
    image: "https://www.apetogentleman.com/wp-content/uploads/2020/10/wear-overshirt-1.jpg"
    },
    {
        name :"tshirt",
        price: 3000,
        size: "M",
        image: "https://www.apetogentleman.com/wp-content/uploads/2020/10/wear-overshirt-1.jpg"
        },{
        name :"shirt",
        price: 6000,
        size: "S",
        image: "https://www.apetogentleman.com/wp-content/uploads/2020/10/wear-overshirt-1.jpg"
        },
        {
        name :"tie",
        price: 8000,
        size: "L",
        image: "https://www.apetogentleman.com/wp-content/uploads/2020/10/wear-overshirt-1.jpg"
        },
        {
            name :"tshirt",
            price: 3000,
            size: "M",
            image: "https://www.apetogentleman.com/wp-content/uploads/2020/10/wear-overshirt-1.jpg"
            },{
            name :"shirt",
            price: 6000,
            size: "S",
            image: "https://www.apetogentleman.com/wp-content/uploads/2020/10/wear-overshirt-1.jpg"
            },
            {
            name :"tie",
            price: 8000,
            size: "L",
            image: "https://www.apetogentleman.com/wp-content/uploads/2020/10/wear-overshirt-1.jpg"
            },
            {
                name :"tshirt",
                price: 3000,
                size: "M",
                image: "https://www.apetogentleman.com/wp-content/uploads/2020/10/wear-overshirt-1.jpg"
                },{
                name :"shirt",
                price: 6000,
                size: "S",
                image: "https://www.apetogentleman.com/wp-content/uploads/2020/10/wear-overshirt-1.jpg"
                },
                {
                name :"tie",
                price: 8000,
                size: "L",
                image: "https://www.apetogentleman.com/wp-content/uploads/2020/10/wear-overshirt-1.jpg"
                },
  ])
  return (
    <div>
        <h1>Products</h1>
        <div style={{display:"flex",justifyContent:'space-around',flexWrap:"wrap"}}>
        {product.map((itemdetails)=>(
            <div style={{width:"18%",height:"650px",border:"1px solid black",marginBottom:"30px"}}>
                <img style={{width:"100%",height:"500px"}}   src={itemdetails.image}/>
                <h2>name {itemdetails.name}</h2>
                <h3>Price{itemdetails.price}</h3>
                <h3>Size {itemdetails.size}</h3>
            </div>
        ))}
        </div>
    </div>
  )
}

export default Mapping2;
