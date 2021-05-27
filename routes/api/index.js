const router = require("express").Router();
const { Product, Category, Tag } = require("../../models");
const categoryRoutes = require("./category-routes");
const productRoutes = require("./product-routes");
const tagRoutes = require("./tag-routes");

Product.belongsTo(Category, {
  foreignKey: "category_id",
  onDelete: "CASCADE",
});
Category.hasMany(Product, {
  foreignKey: "product_id",
  onDelete: "CASCADE",
});


Product.belongsToMany(Tag,{through: ProductTag})

Tag.belongsToMany(Product,{through: ProductTag})
// Product.belongsToMany(Tag, {
//   foreignKey: "tag_id",
//   onDelete: "CASCADE",
// });

// Tag.belongsToMany(Product, {
//   foreignKey: "product_id",
//   onDelete: "CASCADE",
// });

router.use("/categories", categoryRoutes);
router.use("/products", productRoutes);
router.use("/tags", tagRoutes);

module.exports = router;
