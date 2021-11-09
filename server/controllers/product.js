import ProductModel from "../models/product.js";

export const getProducts = async (req, res) => {
  try {
    const products = await ProductModel.find({
      type: req.query.type,
      kind: req.query.kind,
      province: req.query.province,
      district: req.query.district,
    });
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
