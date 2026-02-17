import React from 'react'
import { addToCart, removeCart } from '../Slice/CartSlice'
import { useDispatch, useSelector } from 'react-redux'
import './Prod.css'
const Product = () => {

     const Prod = [
    {
      id: 1,
      title: "Wireless Headphones",
      price: 1999,
      img: "https://images.unsplash.com/photo-1516570161787-2fd917215a3d"
    },
    {
      id: 2,
      title: "Smart Watch",
      price: 2999,
      img: "https://images.unsplash.com/photo-1516570161787-2fd917215a3d"
    },
    {
      id: 3,
      title: "Gaming Laptop",
      price: 75999,
      img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8"
    },
    {
      id: 4,
      title: "Running Shoes",
      price: 2499,
      img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff"
    },
    {
      id: 5,
      title: "DSLR Camera",
      price: 45999,
      img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32"
    },
    {
      id: 6,
      title: "Bluetooth Speaker",
      price: 1499,
      img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
    }
  ];
    const cartProducts = useSelector((state) => state.cart.cartItems)
    const dispatch = useDispatch();

    const addCart = (item) => {
        dispatch(addToCart(item))
    }

    const dltCart = (item) => {
        dispatch(removeCart(item))
    }

    return (
        <div>
            <div className='row'>
                {Prod.map((item) => (
                    <div className="col" key={item.id}>
                        <div className="card">       
                            <img src={item.img} width={300} height={300} alt={item.title} />
                            <div className="card-body">
                                <h5 className="card-title">{item.title}</h5>
                                <p className="card-text">{item.price}</p>
                                <button onClick={() => addCart(item)}>
                                    Add to Cart
                                </button>
                                <button onClick={() => dltCart(item)}>
                                    Delete Cart
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Product