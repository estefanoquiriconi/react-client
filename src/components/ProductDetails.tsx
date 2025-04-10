import { Form, useFetcher, useNavigate } from 'react-router-dom';
import { Product } from '../types';
import { formatCurrency } from '../utils';

interface ProductDetailsProps {
  product: Product;
}

export default function ProductDetails({ product }: ProductDetailsProps) {
  const navigate = useNavigate();
  const fetcher = useFetcher();

  return (
    <tr className='border-b '>
      <td className='p-3 text-lg text-gray-800'>{product.name}</td>
      <td className='p-3 text-lg text-gray-800'>
        {formatCurrency(product.price)}
      </td>
      <td className='p-3 text-lg text-gray-800'>
        <fetcher.Form method='POST'>
          <button
            type='submit'
            name='id'
            value={product.id}
            className={`${
              product.isAvailable ? 'text-black' : 'text-red-600'
            } rounded-lg p-2 text-xs uppercase font-bold w-full border border-black-100 hover:cursor-pointer`}>
            {product.isAvailable ? 'Disponible' : 'No disponible'}
          </button>
        </fetcher.Form>
      </td>
      <td className='p-3 text-lg text-gray-800 '>
        <div className='flex gap-2 items-center'>
          <button
            onClick={() => navigate(`productos/${product.id}/editar`)}
            className='bg-indigo-600 text-white rounded-lg w-full p-2 uppercase font-bold text-xs text-center'>
            Editar
          </button>
          <Form
            className='w-full'
            method='POST'
            onSubmit={(e) => {
              if (!confirm('¿Eliminar?')) {
                e.preventDefault();
              }
            }}
            action={`productos/${product.id}/eliminar`}>
            <input
              className='bg-red-600 text-white rounded-lg w-full p-2 uppercase font-bold text-xs text-center'
              type='submit'
              value='Eliminar'
            />
          </Form>
        </div>
      </td>
    </tr>
  );
}
