import { createBrowserRouter } from 'react-router-dom';

import Layout from './layouts/Layout';
import NewProduct from './views/NewProduct';
import Product from './views/Products';
import EditProduct from './views/EditProducts';

import { newProductAction } from './actions';
import { productLoader } from './loaders';
import { editProductLoader } from './loaders';
import { editProductAction } from './actions';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Product />,
        loader: productLoader,
      },
      {
        path: 'productos/nuevo',
        element: <NewProduct />,
        action: newProductAction,
      },
      {
        path: 'productos/:id/editar', //ROA Pattern - Resource Oriented Design
        element: <EditProduct />,
        loader: editProductLoader,
        action: editProductAction,
      },
    ],
  },
]);
