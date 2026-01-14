const express = require("express");
const app = express();
const { products } = require("./data.js");

app.get("/", (req, res) => {
  res.send('<h1> Home Page </h1> <a href="/api/products">products</a>');
});

app.get("/api/products", (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  });
  res.json(newProducts);
});

app.get("/api/products/:productID", (req, res) => {
  /* console.log(req);
  console.log(req.params); */
  const { productID } = req.params; // productID is a string so it needs to be converted later

  const singleProduct = products.find(
    // .find iterates through the whole list of objects
    (product) => product.id === Number(productID) // product represents one object at a time
  );

  if (!singleProduct) {
    return res.status(404).send("Product Does Not Exist");
  }
  return res.json(singleProduct);
});

app.get("/api/products/:productID/reviews/:reviewID", (req, res) => {
  console.log(req.params);
  res.send("hello world");
});

app.get('/api/v1/query', (req, res) => { // req.query will always be a string
  console.log(req.query); // output would be {name: 'ralph', id: '3'} // depends on what the user puts on the url (key-value pairs) i.e. query?name=ralph&id=3
  const {search, limit} = req.query
  let sortedProducts = [...products];

  if (search) {
    sortedProducts = sortedProducts.filter((product)=>{
      return product.name.startsWith(search) //?search=ra, or ral, or ralp
    })
  }
  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit))
  }
  if (sortedProducts.length < 1) {
    //res.status(200).send('no products matched your search');
    return res.status(200).json({sucess: true, data: []})
  }
  res.status(200).json(sortedProducts);
  // res.send('Hello world');
})


app.listen(5000, () => {
  console.log("Server is listening on port 5000");
});

// 6:07:34
