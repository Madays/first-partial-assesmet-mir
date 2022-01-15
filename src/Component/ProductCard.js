import React, {useState, useEffect} from 'react';
//import './App.css';

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
    <div>
      { !products ? 'Cargando...' : 
        products.map((product)=>{
          return (
            <div>
              <img src={product.image} className='img-product'/>
              <p>{product.description}</p>
              <div> 
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
