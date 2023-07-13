import React from 'react';
import { Link } from 'react-router-dom';

export default function Payment() {


  return (
    <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="card mx-auto mt-5 p-4">
        <h1 className="text-center mb-4">Pay to Order</h1>
        <form>
          <div className="form-group" >
            <label htmlFor="card-number">Card Number</label>
            <input type="text" className="form-control" id="card-number" placeholder="1234 5678 9012 3456" required />
          </div>

          <div className="form-group">
            <label htmlFor="card-name">Card Name</label>
            <input type="text" className="form-control" id="card-name" placeholder="John Smith" required />
          </div>

          <div className="form-group">
            <label htmlFor="expiry-date">Expiry Date</label>
            <input type="text" className="form-control" id="expiry-date" placeholder="MM/YY" required />
          </div>

          <div className="form-group">
            <label htmlFor="cvv">CVV</label>
            <input type="text" className="form-control" id="cvv" placeholder="123" required />
          </div>

          <Link className='btn bg-danger mt-5' to='/pcart'>payment</Link>
        </form>
      </div>
    </div>
  );
}

