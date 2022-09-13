import {React, useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
//import ShoppingCartData from '../ShoppingCartData.js';
import { Button } from 'react-bootstrap';
import { checkoutActions } from '../../../Store/index';
import axios from 'axios';

const Checkout = () => {
    const [productData, setProductData] = useState(null);

    const baseURL = "http://localhost:5000/";
    var checkOutSlice = useSelector(state => state.checkout);
    const dispatch = useDispatch();
    var productLst = [];

    const removeClickHandler = (event) => {
        event.preventDefault();
        dispatch(checkoutActions.RemoveItem(event.target.id));
    }
    useEffect(() => {      
        axios.get(baseURL+'CartProducts').then((response) => {          
            setProductData(response.data);
        });
      }, []);
      if (!productData) return null;


    var total = 0;

    const GetProducts = () => {
        var _products = productData;
        var products = checkOutSlice.products;

        //products = _products.filter(p => products.includes(p.Id.toString()));

        products.map((pr) => {
            var pro = _products.filter(p => p.Id.toString() == pr)[0];
            productLst.push(pro);
            total += parseFloat( pro.price);

        });



    }

    GetProducts();
    return (
        <>


            <div className="container" ><div className="row g-5">
                <div className="col-md-5 col-lg-4 order-md-last">
                    <h4 className="d-flex justify-content-between align-items-center mb-3">
                        <span className="text-primary">Your cart</span>
                        <span className="badge bg-primary rounded-pill">{productLst.length}</span>
                    </h4>
                    <ul className="list-group mb-3">

                        {productLst.map((a,index) => {

                            return (
                                <li key={a.Id} className="list-group-item d-flex justify-content-between lh-sm">
                                    <div>
                                        <h6 className="my-0">{a.name}</h6>
                                        <small className="text-muted">Brief description</small>
                                    </div>
                                    <span className="text-muted">${a.price}</span>

                                    <div>
                                        <Button variant="outline-secondary" onClick={removeClickHandler} id={index}>Remove</Button>
                                    </div>
                                </li>

                            )

                        })}



                        <li className="list-group-item d-flex justify-content-between bg-light">
                            <div className="text-success">
                                <h6 className="my-0">Promo code</h6>
                                <small>EXAMPLECODE</small>
                            </div>
                            <span className="text-success">"-"$</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between">
                            <span>Total (USD)</span>
                            <strong>${total.toFixed(2)}</strong>
                        </li>
                    </ul>

                    <form className="card p-2">
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Promo code" />
                            <button type="submit" className="btn btn-secondary">Redeem</button>
                        </div>
                    </form>
                </div>
            </div>
            </div>

        </>)

}

export default Checkout;