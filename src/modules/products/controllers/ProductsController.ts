import { Request, Response } from 'express';
import CreateProductService from '../services/CreateProductService';

export default class ProductController {
  //Método create => responde a rota POST /products
  public async create(request: Request, response: Response) {
    const { name, price, quantity } = request.body;

    const createProduct = new CreateProductService();

    const product = await createProduct.execute({
      name,
      price,
      quantity,
    });
    return response.json(product);
  }
}
