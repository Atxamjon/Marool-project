import axios from "axios";
import Image from "next/image";

async function getProducts(id) {
  try {
    const res = await axios.get(
      `http://localhost:3000/api/products/?productId=${id}`
    );
    return res.data;
  } catch (e) {
    console.log(e);
  }
}

const ProductDetails = async ({ params: { productId } }) => {
  const product = await getProducts(productId);
  return (
    <div className="container mx-auto">
      <div key={product.id} className="relative ">
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
    </div>
  );
};

export default ProductDetails;
