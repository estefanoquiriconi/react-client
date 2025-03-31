import { ActionFunctionArgs, redirect } from 'react-router-dom';
import { deleteProduct } from '../services/ProductService';

export const deleteProductAction = async ({ params }: ActionFunctionArgs) => {
  if (!params.id) return;

  await deleteProduct(+params.id);

  return redirect('/');
};
