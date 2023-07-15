import express from "express";
const router = express.Router();
import pizzas from "../controller/pizzaController";
import singleupload from "../utils/Multer";

//get all data
router.get("/getpizza", pizzas.getpizza);

//upload pizza data
router.post("/uploadpizza", singleupload.single("file"), pizzas.uploadpizza);

// this is for single element...
router.get("/getpizza/:id", pizzas.getsinglepizza);

router.post("/getpizza/cart-items", pizzas.getPizzas);

export default router;
