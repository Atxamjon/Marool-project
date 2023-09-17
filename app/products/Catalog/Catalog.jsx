// "use client";
// import { useState } from "react";
// import React, { useEffect } from "react";
// import axios from "axios";
// import Image from "next/image";

// async function getProducts() {
//   try {
//     const res = await axios.get("http://localhost:3000/api/products");
//     return res.data;
//   } catch (e) {
//     console.log(e);
//   }
// }

// const CatalogCarusel = () => {
//   const [products, setProducts] = useState([]);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const fetchData = async () => {
//       const data = await getProducts();
//       setProducts(data);
//     };
//     fetchData();
//   }, []);

//   const handleClickNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
//   };

//   const handleClickPrev = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? products.length - 1 : prevIndex - 1
//     );
//   };

//   return (
//     <div className="container mx-auto d-flex z-auto ">
//       <div className="cards flex gap-8 justify-center flex-wrap">
//         {products.map((product, index) => (
//           <div
//             key={product.id}
//             className={`relative transition-opacity duration-500 ${
//               index === currentIndex ? "opacity-100" : "opacity-0"
//             }`}
//           >
//             <div>
//               <Image
//                 src={product.img}
//                 alt={product.name}
//                 width={270}
//                 height={350}
//               />
//             </div>
//             <div className="absolute bottom-0 left-0 px-5 pb-5 w-full">
//               <div className="flex justify-between mb-2.5">
//                 <p>{product.name}</p>
//                 <p>{product.price}</p>
//               </div>
//               <div className="flex justify-between text-color-third">
//                 <p>{product.use}</p>
//                 <p>{product.quantity}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="flex justify-center mt-4">
//         <button
//           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-2"
//           onClick={handleClickPrev}
//         >
//           Previous
//         </button>
//         <button
//           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4"
//           onClick={handleClickNext}
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CatalogCarusel;

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
    <div className="container mx-auto  mt-20 mb-20">
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
