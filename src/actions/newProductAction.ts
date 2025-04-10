import { ActionFunctionArgs, redirect } from 'react-router-dom';
import { addProduct } from '../services/ProductService';

export const newProductAction = async ({ request }: ActionFunctionArgs) => {
  const data = Object.fromEntries(await request.formData());

  const error: string = Object.values(data).some((value) => value === '')
    ? 'Todos los campos son obligatorios'
    : '';

  if (error) return error;

  await addProduct(data);

  return redirect('/');
};
