import request from "supertest";
import express from "express";
import router from "../../router";
import CategoryManagementService from "../../../service/category-management/category-management-service";

const app = new express();
app.use("/", router);

jest.mock("../../../service/category-management/category-management-service");

describe("category-management route", () => {
  describe("category-management get all products function", () => {
    let mockGetAllCategory;
    beforeEach(() => {
      mockGetAllCategory = jest.fn().mockReturnValue([
        {
          _id: "1",
          name: "Matilda",
          price: 1140,
          productImage: "uploads/matilda.jpeg",
          title: "Matilda",
          category: "Childrens Books",
          __v: 0,
        },
        {
          _id: "3",
          name: "Bridge to Terabithia",
          price: 2000,
          productImage: "uploads/Bridge to Terabithia.jpg",
          title: "Bridge to Terabithia",
          category: "Adventure fiction",
          __v: 0,
        },
      ]);
    });

    test("get all products by category", async () => {
      CategoryManagementService.getAllCategories = mockGetAllCategory;

      const response = await request(app)
        .get(`/categories`)
        .set("Accept", "application/json");
      expect(response.status).toEqual(200);
      expect(response.body).toBeDefined();
    });
  });
});
