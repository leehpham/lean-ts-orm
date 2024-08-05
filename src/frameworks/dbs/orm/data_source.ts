import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "mssql",
  host: "host",
  port: 1433,
  database: "database",
  username: "username",
  password: "password",
  // TODO: synchronize: true,
  // TODO: logging: true,
  entities: ["src/entities/impls/orm/*.entity.ts"],
  // TODO: subscribers: [],
  // TODO: migrations: [],
  options: {
    trustServerCertificate: true,
  },
});
