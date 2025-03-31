import { LoaderFunctionArgs, redirect } from 'react-router-dom';
import { getProductsById } from '../services/ProductService';

export async function editProductLoader({ params }: LoaderFunctionArgs) {
  console.log(params);
  if (!params.id) return;

  const product = await getProductsById(+params.id);

  if (!product) {
    return redirect('/');
  }

  return product;
}
