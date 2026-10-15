import { Page } from "@playwright/test";

export class CartPage {

  constructor(private page: Page) {}

  async openCart() {
    await this.page.click("#cartur");
  }

  async placeOrder() {
    await this.page.click(
      "button[data-target='#orderModal']"
    );
  }
}