const { userExit, productExit, orderExit } = require("../utils");

//Test cases for User exists method
test("userExit function when user exists", async () => {
  const userInfo = [
    {
      email: "user@gmail.com",
      password: "$2b$10$4dkO/tDzgK4gXnXA3o3kO.Z1lcKuodHUx8mvO4Dhig.VAfFZBgOWa",
    },
  ];
  const response = await userExit(userInfo);
  expect(response).toBeTruthy();
});

test("userExit function when user doesn't exists", async () => {
  const userInfo = [];
  const response = await userExit(userInfo);
  expect(response).toBeFalsy();
});

//Test cases for Product exists method
test("productExit function when product exists", async () => {
  const response = [
    {
      _id: "6549cc97fc014bddf902d1aa",
      id: "1",
      name: "Matilda",
      price: 1140,
      qty: 1,
      category: "Childrens Books",
      cover: "../images/product/matilda.jpeg",
      desc: "Matilda is a 1988 children's novel by British author Roald Dahl. It was published by Jonathan Cape.",
      __v: 0,
    },
  ];
  const productExitresponse = await productExit(response);
  expect(productExitresponse).toBeTruthy();
});

test("productExit function when product doesn't exists", async () => {
  const response = [];
  const productExitresponse = await productExit(response);
  expect(productExitresponse).toBeFalsy();
});

//Test cases for Product exists method
test("orderExit function when orders exists to specific user", async () => {
  const response = [
    {
      "_id": {
        "$oid": "654a43cd9409dc66dea9eff2"
      },
      "userId": "6549d0be574871dd1c919f23",
      "cartProducts": [
        {
          "id": "3",
          "price": 3000,
          "quantity": 1,
          "totalPrice": 3000,
          "name": "Lord of the Flies",
          "cover": "../images/product/Lord of the Flies"
        },
        {
          "id": "7",
          "price": 1500,
          "quantity": 2,
          "totalPrice": 3000,
          "name": "The Worst Witch",
          "cover": "../images/product/The Worst Witch.jpg"
        },
        {
          "id": "8",
          "price": 1100,
          "quantity": 1,
          "totalPrice": 1100,
          "name": "The Little Prince",
          "cover": "../images/product/The Little Prince"
        }
      ],
      "totalPrice": 7100,
      "__v": 0
    },
  ];
  const orderExitresponse = await orderExit(response);
  expect(orderExitresponse).toBeTruthy();
});

test("orderExit function when orders doesn't exists to specific user", async () => {
  const response = [];
  const orderExitresponse = await orderExit(response);
  expect(orderExitresponse).toBeFalsy();
});
