import OrderManagementDao from "../../../dao/order-management/order-management-dao";
import OrderManagementService from "../../../service/order-management/order-management-service";

jest.mock("../../../dao/order-management/order-management-dao");

let getAllOrdersMockFunc;
let createOrderMockFunc;

beforeEach(() => {
  getAllOrdersMockFunc = jest.fn().mockReturnValueOnce([
    {
      _id: {
        $oid: "63c98135d3b1913618d3c3ce",
      },
      cartProducts: [
        {
          id: "2",
          price: 1140,
          quantity: 1,
          totalPrice: 1140,
          name: "Matilda",
          cover: "../images/product/matilda.jpeg",
        },
        {
          id: "3",
          price: 3000,
          quantity: 1,
          totalPrice: 3000,
          name: "Lord of the Flies",
          cover: "../images/product/Lord of the Flies",
        },
      ],
      totalPrice: 4140,
    },
    {
      _id: {
        $oid: "63c98135d3b1913618d3c3ce",
      },
      cartProducts: [
        {
          id: "2",
          price: 1140,
          quantity: 1,
          totalPrice: 1140,
          name: "Matilda",
          cover: "../images/product/matilda.jpeg",
        },
        {
          id: "3",
          price: 3000,
          quantity: 1,
          totalPrice: 3000,
          name: "Lord of the Flies",
          cover: "../images/product/Lord of the Flies",
        },
      ],
      totalPrice: 4140,
    },
  ]);

  createOrderMockFunc = jest.fn().mockReturnValueOnce([
    {
      cartProducts: [
        {
          id: "2",
          price: 1140,
          quantity: 1,
          totalPrice: 1140,
          name: "Matilda",
          cover: "../images/product/matilda.jpeg",
        },
        {
          id: "3",
          price: 3000,
          quantity: 1,
          totalPrice: 3000,
          name: "Lord of the Flies",
          cover: "../images/product/Lord of the Flies",
        },
      ],
      totalPrice: 4140,
    },
  ]);
});

describe("getAllOrders from service", () => {
  describe("With valid inputs", () => {
    test("get All Orders should call with out any error", async () => {
      OrderManagementDao.getAllOrders = getAllOrdersMockFunc;
      const response = await OrderManagementService.getAllOrders();
      expect(response).toBeDefined();
    });
  });
});

describe("createOrder from service", () => {
  describe("With valid inputs", () => {
    test("create Order should call with out any error", async () => {
      const request = {
        cartProducts: [
          {
            id: "2",
            price: 1140,
            quantity: 1,
            totalPrice: 1140,
            name: "Matilda",
            cover: "../images/product/matilda.jpeg",
          },
          {
            id: "3",
            price: 3000,
            quantity: 1,
            totalPrice: 3000,
            name: "Lord of the Flies",
            cover: "../images/product/Lord of the Flies",
          },
        ],
        totalPrice: 4140,
      };
      OrderManagementDao.createOrder = createOrderMockFunc;
      const response = await OrderManagementService.createOrder(request);
      expect(response).toBeDefined();
    });
  });
});
