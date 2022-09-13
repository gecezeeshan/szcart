import { React, useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import classes from './Cart.module.css';
import { useParams } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import ShoppingCartData from '../ShoppingCartData.js'
import { Link } from 'react-router-dom';
import axios from 'axios';
import {  
  Container,
  Row,
  Col  
} from "react-bootstrap";
function ProductDetail() {
  const [productData, setProductData] = useState(null);

  const baseURL = "http://localhost:5000/";
  const params = useParams();
  //const [product,setProduct] = useState([]);

  useEffect(() => {
    axios.get(baseURL + 'CartProducts').then((response) => {
      setProductData(response.data);
    });
  }, []);
  if (!productData) return null;
  var product;
  const GetProduct = () => {
    var _products = ShoppingCartData.CartRepository.CartProducts;
    product = _products.filter(p => params.id == p.Id.toString())[0];
    // setProduct(_product);
  }
  GetProduct();

  return (
    <>
      <Container fluid>
        <Row>
          <Col lg="12" sm="12">
          
            <div className={" col-sm-12  " + classes.card} style={{ marginBottom: '5px' }} >
              <Card >
                <Card.Header>
                <Card.Title><b className="text-uppercase card-title">{product.name}</b></Card.Title>
                </Card.Header>
                <Card.Body>
                  
                  <Card.Text   >
                    <span className='ellipseText' style={{ margin: 'auto' }}>    {product.description}</span>
                    <br></br>
                    <p  className={'fw-light !important'}>
                    Original price: <span className={'strike'}>${parseFloat(product.price) + 10} </span><br></br>
                    Discounted price: ${product.price}
                    </p>
                  </Card.Text>                
                </Card.Body>
                <Card.Footer>
                    <Link to={`/admin/Products`}>Back</Link>
                </Card.Footer>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default ProductDetail