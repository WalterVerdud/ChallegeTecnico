import { defineConfig } from "@playwright/test";
import { environment } from "./scr/config/environments";

console.log("BASE URL =>", environment.baseUrl);

export default defineConfig({

  fullyParallel: true,

  workers: 4,

  reporter: [
    ["html"],
    ["allure-playwright"]
  ],


  use: {
    baseURL: "https://www.demoblaze.com",

    screenshot: "only-on-failure",

    video: "retain-on-failure",

    trace: "on-first-retry"
  }

});