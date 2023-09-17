import axios from "axios";
import Image from "next/image";

async function getProducts() {
  try {
    const res = await axios.get("http://localhost:3000/api/products");
    return res.data;
  } catch (e) {
    console.log(e);
  }
}

const Products = async () => {
  const products = await getProducts();
  return (
    <div className="container mx-auto">
      <div className="cards flex gap-8 justify-center flex-wrap">
        {products.map((product) => (
          <div key={product.id} className="relative">
            <div>
              <Image
                src={product.img}
                alt={product.name}
                width={270}
                height={350}
              />
            </div>
            <div className="absolute bottom-0 left-0 px-5 pb-5 w-full">
              <div className="flex justify-between mb-2.5">
                <p>{product.name}</p>
                <p>{product.price}</p>
              </div>
              <div className="flex justify-between text-color-third">
                <p>{product.use}</p>
                <p>{product.quantity}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
