import { ActionFunctionArgs } from 'react-router-dom';
import { addProduct } from '../services/ProductService';

export const newProductAction = async ({ request }: ActionFunctionArgs) => {
  const data = Object.fromEntries(await request.formData());

  const error = Object.values(data).some((value) => value === '')
    ? 'Todos los campos son obligatorios'
    : '';

  return error ? error : addProduct(data);
};
