const Admin = require('../../Models/adminModel/adminModel');
let admincreated = false;

const adminpost = async () =>
{
    const adminDefault =[
        {firstName : "Karthik", Lastname:"CL", key:"karthi@gmail.com", password:"7845125"}
   
    ];

    try{
        if(!admincreated){
            const CreatedAdmin = await Admin.create(adminDefault);
            console.log('Default Admin created:',CreatedAdmin);
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
        const admins = await Admin.find().exec();
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

		const admin = await Admin.findOne({ $and: [{ key }, { password }] });
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
