import axios from 'axios';
import {useEffect, useState} from 'react'
import './HomePage.css';
import { Header } from '../../components/Header';
import CheckMarkIcon from '../../assets/images/icons/checkmark.png';
import { ProductsGrid} from './ProductsGrid'

export function HomePage({cart}) {
  const [products, setProducts] = useState([]);

  useEffect(()=>{
    axios.get('/api/products')
    .then((response)=>{
      setProducts(response.data);
    });


  },[]);

  

  // fetch('http://localhost:3000/api/products')
  //   .then((response)=>{
  //     return response.json()
  //   }).then((data)=>{
  //     console.log(data)
  //   }); short form of this is above using axios , useEffect is added later 

  return (
    <>
      <title>Ecommerce Project</title>
      <link rel="icon" type="image/svg+xml" href="home-favicon.png" />

      <Header cart = {cart} />

      <div className="home-page">
        <ProductsGrid products = {products}/>
      </div>
    </>
  )
}