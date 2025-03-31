import { ActionFunctionArgs, redirect } from 'react-router-dom';
import { updateProduct } from '../services/ProductService';

export const editProductAction = async ({
  request,
  params,
}: ActionFunctionArgs) => {
  const data = Object.fromEntries(await request.formData());

  const error: string = Object.values(data).some((value) => value === '')
    ? 'Todos los campos son obligatorios'
    : '';

  if (error) return error;

  if (!params.id) return;

  await updateProduct(+params.id, data);

  return redirect('/');
};
