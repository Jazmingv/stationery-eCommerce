import Item from "./Item";

const DATA = [
  {
    id: 1,
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    description:
      "In ancient times the Rings of Power were crafted by the Elven-smiths, and Sauron, the Dark Lord, forged the One Ring, filling it with his own power so that he could rule all others. But the One Ring was taken from him, and though he sought it throughout Middle-earth, it remained lost to him. After many ages it fell by chance into the hands of the hobbit Bilbo Baggins.",
    price: "650",
    img: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1566425108l/33.jpg",
  },
  {
    id: 2,
    title: "Harry Potter and the Half-Blood Prince",
    author: "J.K. Rowling",
    description:
      "As in all wars, life goes on. The Weasley twins expand their business. Sixth-year students learn to Apparate - and lose a few eyebrows in the process. Teenagers flirt and fight and fall in love. Classes are never straightforward, through Harry receives some extraordinary help from the mysterious Half-Blood Prince. So it's the home front that takes center stage in the multilayered sixth installment of the story of Harry Potter. Here at Hogwarts, Harry will search for the full and complete story of the boy who became Lord Voldemort - and thereby find what may be his only vulnerability.",
    price: "1250",
    img: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1587697303l/1._SX318_.jpg",
  },
  {
    id: 3,
    title: "The Hunger Games",
    author: "Suzanne Collins",
    description:
      "In the ruins of a place once known as North America lies the nation of Panem, a shining Capitol surrounded by twelve outlying districts. The Capitol is harsh and cruel and keeps the districts in line by forcing them all to send one boy and one girl between the ages of twelve and eighteen to participate in the annual Hunger Games, a fight to the death on live TV. Sixteen-year-old Katniss Everdeen, who lives alone with her mother and younger sister, regards it as a death sentence when she steps forward to take her sister's place in the Games. But Katniss has been close to dead before—and survival, for her, is second nature. Without really meaning to, she becomes a contender. But if she is to win, she will have to start making choices that weight survival against humanity and life against love.",
    price: "1500",
    img: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1586722975l/2767052.jpg",
  },
];

const renderItemList = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("OK");
  }, 2000);
});

const ItemList = () => {
    return(
renderItemList.then(() => {
        <>
  {DATA.map((item) => <Item key={item.id} title={item.title} img={item.img} price={item.price} />)}
</>
})
    );
}

export default ItemList;