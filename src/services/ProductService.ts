import { safeParse } from 'valibot';
import { DraftProductSchema } from '../types';
import axios from 'axios';

interface ProductData {
  [k: string]: FormDataEntryValue;
}

export async function addProduct(data: ProductData) {
  try {
    const result = safeParse(DraftProductSchema, {
      name: data.name,
      price: +data.price,
    });
    if (result.success) {
      const url = `${import.meta.env.VITE_API_URL}/api/products`;
      const { data } = await axios.post(url, {
        name: result.output.name,
        price: result.output.price,
      });
      console.log(data);
    } else {
      throw new Error('Datos no válidos');
    }
  } catch (err) {
    console.error(err);
  }
}
