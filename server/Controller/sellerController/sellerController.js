const Seller = require("../../Models/sellerModel/sellerModel")


const seller_index = async(req, res) => {
	try
	{
		const sellers = await Seller.find().exec();
		res.json(sellers);
	}
	catch(error)
	{
		console.error("Error in seller index method",error)
		res.status(500).json({
			error:'internal server error'
		});
	}
};

const seller_create_post = (req, res) => {
	
	let seller = new Seller(req.body);
	seller.save()
		.then((seller) => {
			res.send(seller);
		})
		.catch(function(err) {
			res.status(422).send("seller add failed");
		});
};



const seller_details =async(req, res) => {
	try
	{
		const seller = await Seller.findById(req.params.id);
		if(!seller){
			res.status(400).json({error: "sorry invalid id"});
		}
		else{
			res.json(seller);
		}
	}
	catch
	{
		res.status(500).json({error: "server error"});
	}
};



const seller_update = async(req, res) => {
	try{
		await Seller.findByIdAndUpdate(req.params.id, req.body);
		res.json({message: "seller updated"});
	}
	catch(err)
	{
		res.status(422).json({error: "sorry can't update check controller services"});
	}
};




const seller_delete = async(req, res) => {
	try
	{
		const seller = await Seller.findById(req.params.id);
		if(!seller)
		{
			res.status(404).json({
				'Error': "sorry 404 not found"
			});
		}
		else
		{
			await Seller.findByIdAndRemove(req.params.id);
			res.status(200).json({
				'messege' : "Status is ok"
			});
		}
	}
	catch(error)
	{
		res.status(500).json({
			'error': "server not found"
		});
	}
};



module.exports = {
    seller_index,
    seller_create_post,
    seller_details,
    seller_update,
    seller_delete
}