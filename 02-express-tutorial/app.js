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

app.listen(5000, () => {
  console.log("Server is listening on port 5000");
});

// 5:50:44
