const { Router } = require("express");
const { categoryController } = require("../controllers/category.controller");

const router = Router();

router.post("/categoryAdd", categoryController.addCategory);
router.patch("/category/:id", categoryController.editCategory);
router.delete("/category/:id", categoryController.deleteCategory);

module.exports = router;
