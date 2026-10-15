import { test, expect } from "@playwright/test";
import { PetClient } from "../scr/clients/PetClient";
import { DataGenerator } from "../scr/utils/DataGenerator";

test("Scenario C", async ({ request }) => {

  const petClient = new PetClient(request);

  const petId = DataGenerator.randomId();

  // Crear mascota

  const createResponse =
    await petClient.createPet({

      id: petId,

      name: DataGenerator.petName(),

      status: "available"

    });

  expect(createResponse.status())
    .toBe(200);

  // Actualizar mascota

  const updateResponse =
    await petClient.updatePet({

      id: petId,

      name: "Updated Pet",

      status: "sold"

    });

  expect(updateResponse.status())
    .toBe(200);

  // Verificar actualización

  await expect
    .poll(
      async () => {

        const response =
          await petClient.findByStatus(
            "sold"
          );

        if (response.status() !== 200) {

          throw new Error(
            `Unexpected status ${response.status()}`
          );
        }

        const pets =
          await response.json();

        return pets.some(
          (pet: any) =>
            pet.id === petId &&
            pet.status === "sold"
        );
      },
      {
        timeout: 15000,
        intervals: [1000]
      }
    )
    .toBeTruthy();
});