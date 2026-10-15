import { test, expect }
from "@playwright/test";

import { HomePage }
from "../pages/HomePage";

import { ProductPage }
from "../pages/ProductPage";

import { CartPage } from "../pages/CartPage";

import { PlaceOrderModal }
from "../pages/PlaceOrderModal";

test(
  "Complete purchase flow",
  async ({ page }) => {

    const home =
      new HomePage(page);

    const product =
      new ProductPage(page);

   const cart = new CartPage(page);

    const modal =
      new PlaceOrderModal(page);

    await home.navigate();

    await page.click(
      "text=Samsung galaxy s6"
    );

    await product.addToCart();

    await cart.openCart();

    await cart.placeOrder();

    await modal.completeOrder();

    await expect(
      page.locator(
        ".sweet-alert"
      )
    )
    .toContainText(
      "Texto Incorrecto"  //Texto Incorrecto Thank you for your purchase!
    );

  });