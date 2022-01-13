/*import React from "react";

class ProductCard extends React.Component {    
  render(){
    return <div>
      <img src=""/>
      <p>Lorem ipson</p>
      <div> 
        <span>00:32:52</span>
        <button>Go To detail</button>  
      </div>
    </div>
  }
}

export default ProductCard;*/
import React, {useState, useEffect} from 'react';
//import './App.css';

function App() {
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
              <img src={product.image}/>
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

export default App;
