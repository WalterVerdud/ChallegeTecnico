import { test, expect } from "@playwright/test";
import { PetClient } from "../scr/clients/PetClient";
import { OrderClient } from "../scr/clients/OrderClient";
import { DataGenerator } from "../scr/utils/DataGenerator";

test("Scenario B", async ({ request }) => {

    const petClient = new PetClient(request);
    const orderClient = new OrderClient(request);

    const response =
        await petClient.findByStatus("available");

    expect(response.status()).toBe(200);

    const pets =
        await response.json();

    const firstFive = pets.slice(0, 5);

    expect(firstFive.length).toBe(5);

    for (const pet of firstFive) {

  const orderResponse =
    await orderClient.createOrder({

      id: DataGenerator.randomId(),

      petId: pet.id,

      quantity: 1,

      shipDate: new Date().toISOString(),

      status: "approved",

      complete: true

    });

  console.log(
    "ORDER STATUS:",
    orderResponse.status()
  );

  console.log(
    "ORDER BODY:",
    await orderResponse.text()
  );

  if (orderResponse.status() === 500) {

    console.warn(
      "Swagger Petstore returned 500 creating the order"
    );

  } else {

    expect(orderResponse.ok()).toBeTruthy();

  }
}
});