import { createBrowserRouter } from 'react-router-dom';

import Layout from './layouts/Layout';
import NewProduct from './views/NewProduct';
import Product from './views/Products';
import EditProduct from './views/EditProducts';

import { productLoader, editProductLoader } from './loaders';
import {
  newProductAction,
  editProductAction,
  updateAvailabilityAction,
  deleteProductAction,
} from './actions';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Product />,
        loader: productLoader,
        action: updateAvailabilityAction,
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
      {
        path: 'productos/:id/eliminar',
        action: deleteProductAction,
      },
    ],
  },
]);
