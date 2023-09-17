import { NextResponse } from "next/server";
// import { products } from "../../data.json";

// http://localhost:3000/api/products/productId
export async function GET(request) {
  console.log(request);
  const query = new URLSearchParams(request.url);
  const id = query.get("productId");
  //   const product = products.find((p) => p.id === id);
  //   return new NextResponse(JSON.stringify(product));
}
