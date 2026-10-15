import { APIRequestContext } from "@playwright/test";

export class OrderClient {

  private readonly baseUrl =
    "https://petstore3.swagger.io/api/v3";

  constructor(
    private request: APIRequestContext
  ) {}

  async createOrder(order: any) {

  const response = await this.request.post(
    `${this.baseUrl}/store/order`,
    {
      data: order
    }
  );

  return response;
}
}