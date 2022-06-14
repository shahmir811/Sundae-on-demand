// src/mocks/handlers.js
import { rest } from 'msw';

export const handlers = [
	// Handles a GET /user request
	rest.get('http://localhost:3030/scoops', (req, res, ctx) => {
		return res(
			ctx.json([
				{
					name: 'Mint chip',
					imagePath: '/images/mint-chip.png',
				},
				{
					name: 'Vanilla',
					imagePath: '/images/vanilla.png',
				},
				{
					name: 'Chocolate',
					imagePath: '/images/chocolate.png',
				},
				{
					name: 'Salted caramel',
					imagePath: '/images/salted-caramel.png',
				},
			]),
			rest.get('http://localhost:3030/toppings', (req, res, ctx) => {
				return res(
					ctx.json([
						{ name: 'Cherries', imagePath: '/images/cherries.png' },
						{ name: 'M&Ms', imagePath: '/images/m-and-ms.png' },
						{ name: 'Hot fudge', imagePath: '/images/hot-fudge.png' },
					])
				);
			}),
			rest.post('http://localhost:3030/order', (req, res, ctx) => {
				return res(ctx.json({ orderNumber: 123455676 }));
			})
		);
	}),
];
