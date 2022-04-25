import { config } from "dotenv";
config();

export default {
  port: process.env.PORT || 3000,
  dbUser: process.env.DB_USER || "DESKTOP-JI16OSS/DKREAM",
  dbPassword: process.env.DB_PASSWORD || "",
  dbServer: process.env.DB_SERVER || "DESKTOP-JI16OSS",
  dbDatabase: process.env.DB_DATABASE || "facturacion",
};
