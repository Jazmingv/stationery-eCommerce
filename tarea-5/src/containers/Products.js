

const Products = (props) => {
    return (
      <>
      <div className="ProductsContainer">
        <h3>{props.title}</h3>
        <h5>{props.author}</h5>
        <p>{props.description}</p>
        </div>
      </>
    );
  }
  
  export default Products;