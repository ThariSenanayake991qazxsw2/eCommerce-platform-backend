import ProductManagementDao from "../../../dao/product-management/product-management-dao";
import ProductManagementService from "../../../service/product-management/product-management-service";

jest.mock("../../../dao/product-management/product-management-dao");

let getAllProductsMockFunc;
let createProductMockFunc;

beforeEach(() => {
  getAllProductsMockFunc = jest.fn().mockReturnValueOnce([
    {
      _id: "1",
      name: "Matilda",
      price: 1140,
      productImage: "uploads/matilda.jpeg",
      title: "Matilda",
      category: "Childrens Books",
    },
    {
      _id: "2",
      name: "Lord of the Flies",
      price: 3000,
      productImage: "uploads/Lord of the Flies",
      title: "Lord of the Flies",
      category: "Adventure fiction",
    },
    {
      _id: "3",
      name: "Bridge to Terabithia",
      price: 2000,
      productImage: "uploads/Bridge to Terabithia.jpg",
      title: "Bridge to Terabithia",
      category: "Adventure fiction",
    },
  ]);

  createProductMockFunc = jest.fn().mockReturnValueOnce([
    {
      id: 8,
      name: "sample product",
      price: 350,
      qty: 1,
      category: "sample category",
      cover: "../images/product/sample.jpg",
      desc: "",
    },
  ]);
});

describe("getAllProducts from service", () => {
  describe("With valid inputs", () => {
    test("get All Products should call with out any error", async () => {
      ProductManagementDao.getAllProducts = getAllProductsMockFunc;
      const response = await ProductManagementService.getAllProducts();
      expect(response).toBeDefined();
    });
  });
});

describe("createProduct from service", () => {
  describe("With valid inputs", () => {
    test("create Product should call with out any error", async () => {
      const request = {
        id: 8,
        name: "sample product",
        price: 350,
        qty: 1,
        category: "sample category",
        cover: "../images/product/sample.jpg",
        desc: "",
      };
      ProductManagementDao.createProduct = createProductMockFunc;
      const response = await ProductManagementService.createProduct(request);
      expect(response).toBeDefined();
    });
  });
});
