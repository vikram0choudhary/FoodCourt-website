import React, { useEffect, useRef, useState } from 'react'
import { useDispatchCart, useCart } from './ContextReducer'

export default function Card(props) {
    let dispatch = useDispatchCart();
    let data = useCart()
    const priceRef = useRef();
    let options = props.options;
    let priceOptions = Object.keys(options);
    const [qty, setQty] = useState(1)
    const [size, setSize] = useState("")
    const handleADDToCart = async () => {
        let food = []
        for (const item of data) {
            if (item.id === props.foodItem._id) {
                food = item;

                break;
            }
        }
        if (food !== []) {
            if (food.size === size) {
                await dispatch({ type: "UPDATE", id: props.foodItem._id, price: finalPrice, qty: qty })
                return
            }

            else if (food.size !== size) {
                await dispatch({ type: "ADD", id: props.foodItem._id, name: props.foodItem.name, price: finalPrice, qty: qty, size: size })
                return
                // await console.log(data)
            }
            return
        }
        await dispatch({ type: "ADD", id: props.foodItem._id, name: props.foodItem.name, price: finalPrice, qty: qty, size: size })
    }
    let finalPrice = qty * parseInt(options[size]);

    useEffect(() => {
        setSize(priceRef.current.value);
    }, [])
    return (
        <div>
            <div className="card mt-3"  style={{ "width": "17rem", "maxHeight": "500px" }}>
                <img src={props.foodItem.img} className="card-img-top" alt="..." style={{ height: "120px", objectFit: "fill" }} />
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{props.foodItem.name}</h5>
                    <p className="card-text">{props.description}</p>
                    <div className='container w-100'></div>
                    <div className='d-flex align-items-center'>
                        <select className='m-2 h-100 bg-dark rounded' onChange={(e) => setQty(e.target.value)}>
                            {Array.from(Array(6), (e, i) => {
                                return (
                                    <option key={i + 1} value={i + 1}>{i + 1}</option>
                                )
                            })}
                        </select>
                        <select className='m-2 h-100 bg-dark rounded' ref={priceRef} onChange={(e) => setSize(e.target.value)}>
                            {priceOptions.map((data) => {
                                return <option key={data} value={data}>{data}</option>
                            })}
                        </select>
                        <div className='d-inline h-100 fs-5'>
                            ₹{finalPrice}/-
                        </div>
                    </div>

                </div>
                <hr className='mt-auto' />

                <div className="text-start mt-auto ">
                    <button className={'btn btn-danger justify-center ms-2 mb-3'} onClick={handleADDToCart}>Add to Cart</button>
                </div>

            </div>
            <style jsx>{`
            .card.mt-3 {
                background-color: #333232;
                width: 17rem;
                max-height: 500px;
                transition: transform 0.2s ease-in-out;
              }
              .card.mt-3:hover {
                transform: translateY(-5px);
              }
            
            
            `}</style>

        </div>

    )
}
