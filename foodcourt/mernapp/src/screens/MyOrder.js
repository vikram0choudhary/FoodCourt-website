import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export default function MyOrder() {
  const [orderData, setOrderData] = useState(null);
  
  useEffect(() => {
    const fetchMyOrder = async () => {
      const email = localStorage.getItem('userEmail');
      if (email) {
        try {
          const response = await fetch("http://localhost:5000/api/myorderData", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              email: email
            })
          });
          const data = await response.json();
          setOrderData(data.orderData);
        } catch (error) {
          console.log(error.message);
        }
      }
    };
    fetchMyOrder();
  }, []);
  
  const renderOrderData = () => {
    if (orderData && orderData.order_data && Array.isArray(orderData.order_data)) {
      return orderData.order_data.map((order) => {
        const orderDate = order.Order_date;
        const orderItems = order.filter((item) => item.name);
        if (orderItems.length > 0) {
          return (
            <div key={orderDate && <hr/>}>
              <div className='m-auto mt-5'>
                
                {orderDate }
              </div>
              <div className='row'>
                {orderItems.map((item) => (
                  <div key={item._id} className='col-12 col-md-6 col-lg-3'>
                    <div className='card mt-3' style={{ width: "16rem", maxHeight: "360px" }}>
                      <div className='card-body'>
                        <h5 className='card-title'>{item.name}</h5>
                        <div className='container w-100 p-0' style={{ height: "38px" }}>
                          <span className='m-1'>{item.qty}</span>
                          <span className='m-1'>{item.size}</span>
                          <span className='m-1'>{orderDate}</span>
                          <div className='d-inline ms-2 h-100 w-20 fs-5'>
                            ₹{item.price}/-
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                ))}
              </div>
            </div>
            
          );
        } else {
          return null;
        }
      });
    } else {
      return <p>No orders found.</p>;
    }
    
  };
  
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className='container'>
        {renderOrderData()}
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
