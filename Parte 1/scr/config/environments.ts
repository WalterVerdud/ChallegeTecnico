import dotenv from "dotenv";

dotenv.config({
  path: `.env.${process.env.ENV || "staging"}`
});

export const environment = {
  baseUrl: process.env.BASE_URL || ""
};
