import React from 'react'

export default function Checkout( { totals } ) {
    let shipping = calcShipping();
  return (
    <div id="books__body">
      <main id="books__main">
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
                <div className="checkout">
                    <h2 className="checkout__section--title">
                    Checkout
                    </h2>
                    <div className="checkout__divider" />
                    <div className="paymentDetails">
                        <div className="paymentDetails--row">
                            Name:<input type="text" className="name"/>
                        </div>
                        <div className="paymentDetails--row">
                            Card Number: <input type="number" className="card__number" />
                        </div>
                        <div className="paymentDetails--row">
                            Exp: <input type="date" className="card__exp" />
                            <span className="secondary">CVC: <input type="number" className="card__pin" /></span>
                        </div>
                        <div className="paymentDetails--row">
                            Zip Code: <input type="number" className="zip--card" />
                        </div>
                    </div>
                    <div className="checkout__divider--thin" />
                    <div className="address__shipping">
                        <div className="shipping--row">
                            <span>Country:</span>
                            <input type="text" className="country" />
                        </div>

                        <div className="shipping--row">
                            <span>Street:</span>
                            <input type="text" className="street" />
                        </div>

                        <div className="shipping--row">
                            <span>City:</span>
                            <input type="text" className="city" />
                        </div>

                        <div className="shipping--row">
                            <span>State:</span>
                            <input type="text" className="state" />
                        </div>

                        <div className="shipping--row">
                            <span>Zip:</span>
                            <input type="text" className="zip--shipping" />
                        </div>
                        </div>

                        <div className="total">
                            <div className="total__item total__sub-total">
                                <span>Subtotal</span>
                                <span>${totals.subtotal.toFixed(2)}</span>
                            </div>
                            <div className="total__item total__tax">
                                <span>Tax</span>
                                <span>${totals.tax.toFixed(2)}</span>
                            </div>
                            <div className="total__item total__shipping">
                                <span>Shipping</span>
                                <span>${shipping}</span>
                            </div>
                            <div className="total__item total__price">
                                <span>Total</span>
                                <span>${totals.total.toFixed(2)}</span>
                            </div>
                                <button className="btn no-cursor">Confirm Payment</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
  )
}

function calcShipping() {
    return 7.99;
}

function calcTotal(shipping, total) {
    let grandTotal = shipping + total; 
    return grandTotal.toFixed(2);
}