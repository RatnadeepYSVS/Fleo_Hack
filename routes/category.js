const router = require('express').Router()
const categories = require('../controllers/category')
router.post("/create_cat", categories.createCategory)
router.put("/update_cat/:id", categories.updateCategory)
router.post("/create_child", categories.createChild)
router.get("/get_children/:id", categories.getChildren)

module.exports = router