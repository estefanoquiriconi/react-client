import { Link, useLoaderData } from 'react-router-dom';
import { Product } from '../types';
import ProductDetails from '../components/ProductDetails';

export default function Products() {
  const products = useLoaderData() as Product[];
  return (
    <>
      <div className='flex flex-col md:flex-row justify-between items-center'>
        <h2 className='text-3xl md:text-4xl font-black text-slate-500 mb-4 md:mb-0'>Productos</h2>
        <Link
          to={'productos/nuevo'}
          className='rounded bg-indigo-600 p-3 text-sm font-bold text-white shadow-sm hover:bg-indigo-500'>
          Agregar Producto
        </Link>
      </div>
      <div className='p-2'>
        <div className='overflow-x-auto'>
          <table className='min-w-full mt-5 table-auto'>
            <thead className='bg-slate-800 text-white'>
              <tr>
                <th className='p-2 text-left'>Producto</th>
                <th className='p-2 text-left'>Precio</th>
                <th className='p-2 text-left'>Disponibilidad</th>
                <th className='p-2 text-left'>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <ProductDetails
                  key={product.id}
                  product={product}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
