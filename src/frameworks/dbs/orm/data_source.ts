import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  database: "database",
  entities: ["src/entities/impls/orm/*.entity.ts"],
  host: "host",
  options: {
    trustServerCertificate: true,
  },
  password: "password",
  port: 1433,
  type: "mssql",
  username: "username",
});
