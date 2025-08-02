import React from 'react'

const Products = ({data, isSale}) => {
  return (
    <>
        <h1>Products</h1>
        {/** Option - 1:    */}
        {isSale ? (
        <>    
        <h4>Products On Sale</h4>
        </>
    ): <h4>No Products on Sale</h4>}


        {data.map((product,index) => (
            
                <div key={index}><h2>{product.id} - {product.name} - Price: <strong>{product.price}</strong></h2></div>
        ))
        }

        {/**Option - 2 
        {data.map((product,index)=>{
            return(
                <div key={index}><h2>{product.id} - {product.name} - Price: <strong>{product.price}</strong></h2></div>
            )
        })}

*/} 
    </>
  )
}

export default Products