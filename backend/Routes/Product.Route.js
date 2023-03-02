const { Router } = require("express");
const { ProductModel } = require("../Model/Product.Model");
const productRoute = Router();

productRoute.get("/:id",async (req, res) => {
  const ID = req.params.id;
  try {
    let data = await ProductModel.find({ _id: ID });
    res.send(data);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

productRoute.get("/", async (req, res) => {
  const min = req.query.min;
   const max = req.query.max;
  const category =req.query.category
  const brand=req.query.brand
  const name = req.query.name
  const price=req.query.price
  const mrp = req.query.mrp
  const discount = req.query.discount
  const high=req.query.pHL
  const low=req.query.pLH
   if(category && brand){
    try {
        let productData =await ProductModel.find({$and:[{category: { $regex: `${category}`, $options: "i" }},{brand: { $regex: `${brand}`, $options: "i" },}]}).sort({brand:1})
        res.send(productData)
    } catch (err) {
        console.log(err)
        res.status(500).send({message:err.message})
    }
  }
  else if (category) {
    try {
      const productData = await ProductModel.find({
        category: { $regex: `${category}`, $options: "i" },
      });
      res.send(productData);
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  }
   else if(max && min && brand){
    try {
        let productData =await ProductModel.find({$and:[{price:{$gt:min}},{price:{$lt:max}},{brand: { $regex: `${brand}`, $options: "i" },}]})
        res.send(productData)
    } catch (err) {
        console.log(err)
        res.status(500).send({message:err.message})
    }
  } 
  else if(brand){
    try {
      const productData = await ProductModel.find({
        brand: { $regex: `${brand}`, $options: "i" },
      });
      res.send(productData);
    } catch (error) {
      res.status(500).send({ message: err.message });
    }
  } else if(high){
    try {
      
        let productData =await ProductModel.find().sort({price:high})
        res.send(productData) 
        
    } catch (err) {
        console.log(err)
        res.status(500).send({message:err.message})
    }
} else if(low){
  try {
    
      let productData =await ProductModel.find().sort({price:low})
      res.send(productData) 
     
  } catch (err) {
      console.log(err)
      res.status(500).send({message:err.message})
  }
}
   else if(price){
    try {
      const productData = await ProductModel.find({price:{$lt:price}});
      res.send(productData);
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  } else if(max && min){
    try {
        let productData =await ProductModel.find({$and:[{price:{$gt:min}},{price:{$lt:max}}]})
        res.send(productData)
    } catch (err) {
        console.log(err)
        res.status(500).send({message:err.message})
    }
} 
  else {
    const product = await ProductModel.find();
    res.send(product);
  }
});

productRoute.post("/create", async (req, res) => {
  try {
    await ProductModel.insertMany(req.body);
    res.status(201).send({ msg: "Product has been added" });
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

productRoute.patch("/update/:id", async (req, res) => {
  const ID = req.params.id;
  const payload = req.body;
  try {
    await ProductModel.findByIdAndUpdate({ _id: ID }, payload);
    res.send({msg:`Product with id:${ID} has been updated`})
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

productRoute.delete("/delete/:id", async (req, res) => {
  const ID = req.params.id;
  try {
    await ProductModel.findByIdAndDelete({ _id: ID });
    res.send({msg:`Product with id:${ID} has been deleted`})
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});


module.exports = { productRoute };
/*

{
  "name": "Nikon D3500 DSLR Camera with AF-P 18-55 mm + AF-P 70-300 mm VR Kit",
  "img": "https://www.reliancedigital.in/medias/Nikon-D3500-DSLR-Camera-491431009-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w4MjUzfGltYWdlL2pwZWd8aW1hZ2VzL2gxNS9oMDEvOTA3MDM1NjI2NzAzOC5qcGd8NGFmZDk5NDM1MjA0NDFkY2Q0M2FmYzY0ZTlmYmUxZTU1MjJiZWE4ZDNkNTI5Mzg4M2NkOWNjZjdhY2MwZDFkZA",
  "price": 48990.00,
  "mrp": 53950,
  "discount": 4960,
  "category": "cameras",
  "brand": "Nikon",
  "rating": 4.4,
  "description": "‎D7500 Camera, Lens AF-S 18-140mm, Strap, Rechargeable Battery, USB Cable, User Manual and Warranty Card"
}

*/