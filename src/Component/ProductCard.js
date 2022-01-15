import React, {useState, useEffect} from 'react';
import './ProductCard.css'; 

function ProductCard() {
  const url = 'https://fakestoreapi.com/products';
  const [products, setProducts] = useState()
  const fetchApi = async () => {
    const response = await fetch(url)
    const responseJSON = await response.json()
    setProducts(responseJSON)
  }
  useEffect(() => {
    fetchApi()
  }, [])
  return (
    <div className='mir-products-content'>
      { !products ? 'Cargando...' : 
        products.map((product)=>{
          return (
            <div className='mir-card'>
              <img src={product.image} className='mir-img-product'/>
              <p>{product.title}</p>
              <div className='mir-bottom'> 
                <span>00:32:52</span>
                <button>Go To detail</button>  
              </div>
            </div>
          );
        })
      }
      
    </div>
  );
}

export default ProductCard;
