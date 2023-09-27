const User  = require('../../Models/userauthModel/userauthModel')


const user_index = async(req, res) => {
	try
	{
		const users = await User.find().exec();
		res.json(users);
	}
	catch(error)
	{
		console.error("Error in user index method",error)
		res.status(500).json({
			error:'internal server error'
		});
	}
};



// Create New USER
const user_create_post = (req, res) => {
	// Create a new instance of the USER model using the request body as data
	let user = new User(req.body);
	user.save()
		.then((user) => {
			// Send the saved instance of the USER model as the response
			res.send(user);
		})
		.catch(function(err) {
			// If there is an error while saving, respond with a 422 status code and an error message
			res.status(422).send("User add failed");
		});
};


// Show a particular USER Detail by Id
const user_details =async(req, res) => {
	try
	{
		const user = await User.findById(req.params.id);
		if(!user){
			res.status(400).json({error: "sorry invalid id"});
		}
		else{
			res.json(user);
		}
	}
	catch
	{
		res.status(500).json({error: "server error"});
	}
};
module.exports = {
	user_index,
	user_create_post,
    user_details,	
};
