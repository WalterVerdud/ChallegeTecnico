import { Page } from "@playwright/test";

export class HomePage {

  constructor(private page: Page) {}

  async navigate() {

    await this.page.goto("/");
  }

  async getProducts() {

    return await this.page.locator(
      ".card"
    ).all();
  }

  async clickNext() {

    await this.page.locator("#next2")
      .click();

    await this.page.waitForTimeout(2000);
  }

}