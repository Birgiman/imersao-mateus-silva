import { Router } from 'express';

import { listCategories } from './app/useCases/categories/listCategories';
import { createCategory } from './app/useCases/categories/createCategory';

export const router = Router();

// List categorias;

router.get('/categories', listCategories);

// Create category;

router.post('/categories', createCategory);

// List products;

router.get('/products', (req, res) => {
	res.send('OK');
});

// Create Product;

router.post('/products', (req, res) => {
	res.send('OK');
});

// Get product by category;

router.get('/categories/:categoryId/products', (req, res) => {
	res.send('OK');
});

// List orders;

router.get('/orders', (req, res) => {
	res.send('OK');
});

// Create order;

router.post('/orders', (req, res) => {
	res.send('OK');
});

// Change order status;

router.patch('/orders"/:orderId', (req, res) => {
	res.send('OK');
});

// Delete/cancel order;

router.delete('/orders/:orderId', (req, res) => {
	res.send('OK');
});
