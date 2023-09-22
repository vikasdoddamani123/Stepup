

const { exec } = require("child_process");
const Product = require("../../Models/productModel/productsModel");

 

const multer = require('multer');

 

const path = require('path');

 

const { v4: uuidv4 } = require('uuid');

 

 

 

 

 

 

 

const storage = multer.diskStorage({

 

    destination: path.join("public/images"),

 

    filename: function (req, file, cb) {

 

        cb(null, file.fieldname + "" + Date.now() + path.extname(file.originalname));

 

    }

 

});

 

const upload = multer({

 

    storage: storage,

 

    limits: { fileSize: 1000000 }

 

}).fields([

 

    { name: "registerPhoto", maxCount: 1 }

 

]);

 

 

 

const create_product = async (req, res) => {

 

    try {

 

      upload(req, res, async (err) => {

 

        if (err) {

 

            console.error('Multer error:', err);

 

            return res.status(400).json({ error: 'File upload failed' });

 

        }

 

        if (!req.files) {

 

          return res.status(400).json({ error: 'No files uploaded' });

 

        }

 

   

 

 

 

        if (!req.files.registerPhoto) {

 

          return res.status(400).json({ error: 'Both registerPhoto are required' });

 

        };

 

          const product = new Product({ ...req.body });

 

 

 

 

 

          product.registerPhoto = {

 

            data: req.files.registerPhoto[0].buffer,

 

            contentType: req.files.registerPhoto[0].mimetype,

 

            path: path.join("public", "images", req.files.registerPhoto[0].filename),

 

          }

 

   

 

        console.log('Files uploaded successfully');

 

 

 

        product.save()

 

        .then((savedProduct) => {

 

            console.log('product saved successfully:', savedProduct);

 

            res.send(savedProduct);

 

        })

 

       

 

      .catch((error) => {

 

            console.log('Database save error', error);

 

            res.status(500).send('Failed to save data');    

 

        });

 

    });

 

} catch (error) {

 

    console.error('Create product error:', error);

 

    res.status(500).json({ error: 'Failed to create data' });

 

}

 

};

 

 

 

 const show_product = async (req, res) => {

 

    try{

 

        const products= await Product.find().exec();

 

        res.json(products);

 

    }

 

    catch(error){

 

        console.log("Error in CRUD index method", error)

 

        res.status( 500).json({

 

            error:'internal server error'

 

        })

 

    }

 

        };

 

 

 

 

 

const update_product = async(req, res) => {

 

    try{

 

    // Find an instance of the CRUD model by its id and update it with the request body

 

     await Product.findByIdAndUpdate(req.params.id, req.body)

 

 

 

            // Respond with a success message

 

            res.json("Product updated");

 

 

 

 

 

    }

 

        catch(err) {

 

            // If there is an error while updating, respond with a 422 status code and an error message

 

            res.status(422).send("product update failed.");

 

 

 

    }

 

};

 

 

 

 

 

const delete_product = async(req, res) => {

 

    // Find an instance of the CRUD model by its id

 

    try{

 

    const product= await Product.findById(req.params.id)

 

        if (!product) {

 

            // If no instance is found, respond with a 404 status code and an error message

 

            res.status(404).send("Crud not found");

 

        } else {

 

            // If an instance is found, delete it from the database

 

            await Product.findByIdAndRemove(req.params.id)

 

            }

 

    }

 

    catch(error)

 

    {

 

        console.log(error);

 

    }};
	const product_display = async(req, res) => {
		try
		{
			const product = await Product.find().exec();
			res.json(product);
		}
		catch(error)
		{
			console.error("Error in seller index method",error)
			res.status(500).json({
				error:'internal server error from controller'
			});
		}
	};

 

 

 

 

 

module.exports = {

 

 

    create_product,

 

    show_product,

 

    update_product,

 

    delete_product,
	product_display ,

 

};