import Product from './model/product';

const getProducts = async (req, res) => {
  try {
    const query = req.params; // ?name=halo&price=36 => { name: 'halo', price: 46 }
    const products = await Product.find({});

    res.status(200).json(products);
  } catch (error) {
    console.log('error ', error);
    process.exit(1);
  }
};

const getOneProduct = async (req, res) => {
  try {
    await Product.find({});
  } catch (error) {
    console.log('error ', error);
    process.exit(1);
  }
};
export { getProducts };
