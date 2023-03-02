const { Router } = require("express");
const { authenticate } = require("../Middleware/Authentication.Middleware");
const { CartModel } = require("../Model/Cart.Model");
const cartRoute = Router();

// cartRoute.use(authenticate)
cartRoute.get("/", authenticate, async (req, res) => {
  const { user } = req.body;

  try {
    await CartModel.find({ user })
      .populate("productId")
      .then((r) => {
        return res.status(200).send(r);
      });
  } catch (e) {
    return res.status(400).send(e.message);
  }
});

cartRoute.post("/add", authenticate, async (req, res) => {
  const productId = req.body;
  let { user } = req.body;

  try {
    let existingProduct = await CartModel.findOne({ productId, user });

    if (existingProduct) {
      let qty = parseFloat(existingProduct.qty + 1);
      //  let cartItem= await CartModel.findOneAndUpdate({productId,user,qty})
      let cartItem = new CartModel({ productId, user, qty });
      await cartItem.save();
      await CartModel.findOneAndDelete({ productId, user });
      return res.status(200).send(cartItem);
    } else {
      let qty = 1;
      let cartItem = new CartModel({ productId, user, qty });
      await cartItem.save();
      return res.status(200).send(cartItem);
    }
  } catch (e) {
    return res.status(400).send(e.message);
  }
});

















cartRoute.patch("/update/:id", authenticate, async (req, res) => {
    const _id = req.params.id;
    const payload = req.body;
    try {
      await CartModel.findOneAndUpdate({ _id },payload);
      res.send({ msg: `Product with id:${_id} has been updated` });
    } catch (e) {
      return res.status(400).send(e.message);
    }
  });


cartRoute.delete("/delete/:id", authenticate, async (req, res) => {
  const _id = req.params.id;

  try {
    await CartModel.findOneAndDelete({ _id });
    res.send({ msg: `Product with id:${_id} has been deleted` });
  } catch (e) {
    return res.status(400).send(e.message);
  }
});

module.exports = { cartRoute };

