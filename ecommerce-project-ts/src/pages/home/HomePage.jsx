import axios from 'axios';
import { useEffect, useState } from 'react'
import './HomePage.css';
import { Header } from '../../components/Header';
import CheckMarkIcon from '../../assets/images/icons/checkmark.png';
import { ProductsGrid } from './ProductsGrid';
import { useSearchParams } from 'react-router';

export function HomePage({ cart,loadCart }) {
  const [products, setProducts] = useState([]);
  const [searchParams] = useSearchParams();
  const search = searchParams.get('search');

  useEffect(() => {
    const getHomeData = async () => {
      const urlPath = search ? `/api/products?search=${search}`: '/api/products';
      const response = await axios.get(urlPath)
      setProducts(response.data);
    };
    getHomeData();
    // console.log(products);

  }, [search]);

  // axios.get('/api/products')
  // .then((response)=>{
  //   setProducts(response.data);
  // }); use of async await above without using .then as with await it can be stored in variable






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

      <Header cart={cart} />

      <div className="home-page">
        <ProductsGrid products={products} loadCart={loadCart} />
      </div>
    </>
  )
}