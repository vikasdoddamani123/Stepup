const Seller = require("../../Models/sellerModel/sellerModel");
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const uuid = require("uuidv4");


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

const fileFilter = (req, file, cb) => {
    const allowedFileTypes = ['images/jpeg', 'images/jpg', 'images/png'];
  
    if (allowedFileTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(null, false);
    }
  };
  
  const storage = multer.diskStorage({
      destination: path.join("public/images"),
      filename: function (req, file, cb) {
        cb(null, file.fieldname  + Date.now() + path.extname(file.originalname));
      }
    });
  
    const upload = multer({
      storage: storage,
      limits: { fileSize: 1000000 }, 
    }).fields([
      { name: "adharNumber", maxCount: 1 },
      { name: "pancard", maxCount: 1 },
	  { name: "registeredCopy", maxCount: 1 }
    ]);


const seller_create_post = (req, res) => {
	
	try{

		upload(req, res, async (err) => {
			if (err) {
			  console.error('Multer error:', err);
			  return res.status(400).json({ error: 'File upload failed' });
			}
	
			if (!req.files) {
			  return res.status(400).json({ error: 'No files uploaded' });
			}
	  
	   
	  
			if (!req.files.adharNumber) {
			  return res.status(400).json({ error: 'Both adharNumber are required' });
			}
			else if(!req.files.pancard)
			{
			  return res.status(400).json({ error: 'Both pancard are required' });
			}
			else if(!req.files.registeredCopy)
			{
			  return res.status(400).json({ error: 'Both registeredCopy are required' });
			}

			const seller = new Seller({...req.body});

        seller.adharNumber = {
          data: req.files.adharNumber[0].buffer ,
          contentType: req.files.adharNumber[0].mimetype,
          path : path.join("public","images",req.files.adharNumber[0].filename),

        };

        seller.pancard = {
          data: req.files.pancard[0].buffer ,
          contentType: req.files.pancard[0].mimetype,
          path : path.join("public","images",req.files.pancard[0].filename),

        };

		seller.registeredCopy = {
			data: req.files.registeredCopy[0].buffer ,
			contentType: req.files.registeredCopy[0].mimetype,
			path : path.join("public","images",req.files.registeredCopy[0].filename),
  
		  };
    
        console.log('Files uploaded sucessfully');

		if (req.body)

          {
            const randomDigitNumber = 
            Math.random().toString().substr(2, 6);
            seller.firstName=req.body.firstName;
            seller.lastName=req.body.lastName;
            seller.PhoneNumber=req.body.PhoneNumber;
            seller.email=req.body.email;
            seller.address1=req.body.address1;
            seller.address2=req.body.address2;
            seller.landMark=req.body.landMark;
            seller.state=req.body.state;
            seller.city=req.body.city;
            seller.pinCode=req.body.pinCode;
            seller.country=req.body.country;
            seller.outletName=req.body.outletName;
            seller.GST_Number=req.body.GST_Number;
            seller.password=req.body.password;
            seller.confirmPassword=req.body.confirmPassword;
            seller.sellerId = randomDigitNumber;
            
          }


          if (req.file) {
            
            seller.adharNumber.data = req.file.buffer;
            seller.adharNumber.contentType = req.file.mimetype;
            const imagePath = path.join("public/images", req.file.filename);
            seller.adharNumber.path = imagePath;
            console.log('File uploaded successfully');

            seller.pancard.data = req.file.buffer;
            seller.pancard.contentType = req.file.mimetype;
            const imagePath1 = path.join("public/images", req.file.filename);
            seller.pancard.path = imagePath1;
            console.log('File uploaded successfully');

			seller.registeredCopy.data = req.file.buffer;
            seller.registeredCopy.contentType = req.file.mimetype;
            const imagePath2 = path.join("public/images", req.file.filename);
            seller.registeredCopy.path = imagePath2;
            console.log('File uploaded successfully');
		  
		  }

		  

			seller
            .save()
            .then((saveSeller) => {
                console.log('Request Body:', req.body);
              console.log('seller saved:', saveSeller);
              res.send(saveSeller);
            })
            .catch((err) => {
              console.error('MongoDB save error:', err);
              res.status(500).send('seller add failed');
            });
          });
       


		} catch (err) {
			console.error('Create seller error:', err);
			res.status(500).json({ error: 'Failed to create seller' });
		  }
	
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