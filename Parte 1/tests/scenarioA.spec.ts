import { test, expect } from "@playwright/test";
import { PetClient } from "../scr/clients/PetClient";
import { DataGenerator } from "../scr/utils/DataGenerator";

test("Scenario A", async ({ request }) => {
 
const petClient = new PetClient(request);
 
let soldPetId = 0;
 
// 5 available
for (let i = 0; i < 5; i++) {
 
await petClient.createPet({
id: DataGenerator.randomId(),
name: DataGenerator.petName(),
status: "available"
});
}
 
// 4 pending
for (let i = 0; i < 4; i++) {
 
await petClient.createPet({
id: DataGenerator.randomId(),
name: DataGenerator.petName(),
status: "pending"
});
}
 
// 1 sold
soldPetId = DataGenerator.randomId();
 
const createResponse = await petClient.createPet({
id: soldPetId,
name: DataGenerator.petName(),
status: "sold"
});
 
expect(createResponse.status()).toBe(200);
 
const petResponse =
await petClient.getPetById(soldPetId);
 
expect(petResponse.status()).toBe(200);
 
const pet = await petResponse.json();
 
expect(pet.id).toBe(soldPetId);
expect(pet.status).toBe("sold");
});