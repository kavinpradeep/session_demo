
/*
 * GET users listing.
 */

exports.list = function(req, res){
  res.send("respond with a resource");
};

exports.updatesession = function(req, res){
	  
	  req.session.cart = req.body.cart;
	  req.session.carttotal = req.body.carttotal;
	  console.log(req.session.cart);
	  console.log(req.session.carttotal);
	  res.send("respond with a resource");
};

exports.getCartDetails = function(req, res){
	 var obj = new Object();
	 obj.cart = req.session.cart;
	 obj.carttotal = req.session.carttotal;
	  console.log(JSON.stringify(obj));
	  
	 res.send(obj);
};
