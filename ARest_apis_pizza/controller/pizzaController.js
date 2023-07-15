import pizzaschema from "../models/pizzaschema";
import cloudinary from "../utils/cloudinary";

const pizzas = {
  async getpizza(req, res) {
    // res.send("this is pizza");
    await pizzaschema
      .find()
      .then((response) => {
        res.json(response);
      })
      .catch((err) => console.log(err));
  },

  async uploadpizza(req, res) {
    const { name, price, size } = req.body; //destructuring(extract) name,price,size from req body

    let newPizza;
    try {
      const file = await cloudinary.v2.uploader.upload(req.file.path);
      // console.log(file);

      newPizza = await pizzaschema.create({
        name,
        price,
        size,
        image: {
          public_id: file.public_id,
          url: file.secure_url,
        },
      });
    } catch (err) {
      console.log(err);
    }
    res.json(newPizza);
  },

  async getsinglepizza(req, res) {
    let doc;
    try {
      doc = await pizzaschema.findOne({ _id: req.params.id });
    } catch (error) {
      console.log(error);
    }
    res.send(doc);
  },

  async getPizzas(req, res) {
    let doc;
    try {
      doc = await pizzaschema.find({
        _id: { $in: req.body.ids },
      });
    } catch (error) {
      console.log(error);
    }
    res.json(doc);
  },
};

export default pizzas;
