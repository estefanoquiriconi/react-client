import { getProducts } from '../services/ProductService';

export async function productLoader() {
  const products = await getProducts();

  return products;
}
