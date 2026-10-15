import { Page } from "@playwright/test";

export class ProductPage {

  constructor(private page: Page) {}

  async addToCart() {

    this.page.once(
      "dialog",
      dialog => dialog.accept()
    );

    await this.page.locator(
      "a.btn-success"
    ).click();
  }
}