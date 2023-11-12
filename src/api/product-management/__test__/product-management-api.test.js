import request from "supertest";
import express from "express";
import router from "../../router";
import ProductManagementService from "../../../service/product-management/product-management-service";
import * as Auth from "../../../middleware/check-auth";

const app = new express();
app.use("/", router);

jest.mock("../../../service/product-management/product-management-service");
jest.mock("../../../middleware/check-auth");

describe("product-management route", () => {
  describe("product-management get all products function", () => {
    let mockGetAll;

    beforeEach(() => {
      mockGetAll = jest.fn().mockReturnValue([
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
    });

    test("get all products", async () => {
      ProductManagementService.getAllProducts = mockGetAll;

      const response = await request(app)
        .get(`/products`)
        .set("Accept", "application/json");
      expect(response.status).toEqual(200);
      expect(response.body).toBeDefined();
    });
  });

  describe("product-management create product function", () => {
    test("create product request", async () => {
      const mockCheckAuth = jest.spyOn(Auth, "checkAuth");
      mockCheckAuth.mockReturnValue({
        email: "user@gmail.com",
        userId: "63c4d7be0777e51412b35b09",
        iat: 1674046552,
        exp: 1674050152,
      });
      jest.spyOn(ProductManagementService, "createProduct").mockReturnValueOnce(
        Promise.resolve({
          _id: "11",
          name: "The Maid",
          price: 3200,
          productImage: "uploads/The Maid.png",
          category: "Mystery",
          title: "The Maid",
        })
      );

      const response = await request(app)
        .post(`/products`)
        .send({
          _id: "11",
          name: "The Maid",
          price: 3200,
          productImage: "uploads/The Maid.png",
          category: "Mystery",
          title: "The Maid",
        })
        .set("Accept", "application/json");
      expect(response.status).toEqual(201);
      expect(response.body).toBeDefined();
    });
  });
});
