  const Item = (item) => {
    return (
      <>
<article class="products__card">
    <img src={item.img} alt={item.title} class="products__img" />
  
    <h3 class="products__title">{item.title}</h3>
    <span class="products__price">${item.price}</span>
  </article>
      </>
    );
  }
  
  export default Item;