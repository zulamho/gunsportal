const { Router } = require("express");
const { weaponController } = require("../controllers/weapon.controller");

const router = Router();

router.post("/addWeapon", weaponController.addWeapon);
router.get("/", weaponController.getWeapons);
router.get("/:id", weaponController.getWeapon);
router.delete("/:id", weaponController.deleteWeapon);
router.patch("/:id", weaponController.editWeapon);

module.exports = router;
