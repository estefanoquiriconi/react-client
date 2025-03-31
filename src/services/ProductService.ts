import axios from 'axios';
import { safeParse } from 'valibot';

import {
  DraftProductSchema,
  Product,
  ProductSchema,
  ProductsSchema,
} from '../types';

const API_URL = `${import.meta.env.VITE_API_URL}/api/products`;

interface ProductFormData {
  [k: string]: FormDataEntryValue;
}

/**
 * Adds a new product
 *
 * @param {ProductFormData} data - The product data to be added, containing the name and price.
 * @returns {Promise<void>} A promise that resolves when the product has been added.
 * @throws {Error} Throws an error if the product data is invalid or if there is an issue with the API request.
 */
export async function addProduct(data: ProductFormData): Promise<void> {
  try {
    const result = safeParse(DraftProductSchema, {
      name: data.name,
      price: +data.price,
    });

    if (!result.success)
      throw new Error('Los datos del producto no son válidos');

    await axios.post(API_URL, result.output);
  } catch (error) {
    console.error(`Error al agregar el producto: ${error}`);
  }
}

/**
 * Fetches the list of products from the API.
 *
 * @returns {Promise<Product[] | undefined>} A promise that resolves to an array of products.
 * @throws {Error} Throws an error if the API response is not in the expected format or if there is an issue with the API request.
 */
export async function getProducts(): Promise<Product[] | undefined> {
  try {
    const { data } = await axios.get(API_URL);

    const result = safeParse(ProductsSchema, data.data);
    if (!result.success)
      throw new Error('La respuesta de la API no tiene el formato esperado.');

    return result.output;
  } catch (error) {
    console.error(`Error al obtener los productos: ${error}`);
  }
}

/**
 * Fetches a product by its ID from the API.
 *
 * @param {Product['id']} id - The ID of the product to fetch.
 * @returns {Promise<Product | undefined>} A promise that resolves to the product if found, or undefined if not.
 * @throws {Error} Throws an error if the API response is not in the expected format or if there is an issue with the API request.
 */
export async function getProductsById(
  id: Product['id']
): Promise<Product | undefined> {
  try {
    const { data } = await axios.get(`${API_URL}/${id}`);

    const result = safeParse(ProductSchema, data.data);
    if (!result.success)
      throw new Error('La respuesta de la API no tiene el formato esperado.');

    return result.output;
  } catch (error) {
    console.error(`Error al obtener el producto: ${error}`);
  }
}

/**
 * Edits a product by its ID.
 *
 * @param {Product['id']} id - The ID of the product to edit.
 * @param {ProductFormData} data - The data to update the product with.
 * @returns {Promise<void>} A promise that resolves when the product has been successfully edited.
 * @throws {Error} Throws an error if the provided data is invalid or if there is an issue with the API request.
 */
export async function updateProduct(
  id: Product['id'],
  data: ProductFormData
): Promise<void> {
  try {
    const result = safeParse(DraftProductSchema, {
      name: data.name,
      price: +data.price,
    });

    if (!result.success)
      throw new Error('Los datos del producto no son válidos');

    await axios.put(`${API_URL}/${id}`, result.output);
  } catch (error) {
    console.error(`Error al editar el producto: ${error}`);
  }
}
