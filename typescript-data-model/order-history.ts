interface Items {
  itemName: string;
  itemCost: number;
  seller: string;
  returnDate: string;
}

interface Orders {
  orderPlaced: string;
  orderTotal: number;
  shipTo: string;
  orderId: string;
  orderItems: Items[];
}

const orderHistory: Orders[] = [
  {
    orderPlaced: '07/03/2020',
    orderTotal: 138.93,
    shipTo: 'JS Masher',
    orderId: '113-2883177-2648248',
    orderItems: [
      {
        itemName: 'GameCube Controller',
        itemCost: 94.95,
        seller: 'Nintendo',
        returnDate: '08/04/2020',
      },
      {
        itemName: 'The Art of Sql',
        itemCost: 33.99,
        seller: 'Stephane Faroult',
        returnDate: '08/04/2020',
      },
    ],
  },
  {
    orderPlaced: '07/04/2020',
    orderTotal: 17.22,
    shipTo: 'JS Masher',
    orderId: '114-2875557-9059409',
    orderItems: [
      {
        itemName: 'GameCube Controller Adapter',
        itemCost: 15.98,
        seller: 'CLOUDREAM',
        returnDate: '08/05/2020',
      },
    ],
  },
  {
    orderPlaced: '07/19/2020',
    orderTotal: 44.53,
    shipTo: 'JS Masher',
    orderId: '113-9984268-1280257',
    orderItems: [
      {
        itemName: 'The Timeless Way of Building',
        itemCost: 41.33,
        seller: 'Christopher Alexander',
        returnDate: '08/19/2020',
      },
    ],
  },
  {
    orderPlaced: '08/04/2020',
    orderTotal: 34.0,
    shipTo: 'JS Masher',
    orderId: '114-3941689-8772232',
    orderItems: [
      {
        itemName: 'JavaScript for impatient programmers',
        itemCost: 31.55,
        seller: 'Dr. Axel Rauschmayer',
        returnDate: '09/07/2020',
      },
    ],
  },
];

console.log(
  `Order 1 items: ${orderHistory[0].orderItems[0].itemName}, ${orderHistory[0].orderItems[1].itemName}`
);
console.log(`Order 1 total: $${orderHistory[0].orderTotal}`);
console.log(`Order 2 items: ${orderHistory[1].orderItems[0].itemName}`);
console.log(`Order 2 total: $${orderHistory[1].orderTotal}`);
console.log(`Order 3 items: ${orderHistory[2].orderItems[0].itemName}`);
console.log(`Order 3 total: $${orderHistory[2].orderTotal}`);
console.log(`Order 4 items: ${orderHistory[3].orderItems[0].itemName}`);
console.log(`Order 4 total: $${orderHistory[3].orderTotal}`);
