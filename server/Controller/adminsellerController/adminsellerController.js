const SellerAdmin = require('../../Models/selleradminModel/selleradminmodel');
let selleradmincreated = false;

const adminpost = async () =>
{
    const selleradminDefault =[
        {firstName : "Karthik",MiddleName:"C", Lastname:"L", key:"karthik@gmail.com", password:"895623"}
   
    ];

    try{
        if(!selleradmincreated){
            const CreatedAdmin = await SellerAdmin.create(selleradminDefault);
            console.log('Default SellerAdmin created:',CreatedAdmin);
        }
        else{
            console.log("Admin already created");
        }

    }
    catch(error)
    {
        console.error('Error creating default Admin:', error);
    }
    
};

const admin_index = async (req, res) => {
    try{
        const admins = await SellerAdmin.find().exec();
        res.json(admins);
    }
    catch(error){
        console.error("Error in admin index method" , error)
        res.status(500).json({
            error:'internal server error'
        });
    }
};

const admin_login_validate = async (req, res) => {
	try {
		const { key, password } = req.body;
		if (!key || !password) {
			return res.status(400).json({ error: 'Key and password are required' });
		}

		const admin = await SellerAdmin.findOne({ $and: [{ key }, { password }] });
		if (!admin) {
			return res.status(401).json({ error: 'Invalid credentials' });
		}
		return res.status(200).json({ message: 'Login successful' });

	} catch (error) {
		console.error('Login failed in server', error);
		return res.status(500).json({ error: 'An unexpected error occurred' });
	}
};



module.exports = {
    adminpost,
    admin_index,
    admin_login_validate

}
