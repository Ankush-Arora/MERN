import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
const MyOrders = () => {

    const [orderData, setOrderData] = useState({})

    const fetchMyOrder = async () => {
        console.log(localStorage.getItem('userEmail'))
        await fetch("http://localhost:3001/myOrders", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: localStorage.getItem('userEmail')
            })
        }).then(async (res) => {
            let response = await res.json()
            setOrderData(response)

        })
        // console.log('Your orders are ',orderData);  
    }

    useEffect(() => {
        fetchMyOrder()
        // console.warn("You are in my orders")
    }, [])


    return (
        <div className='container'>
            <div className='row'>

                {orderData !== null ? Array(orderData).map(data => {
                    return (
                        data.orderData ?
                            data.orderData.order_data.slice(0).reverse().map((item) => {
                                return (
                                    item.map((arrayData) => {
                                        return (
                                            <div  >
                                                {arrayData.Order_date ? <div className='m-auto mt-5 bg-success fs-4'>

                                                    {data = arrayData.Order_date}
                                                    <hr />
                                                </div> :

                                                    <div className='col-12 col-md-6 col-lg-3' >
                                                        <div className="card mt-3" style={{ width: "16rem", maxHeight: "360px", color: 'white', backgroundColor: 'black' }}>
                                                            {/* <img src={arrayData.img} className="card-img-top" alt="..." style={{ height: "120px", objectFit: "fill" }} /> */}
                                                            <div className="card-body">
                                                                <h5 className="card-title">{arrayData.name}</h5>
                                                                <div className='container w-100 p-0' style={{ height: "38px" }}>
                                                                    <h6 className='m-1'>Quantity ={arrayData.quantity}</h6>
                                                                    {/* <span className='m-1'>{arrayData.size}</span> */}
                                                                    <span className='m-1'>{data}</span>
                                                                    <div className=' d-inline ms-2 h-100 w-20 fs-5' >
                                                                        ₹{arrayData.description*arrayData.quantity}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>



                                                }

                                            </div>
                                        )
                                    })

                                )
                            }) : <Link className="btn text-success" to="/home">
                                <img src={'images/orderNow.jpg'} className="d-block w-100" alt="logo1" style={{filter:"brightness(40%)",objectFit:"fill !important"}}   /></Link>
                    )
                }) : ""}
            </div>


        </div>


    )
}

export default MyOrders
