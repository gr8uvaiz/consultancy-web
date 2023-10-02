const Service = require('../models/service');
const Cart = require('../models/cart');
let total = 0;
module.exports.cart = async function(req, res) {
  const service = await Service.findById(req.params.id);
  let cartData = await Cart.findOne({head: service.head});

  if (!cartData) {
    // If the service is not in the cart, add it
    cartData = await Cart.create({
      head: service.head,
      content: service.content,
      price: service.price,
    });
  }

  // Calculate the total for all items in the cart (for this example, we are fetching all the items, though this might not be efficient for a real-world application with many items)
  const allItems = await Cart.find({});
  total = allItems.reduce((acc, item) => acc + item.price, 0);

  res.render('cart', {
    title: "Checkout | Consult Pro",
    services: allItems,
    total: total,
  });
}


module.exports.delete = async function(req,res){
    const cart = await Cart.findOneAndDelete(req.params.id);
    const allItems = await Cart.find({});
    total = allItems.reduce((acc, item) => acc + item.price, 0);
    if(!cart) res.redirect('/');
    return res.redirect('/checkout')
}

module.exports.goCart = async function(req,res){
    const cart = await Cart.find({});
    const allItems = await Cart.find({});
    total = allItems.reduce((acc, item) => acc + item.price, 0);
    res.render('cart',{
        title: 'Checkout | Consult Pro',
        services: cart,
        total: total,
    })
}
