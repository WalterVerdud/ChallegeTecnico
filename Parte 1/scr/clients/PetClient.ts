import { APIRequestContext } from "@playwright/test";
import { Pets } from "../models/Pets";

export class PetClient {

    private readonly baseUrl =
      "https://petstore3.swagger.io/api/v3";

    constructor(
      private request: APIRequestContext
    ) {}

    async createPet(pet: Pets) {

        return await this.request.post(
            `${this.baseUrl}/pet`,
            {
                data: pet
            }
        );
    }

    async getPetById(id: number) {

        return await this.request.get(
            `${this.baseUrl}/pet/${id}`
        );
    }

    async findByStatus(status: string) {

        return await this.request.get(
            `${this.baseUrl}/pet/findByStatus?status=${status}`
        );
    }

    async updatePet(pet: Pets) {

        return await this.request.put(
            `${this.baseUrl}/pet`,
            {
                data: pet
            }
        );
    }
}