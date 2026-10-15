import { test } from "@playwright/test";

import { HomePage }
    from "../pages/HomePage";

import { FileManager } from "../utils/FileManager";

test(
    "Extract products from first 2 pages",
    async ({ page }) => {

        const home =
            new HomePage(page);

        await home.navigate();

        let productsData = "";

        for (let pageNumber = 1;
            pageNumber <= 2;
            pageNumber++) {

            const cards =
                await home.getProducts();

            for (const card of cards) {

                const name =
                    await card
                        .locator(".hrefch")
                        .textContent();

                const price =
                    await card
                        .locator("h5")
                        .textContent();

                const link =
                    await card
                        .locator(".hrefch")
                        .getAttribute("href");

                productsData +=
                    `${name} | ${price} | ${link}\n`;
            }
            ``

            if (pageNumber === 1) {

                await home.clickNext();

            }
        }

        FileManager.saveProducts(
            productsData
        );
    }
);
``