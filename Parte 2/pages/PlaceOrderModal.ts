import { Page } from "@playwright/test";

export class PlaceOrderModal {

  constructor(private page: Page) {}

  async completeOrder() {

    await this.page.fill(
      "#name",
      "Walter"
    );

    await this.page.fill(
      "#country",
      "Argentina"
    );

    await this.page.fill(
      "#city",
      "La Rioja"
    );

    await this.page.fill(
      "#card",
      "4111111111111111"
    );

    await this.page.fill(
      "#month",
      "10"
    );

    await this.page.fill(
      "#year",
      "2026"
    );

    await this.page.click(
      "button[onclick='purchaseOrder()']"
    );
  }

}